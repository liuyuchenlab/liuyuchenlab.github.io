/* ===== Markdown 数据加载器 =====
 * 从 news/、people/、publications/ 目录的 Markdown 文件加载内容。
 *
 * 自动发现机制：直接扫描文件夹下所有 .md 文件，无需手动生成索引。
 * 本地预览时从相对路径加载 MD；线上（GitHub Pages）通过 GitHub
 * contents API 动态获取目录列表，然后逐个 fetch 文件内容。
 *
 * 因此：只需往文件夹放 .md 文件并 push，网站自动识别，零脚本。
 *
 * 回退链：GitHub API -> 本地目录扫描 -> i18n.js 静态数据。
 */

const DataLoader = (function () {
  /* 仓库信息（线上扫描目录用） */
  const REPO = "liuyuchenlab/liuyuchenlab.github.io";

  /* ---------- 简易 front matter 解析器 ---------- */
  function parseFrontMatter(md) {
    const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { data: {}, body: md };
    const fmText = match[1];
    const body = md.slice(match[0].length).replace(/^\r?\n/, "").trim();
    const data = {};
    fmText.split(/\r?\n/).forEach((line) => {
      const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (!m) return;
      let key = m[1];
      let val = m[2].trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      data[key] = val;
    });
    return { data, body };
  }

  /* ---------- 将扁平 _zh / _en 字段转为 { zh, en } 对象 ---------- */
  function localize(data) {
    const result = {};
    for (const key in data) {
      if (!key.endsWith("_zh") && !key.endsWith("_en")) {
        result[key] = data[key];
      }
    }
    for (const key in data) {
      if (key.endsWith("_zh") || key.endsWith("_en")) {
        const base = key.slice(0, -3);
        if (typeof result[base] !== "object" || result[base] === null) {
          result[base] = {};
        }
        const lang = key.slice(-2);
        result[base][lang] = data[key];
      }
    }
    return result;
  }

  function withMeta(item) {
    return {
      image: item.image,
      file: item.file,
      sort: item.sort !== undefined ? Number(item.sort) : undefined,
      category: item.category,
      date: item.date,
      body: item.body,
      ...localize(item),
    };
  }

  /* ---------- 排序 ----------
   * filename = 文件名数字前缀排序（news、publications）
   * sort = 数字 sort 字段排序（people）
   */
  function sortItems(items, mode) {
    if (mode === "filename") {
      items.sort((a, b) => a.file.localeCompare(b.file));
    } else {
      items.sort((a, b) => {
        const sa = a.sort !== undefined ? a.sort : 9999;
        const sb = b.sort !== undefined ? b.sort : 9999;
        if (sa !== sb) return sa - sb;
        return a.file.localeCompare(b.file);
      });
    }
  }

  /* ---------- 获取文件夹下所有 MD 文件名 ----------
   * 优先 GitHub contents API（公开仓库匿名可访问）；
   * 失败则回退到 folder/index.json，从里面拿 file 字段列表。
   */
  async function listFiles(folder) {
    // 1. GitHub API
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${folder}`,
        { cache: "no-cache" }
      );
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data
            .filter((f) => f.name.toLowerCase().endsWith(".md"))
            .map((f) => f.name);
        }
      }
    } catch (e) {
      // 忽略网络错误
    }
    // 2. 回退 index.json
    try {
      const res = await fetch(`${folder}/index.json`, { cache: "no-cache" });
      if (res.ok) {
        const items = await res.json();
        if (Array.isArray(items)) {
          return items.map((it) => it.file).filter(Boolean);
        }
      }
    } catch (e) {}
    return null;
  }

  /* ---------- 获取单个 MD 文件内容 ----------
   * 线上：raw.githubusercontent.com
   * 本地：相对路径
   */
  async function fetchMd(folder, filename) {
    const name = filename.endsWith(".md") ? filename : `${filename}.md`;
    // 相对路径（本地开发）
    let res = await fetch(`${folder}/${name}`, { cache: "no-cache" });
    if (!res.ok) {
      // 回退 GitHub raw
      res = await fetch(
        `https://raw.githubusercontent.com/${REPO}/main/${folder}/${name}`,
        { cache: "no-cache" }
      );
    }
    if (!res.ok) return null;
    return res.text();
  }

  /* ---------- 加载文件夹所有 MD，解析并排序 ---------- */
  async function loadFolder(folder, sortMode) {
    const files = await listFiles(folder);
    if (!files || files.length === 0) return null;

    const items = [];
    for (const filename of files) {
      const md = await fetchMd(folder, filename);
      if (md === null) continue;
      const { data, body } = parseFrontMatter(md);
      items.push({ ...data, file: filename, body: body.trim() });
    }

    sortItems(items, sortMode);
    return items.map((item) => withMeta(item));
  }

  /* ---------- 加载新闻索引（最新在前） ---------- */
  async function loadNewsIndex() {
    const items = await loadFolder("news", "filename");
    return items ? items.reverse() : null;
  }

  /* ---------- 加载单条新闻详情 ---------- */
  async function loadNewsDetail(filename) {
    if (!filename) return null;
    const md = await fetchMd("news", filename);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 加载成员索引，按 category 分组 ---------- */
  async function loadMembersIndex() {
    const items = await loadFolder("people", "sort");
    if (!items || items.length === 0) return null;
    const grouped = {};
    items.forEach((m) => {
      const cat = m.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(m);
    });
    return grouped;
  }

  /* ---------- 加载单个成员详情 ---------- */
  async function loadMemberDetail(filename) {
    if (!filename) return null;
    const md = await fetchMd("people", filename);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 加载论文索引（最新在前） ---------- */
  async function loadPublicationsIndex() {
    const items = await loadFolder("publications", "filename");
    return items ? items.reverse() : null;
  }

  /* ---------- 加载单条论文详情 ---------- */
  async function loadPublicationDetail(filename) {
    if (!filename) return null;
    const md = await fetchMd("publications", filename);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 加载研究方向索引 ---------- */
  async function loadResearchIndex() {
    return loadFolder("research", "sort");
  }

  /* ---------- 加载单个研究方向详情 ---------- */
  async function loadResearchDetail(filename) {
    if (!filename) return null;
    const md = await fetchMd("research", filename);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 极简 Markdown 渲染 ----------
   * 支持 <!-- zh --> / <!-- en --> 分隔的双语内容，按语言取对应部分。
   * 处理 research-detail 用到的：标题、段落、列表、加粗、斜体、链接、换行。
   */
  function renderMd(md, lang) {
    if (!md) return "";
    let content = md;
    // 双语分隔：<!-- zh --> ... <!-- en --> ...
    const zhMatch = md.match(/<!--\s*zh\s*-->([\s\S]*?)(?=<!--|$)/i);
    const enMatch = md.match(/<!--\s*en\s*-->([\s\S]*?)(?=<!--|$)/i);
    if (zhMatch && enMatch) {
      content = (lang === "en" ? enMatch[1] : zhMatch[1]).trim();
    }
    let html = content;
    // 链接 [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    // 加粗 **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // 斜体 *text*
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    // 行内代码 `text`
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    // 标题 ## text
    html = html.replace(/^## (.+)$/gm, '<h3 style="margin:24px 0 12px;color:var(--primary);font-weight:700;font-size:1.15rem;">$1</h3>');
    // 标题 # text
    html = html.replace(/^# (.+)$/gm, '<h2 style="margin:24px 0 12px;color:var(--primary);font-weight:700;">$1</h2>');
    // 无序列表 - item
    html = html.replace(/^- (.+)$/gm, '<li style="margin:4px 0;">$1</li>');
    // 包裹连续 li 为 ul
    html = html.replace(/(<li[^>]*>.*<\/li>\s*)+/g, (match) => {
      return `<ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:8px;">${match}</ul>`;
    });
    // 空行分段
    html = html.replace(/\n\n+/g, "</p><p style=\"margin:8px 0;line-height:1.8;\">");
    // 换行 <br>
    html = html.replace(/\n/g, "<br>");
    html = "<p style=\"margin:8px 0;line-height:1.8;\">" + html + "</p>";
    return html;
  }

  return {
    parseFrontMatter,
    localize,
    renderMd,
    loadNewsIndex,
    loadNewsDetail,
    loadMembersIndex,
    loadMemberDetail,
    loadPublicationsIndex,
    loadPublicationDetail,
    loadResearchIndex,
    loadResearchDetail,
  };
})();

window.DataLoader = DataLoader;
