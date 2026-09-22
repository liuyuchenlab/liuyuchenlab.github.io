/* ===== Markdown 数据加载器 =====
 * 从 news/ 和 people/ 目录的 Markdown 文件加载内容。
 * index.json 由 GitHub Action (.github/scripts/generate-index.js) 自动生成；
 * 本地预览时可由该脚本手动生成。
 *
 * 此脚本解析 Markdown front matter，将 _zh / _en 后缀字段转换为
 * { zh, en } 对象，以兼容 i18n.js 中的全局 t(obj) 函数。
 *
 * 所有 fetch 失败时返回 null，调用方可回退到 i18n.js 中的静态数据。
 */

const DataLoader = (function () {
  /* ---------- 简易 front matter 解析器 ----------
   * front matter 位于文件首部，由 `---` 包裹，内部为 `key: value` 行。
   * 返回 { data, body }：data 为扁平键值对象，body 为正文 Markdown。
   */
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
      // 去除包裹的引号
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

  /* ---------- 将扁平 _zh / _en 字段本地化为 { zh, en } 对象 ----------
   * 例如 title_zh / title_en -> title: { zh, en }。
   * 若存在与后缀字段同名的裸字段（如 date），后缀字段构建的对象优先。
   */
  function localize(data) {
    const result = {};
    // 先拷贝所有非后缀字段
    for (const key in data) {
      if (!key.endsWith("_zh") && !key.endsWith("_en")) {
        result[key] = data[key];
      }
    }
    // 再用后缀字段构建 { zh, en } 对象（覆盖同名裸字段）
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

  /* ---------- 保留元数据字段（非本地化） ---------- */
  function withMeta(item) {
    return {
      image: item.image,
      file: item.file,
      sort: item.sort !== undefined ? Number(item.sort) : undefined,
      category: item.category,
      date: item.date, // ISO 日期（若存在，会被本地化对象覆盖）
      body: item.body,
      ...localize(item),
    };
  }

  async function fetchJson(url) {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) return null;
    return res.json();
  }

  async function fetchText(url) {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) return null;
    return res.text();
  }

  /* ---------- 加载新闻索引（返回本地化数组） ---------- */
  async function loadNewsIndex() {
    const items = await fetchJson("news/index.json");
    if (!items) return null;
    return items.map((item) => withMeta(item));
  }

  /* ---------- 加载单条新闻详情 ----------
   * 读取指定 .md 文件，解析 front matter，返回本地化数据。
   */
  async function loadNewsDetail(filename) {
    if (!filename) return null;
    const md = await fetchText(`news/${filename}`);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 加载成员索引，按 category 分组 ----------
   * 返回 { pi: [...], staff: [...], postdocs: [...], students: [...],
   *        undergrads: [...], alumni: [...] }
   */
  async function loadMembersIndex() {
    const items = await fetchJson("people/index.json");
    if (!items) return null;
    const localized = items.map((item) => withMeta(item));
    const grouped = {};
    localized.forEach((m) => {
      const cat = m.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(m);
    });
    return grouped;
  }

  /* ---------- 加载单个成员详情 ---------- */
  async function loadMemberDetail(filename) {
    if (!filename) return null;
    const md = await fetchText(`people/${filename}`);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  /* ---------- 加载论文索引（返回本地化数组） ---------- */
  async function loadPublicationsIndex() {
    const items = await fetchJson("publications/index.json");
    if (!items) return null;
    return items.map((item) => withMeta(item));
  }

  /* ---------- 加载单条论文详情 ----------
   * 读取指定 .md 文件，解析 front matter，返回本地化数据。
   */
  async function loadPublicationDetail(filename) {
    if (!filename) return null;
    const md = await fetchText(`publications/${filename}`);
    if (md === null) return null;
    const { data, body } = parseFrontMatter(md);
    return { ...withMeta(data), body };
  }

  return {
    parseFrontMatter,
    localize,
    loadNewsIndex,
    loadNewsDetail,
    loadMembersIndex,
    loadMemberDetail,
    loadPublicationsIndex,
    loadPublicationDetail,
  };
})();

// 暴露到全局
window.DataLoader = DataLoader;
