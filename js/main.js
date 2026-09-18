/* ===== 课题组网站交互逻辑 ===== */

document.addEventListener("DOMContentLoaded", () => {
  renderDynamicContent();
  applyI18n();
  initLangToggle();
  initNavToggle();
  initReveal();
  highlightActiveNav();
});

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

  // 新闻列表 - 带缩略图
  const newsList = document.querySelector("#news-list");
  if (newsList) {
    newsList.innerHTML = i18n.news.items
      .map(
        (item) => `
      <a href="news.html" class="news-item reveal" style="text-decoration:none;color:inherit;cursor:pointer;display:flex;gap:14px;align-items:center;">
        ${item.image ? `<img src="${item.image}" alt="" class="news-thumb" />` : ""}
        <div style="flex:1;min-width:0;">
          <span class="news-date">${t(item.date)}</span>
          <span class="news-title">${t(item.title)}</span>
        </div>
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
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
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
