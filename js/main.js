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
        (item) => `
      <a href="research.html" class="research-card reveal" style="text-decoration:none;color:inherit;display:block;">
        <div class="icon">${item.icon}</div>
        <h4 data-i18n-text>${t(item.title)}</h4>
        <p data-i18n-text>${t(item.desc)}</p>
        <div class="tags">${t(item.tags).map((tag) => `<span>${tag}</span>`).join("")}</div>
      </a>`
      )
      .join("");
  }

  // 新闻列表
  const newsList = document.querySelector("#news-list");
  if (newsList) {
    newsList.innerHTML = i18n.news.items
      .map(
        (item) => `
      <a href="news.html" class="news-item reveal" style="text-decoration:none;color:inherit;">
        <div class="news-image"><img src="${item.image}" alt="${t(item.title)}" loading="lazy" /></div>
        <div class="news-body">
          <div class="news-date">${t(item.date)}</div>
          <div class="news-content">
            <h5>${t(item.title)}</h5>
            <p>${t(item.desc)}</p>
          </div>
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
