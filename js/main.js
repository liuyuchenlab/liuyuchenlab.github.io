/* ===== 课题组网站交互逻辑 ===== */

document.addEventListener("DOMContentLoaded", () => {
  renderDynamicContent();
  applyI18n();
  updatePageTitle();
  initLangToggle();
  initNavToggle();
  initReveal();
  highlightActiveNav();
});

/* ---------- 根据当前语言更新浏览器标签页标题 ---------- */
function updatePageTitle() {
  const page = location.pathname.split("/").pop() || "index.html";
  const map = {
    "index.html": "nav.home",
    "research.html": "nav.research",
    "people.html": "nav.people",
    "publications.html": "nav.publications",
    "news.html": "nav.news",
    "join.html": "nav.join",
    "contact.html": "nav.contact",
  };
  const key = map[page];
  if (key) {
    if (page === "index.html") {
      document.title = "GaGaLab";
    } else {
      document.title = `${getByPath(i18n, key)}-GaGaLab`;
    }
  }
}
window.addEventListener("langchange", updatePageTitle);

/* ---------- 渲染动态列表（研究方向 / 新闻 / 团队） ---------- */
function renderDynamicContent() {
  // 研究方向卡片
  const researchGrid = document.querySelector("#research-grid");
  if (researchGrid) {
    researchGrid.innerHTML = i18n.research.items
      .map(
        (item, i) => `
      <a href="research-detail.html?dir=${i}" class="research-card reveal" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">
        <div class="icon">${item.icon}</div>
        <h4 data-i18n-text>${t(item.title)}</h4>
        <p data-i18n-text>${t(item.desc)}</p>
        <div class="tags">${t(item.tags).map((tag) => `<span>${tag}</span>`).join("")}</div>
      </a>`
      )
      .join("");
  }

  // 新闻列表 - 纯文字（首页）
  const newsList = document.querySelector("#news-list");
  if (newsList) {
    newsList.innerHTML = i18n.news.items
      .map(
        (item, i) => `
      <a href="news-detail.html?id=${i}" class="news-item reveal" style="text-decoration:none;color:inherit;cursor:pointer;">
        <span class="news-date">${t(item.date)}</span>
        <span class="news-title">${t(item.title)}</span>
      </a>`
      )
      .join("");
  }

  // 团队成员
  const teamGrid = document.querySelector("#team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = i18n.team.members
      .map((m, i) => {
        const initial = (t(m.name) || "?").charAt(0);
        return `
      <article class="member-card reveal">
        <div class="avatar">${initial}</div>
        <h4>${t(m.name)}</h4>
        <div class="role">${t(m.role)}</div>
        <div class="focus">${t(m.focus)}</div>
      </article>`;
      })
      .join("");
  }
}

/* ---------- 语言切换按钮 ---------- */
function initLangToggle() {
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.addEventListener("click", () => {
      setLang(b.dataset.lang);
      // 重新渲染动态内容
      renderDynamicContent();
      applyI18n();
    });
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
}

/* ---------- 移动端导航展开 ---------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
    // 点击链接后收起
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }
}

/* ---------- 滚动出现动画 ---------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  const revealInViewport = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };
  const observeAll = () =>
    document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
      // 语言切换后重新渲染的元素：若已在视口内则立即显示，避免内容消失
      if (revealInViewport(el)) el.classList.add("in-view");
      else observer.observe(el);
    });
  observeAll();
  // 语言切换/动态渲染后新增的 .reveal 元素自动处理
  const mo = new MutationObserver(() => observeAll());
  mo.observe(document.body, { childList: true, subtree: true });
}

/* ---------- 高亮当前导航 ---------- */
function highlightActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "index.html" && (href === "index.html" || href === "./"))) {
      a.classList.add("active");
    }
  });
}
