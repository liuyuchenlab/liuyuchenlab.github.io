/* ===== 中英文双语系统 ===== */
// 所有页面文案集中管理，切换语言时自动渲染

const i18n = {
  // ===== 导航 =====
  nav: {
    home: { zh: "首页", en: "Home" },
    research: { zh: "研究方向", en: "Research" },
    people: { zh: "团队成员", en: "People" },
    publications: { zh: "论文成果", en: "Publications" },
    news: { zh: "新闻动态", en: "News" },
    join: { zh: "加入我们", en: "Join Us" },
    contact: { zh: "联系方式", en: "Contact" },
  },

  // ===== 品牌名 =====
  brand: {
    short: { zh: "GaGaLab", en: "GaGaLab" },
    full: { zh: "GaGaLab", en: "GaGaLab" },
  },

  // ===== 首页英雄区 =====
  hero: {
    eyebrow: { zh: "", en: "" },
    title1: { zh: "感受生命之美", en: "Feel the Beauty of Life" },
    title2: { zh: "", en: "" },
    lead: {
      zh: "我们怀着对生命的好奇与热爱，探索发育过程中的奇妙奥秘。从受精到衰老，每一个发现都让我们更接近生命的真相。",
      en: "Driven by curiosity and love for life, we explore the wonders of development. From fertilization to aging, every discovery brings us closer to the truth of life.",
    },
    btnResearch: { zh: "查看研究方向", en: "View Research" },
    btnJoin: { zh: "加入我们", en: "Join Us" },
  },

  // ===== 课题组简介 =====
  intro: {
    eyebrow: { zh: "关于我们", en: "About Us" },
    title: { zh: "探索生命的奥秘", en: "Exploring the Mysteries of Life" },
    p1: {
      zh: "GaGaLab 隶属于南开大学，围绕发育生物学核心问题开展研究，关注生命从受精卵到个体的精彩旅程。",
      en: "GaGaLab is affiliated with Nankai University, focusing on core developmental biology questions and the remarkable journey from fertilized egg to individual.",
    },
    p2: {
      zh: "我们以哺乳动物早期胚胎发育为主要模型，结合多种研究手段解析细胞命运决定与基因调控的分子机制，同时关注生殖衰老与不孕不育等与人类健康密切相关的问题。",
      en: "Using early mammalian embryonic development as a primary model, we combine multiple research approaches to dissect the molecular mechanisms of cell fate determination and gene regulation, while also addressing issues closely related to human health such as reproductive aging and infertility.",
    },
  },

  // ===== 研究方向 =====
  research: {
    eyebrow: { zh: "研究方向", en: "Research" },
    title: { zh: "我们聚焦的六大方向", en: "Six Focus Areas" },
    subtitle: {
      zh: "胚胎发育与干细胞多能性调控，我们形成了多个相互支撑的研究方向。",
      en: "Embryonic development and stem cell pluripotency regulation — we have developed multiple mutually reinforcing research directions.",
    },
    items: [
      {
        icon: "🐣",
        title: { zh: "早期胚胎发育", en: "Early Embryonic Development" },
        desc: {
          zh: "研究哺乳动物早期胚胎发育过程中的细胞命运决定与基因调控网络，结合多组学数据解析合子基因组激活与谱系分化机制。",
          en: "Studying cell fate determination and gene regulatory networks in early mammalian embryonic development, integrating multi-omics data to dissect zygotic genome activation and lineage specification.",
        },
        tags: { zh: ["胚胎", "合子基因组激活", "谱系分化"], en: ["Embryo", "ZGA", "Lineage"] },
      },
      {
        icon: "🧫",
        title: { zh: "胚胎干细胞", en: "Embryonic Stem Cells" },
        desc: {
          zh: "探索胚胎干细胞的干性维持与定向分化机制，结合单细胞测序刻画干细胞状态转换与表观遗传重编程过程。",
          en: "Exploring pluripotency maintenance and directed differentiation of embryonic stem cells, using single-cell sequencing to characterize state transitions and epigenetic reprogramming.",
        },
        tags: { zh: ["胚胎干细胞", "多能性", "分化"], en: ["ESC", "Pluripotency", "Differentiation"] },
      },
      {
        icon: "🩹",
        title: { zh: "再生医学", en: "Regenerative Medicine" },
        desc: {
          zh: "利用干细胞与类器官技术研究组织器官再生机制，开发面向损伤修复与功能重建的再生医学策略。",
          en: "Utilizing stem cell and organoid technology to study tissue and organ regeneration mechanisms, developing regenerative strategies for injury repair and functional restoration.",
        },
        tags: { zh: ["类器官", "再生", "组织修复"], en: ["Organoid", "Regeneration", "Tissue Repair"] },
      },
      {
        icon: "💉",
        title: { zh: "细胞治疗", en: "Cell Therapy" },
        desc: {
          zh: "面向免疫细胞治疗与干细胞治疗的临床转化研究，结合基因编辑与单细胞技术优化细胞治疗产品的安全性与有效性。",
          en: "Translational research on immune cell therapy and stem cell therapy, combining gene editing and single-cell technology to optimize the safety and efficacy of cell therapy products.",
        },
        tags: { zh: ["免疫治疗", "基因编辑", "转化医学"], en: ["Immunotherapy", "Gene Editing", "Translational"] },
      },
      {
        icon: "⏳",
        title: { zh: "生殖衰老", en: "Reproductive Aging" },
        desc: {
          zh: "聚焦生殖细胞与生殖器官的衰老过程，结合多组学数据解析卵母细胞质量下降、卵巢储备减退与表观遗传漂移的分子机制，探索延缓生殖衰老的干预策略。",
          en: "Focusing on the aging of germ cells and reproductive organs, using multi-omics data to dissect the molecular mechanisms of oocyte quality decline, ovarian reserve reduction, and epigenetic drift, and exploring intervention strategies to delay reproductive aging.",
        },
        tags: { zh: ["卵母细胞", "卵巢", "表观遗传"], en: ["Oocyte", "Ovary", "Epigenetics"] },
      },
      {
        icon: "🔬",
        title: { zh: "不孕不育", en: "Infertility" },
        desc: {
          zh: "从遗传学、表观遗传学与细胞生物学角度研究不孕不育的发病机制，结合单细胞与多组学技术解析配子发生异常与胚胎发育阻滞的分子基础，为临床诊疗提供新靶点。",
          en: "Studying the pathogenesis of infertility from genetic, epigenetic, and cellular biology perspectives, using single-cell and multi-omics technologies to dissect the molecular basis of gametogenesis abnormalities and embryonic developmental arrest, providing new targets for clinical diagnosis and treatment.",
        },
        tags: { zh: ["配子发生", "胚胎阻滞", "临床"], en: ["Gametogenesis", "Embryo Arrest", "Clinical"] },
      },
    ],
  },

  // ===== 新闻动态 =====
  news: {
    eyebrow: { zh: "新闻动态", en: "News" },
    title: { zh: "实验室近期动态", en: "Lab Updates" },
    items: [
      {
        date: { zh: "2026.09", en: "Sep 2026" },
        title: { zh: "课题组成员参加学术会议", en: "Lab members attended academic conference" },
        desc: { zh: "课题组多位成员在会议上作报告，展示最新研究进展。", en: "Multiple members presented reports at the conference showcasing latest progress." },
        image: "https://picsum.photos/seed/gagalab1/600/400",
      },
      {
        date: { zh: "2026.07", en: "Jul 2026" },
        title: { zh: "新论文发表于期刊名称", en: "New paper published in Journal Name" },
        desc: { zh: "关于转录组标准化方法的研究论文正式发表。", en: "A research paper on transcriptome normalization methods was published." },
        image: "https://picsum.photos/seed/gagalab2/600/400",
      },
      {
        date: { zh: "2026.06", en: "Jun 2026" },
        title: { zh: "欢迎新成员加入", en: "Welcome new members" },
        desc: { zh: "课题组迎来新入学的研究生与本科生。", en: "The lab welcomes new graduate and undergraduate students." },
        image: "https://picsum.photos/seed/gagalab3/600/400",
      },
    ],
  },

  // ===== 团队成员预览 =====
  team: {
    eyebrow: { zh: "团队成员", en: "People" },
    title: { zh: "课题组核心成员", en: "Core Members" },
    members: [
      { name: { zh: "导师姓名", en: "PI Name" }, role: { zh: "课题组长 (PI)", en: "Principal Investigator" }, focus: { zh: "发育生物学", en: "Developmental Biology" } },
      { name: { zh: "博士研究生", en: "PhD Student" }, role: { zh: "博士在读", en: "PhD Candidate" }, focus: { zh: "单细胞分析", en: "Single-cell" } },
      { name: { zh: "硕士研究A", en: "Master A" }, role: { zh: "硕士在读", en: "Master Student" }, focus: { zh: "转录组分析", en: "Transcriptome" } },
      { name: { zh: "硕士研究B", en: "Master B" }, role: { zh: "硕士在读", en: "Master Student" }, focus: { zh: "实验设计", en: "Experiment" } },
    ],
  },

  // ===== CTA 区 =====
  cta: {
    title: { zh: "加入我们", en: "Join Us" },
    lead: { zh: "我们正在各个层级招聘", en: "We are recruiting at all levels" },
    desc: {
      zh: "本科生、硕士生、博士生、博士后、科研助理与实验员，欢迎联系咨询。",
      en: "Undergraduates, master students, PhD students, postdocs, research assistants and lab technicians — feel free to reach out.",
    },
    btnContact: { zh: "联系我们", en: "Contact Us" },
    btnJoin: { zh: "招生信息", en: "Recruitment" },
  },

  home: {
    more: { zh: "更多 →", en: "More →" },
  },

  // ===== 页脚 =====
  footer: {
    aboutTitle: { zh: "GaGaLab", en: "GaGaLab" },
    about: {
      zh: "隶属于南开大学，致力于发育生物学研究。",
      en: "Affiliated with Nankai University, dedicated to developmental biology research.",
    },
    linksTitle: { zh: "快速链接", en: "Quick Links" },
    contactTitle: { zh: "联系方式", en: "Contact" },
    addr: { zh: "南开大学津南校区 · 药化生国家重点实验室", en: "Nankai University Jinnan Campus · State Key Laboratory of Medicinal Chemical Biology" },
    email: { zh: "gagalab@qq.com", en: "gagalab@qq.com" },
    copyright: { zh: "© 2026 GaGaLab. 保留所有权利。", en: "© 2026 GaGaLab. All rights reserved." },
    built: { zh: "由 GaGaLab 构建", en: "Built by GaGaLab" },
  },

  // ===== 子页面通用 =====
  pages: {
    backHome: { zh: "返回首页", en: "Back to Home" },
  },

  // ===== 研究方向详情页 research.html =====
  researchPage: {
    title: { zh: "研究方向", en: "Research" },
    subtitle: {
      zh: "胚胎发育与干细胞多能性调控，我们形成了多个相互支撑的研究方向。",
      en: "Embryonic development and stem cell pluripotency regulation — we have developed multiple mutually reinforcing research directions.",
    },
    findingsLabel: { zh: "代表论文", en: "Representative Publications" },
    items: [
      {
        icon: "🐣",
        title: { zh: "早期胚胎发育", en: "Early Embryonic Development" },
        desc: {
          zh: "研究哺乳动物早期胚胎发育过程中的细胞命运决定与基因调控网络。我们结合单细胞转录组、表观组与空间转录组等多组学数据，解析合子基因组激活（ZGA）、谱系分化与 X 染色体失活等关键发育事件的分子机制。",
          en: "Studying cell fate determination and gene regulatory networks in early mammalian embryonic development. We integrate single-cell transcriptome, epigenome, and spatial transcriptome data to dissect the molecular mechanisms of key developmental events such as zygotic genome activation (ZGA), lineage specification, and X chromosome inactivation.",
        },
        tags: { zh: ["胚胎", "合子基因组激活", "谱系分化", "X染色体失活"], en: ["Embryo", "ZGA", "Lineage", "XCI"] },
        findings: [
          { year: "2025", title: { zh: "单细胞图谱揭示小鼠早期胚胎谱系分化的关键调控因子", en: "Single-cell atlas reveals key regulators of lineage segregation in early mouse embryos" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Cell Reports", en: "Cell Reports" }, link: "#" },
          { year: "2024", title: { zh: "合子基因组激活过程中染色质开放动态的全基因组分析", en: "Genome-wide analysis of chromatin accessibility dynamics during zygotic genome activation" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Nature Communications", en: "Nature Communications" }, link: "#" },
        ],
      },
      {
        icon: "🧫",
        title: { zh: "胚胎干细胞", en: "Embryonic Stem Cells" },
        desc: {
          zh: "探索胚胎干细胞的干性维持与定向分化机制。结合单细胞测序与基因编辑技术，刻画干细胞状态转换、表观遗传重编程以及向特定谱系分化的调控网络，为再生医学提供细胞来源。",
          en: "Exploring pluripotency maintenance and directed differentiation of embryonic stem cells. Combining single-cell sequencing and gene editing to characterize stem cell state transitions, epigenetic reprogramming, and regulatory networks of lineage-specific differentiation, providing cell sources for regenerative medicine.",
        },
        tags: { zh: ["胚胎干细胞", "多能性", "分化", "表观遗传"], en: ["ESC", "Pluripotency", "Differentiation", "Epigenetics"] },
        findings: [
          { year: "2025", title: { zh: "胚胎干细胞多能性退出过程中的表观遗传重编程机制", en: "Epigenetic reprogramming during pluripotency exit in embryonic stem cells" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Stem Cell Reports", en: "Stem Cell Reports" }, link: "#" },
          { year: "2023", title: { zh: "单细胞测序解析胚胎干细胞向中胚层分化的轨迹", en: "Single-cell sequencing dissects the trajectory of ESC differentiation toward mesoderm" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Cell Stem Cell", en: "Cell Stem Cell" }, link: "#" },
        ],
      },
      {
        icon: "🩹",
        title: { zh: "再生医学", en: "Regenerative Medicine" },
        desc: {
          zh: "利用干细胞与类器官技术研究组织器官再生机制。通过构建体外类器官模型，模拟器官发育与损伤修复过程，开发面向组织损伤修复与功能重建的再生医学策略。",
          en: "Utilizing stem cell and organoid technology to study tissue and organ regeneration mechanisms. By constructing in vitro organoid models to mimic organ development and injury repair, we develop regenerative strategies for tissue injury repair and functional restoration.",
        },
        tags: { zh: ["类器官", "再生", "组织修复", "干细胞"], en: ["Organoid", "Regeneration", "Tissue Repair", "Stem Cells"] },
        findings: [
          { year: "2024", title: { zh: "类器官模型在肝脏再生研究中的应用", en: "Application of organoid models in liver regeneration research" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Cell Reports Medicine", en: "Cell Reports Medicine" }, link: "#" },
        ],
      },
      {
        icon: "💉",
        title: { zh: "细胞治疗", en: "Cell Therapy" },
        desc: {
          zh: "面向免疫细胞治疗与干细胞治疗的临床转化研究。结合基因编辑与单细胞技术，优化细胞治疗产品的制备工艺，提升治疗的安全性与有效性，推动从实验室到临床的转化。",
          en: "Translational research on immune cell therapy and stem cell therapy. Combining gene editing and single-cell technology to optimize the manufacturing process of cell therapy products, improving therapeutic safety and efficacy, and advancing bench-to-bedside translation.",
        },
        tags: { zh: ["免疫治疗", "基因编辑", "转化医学", "工艺开发"], en: ["Immunotherapy", "Gene Editing", "Translational", "Manufacturing"] },
        findings: [
          { year: "2025", title: { zh: "基因编辑优化 CAR-T 细胞治疗实体瘤的疗效与安全性", en: "Gene editing optimizes the efficacy and safety of CAR-T cell therapy for solid tumors" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Molecular Therapy", en: "Molecular Therapy" }, link: "#" },
        ],
      },
      {
        icon: "⏳",
        title: { zh: "生殖衰老", en: "Reproductive Aging" },
        desc: {
          zh: "聚焦生殖细胞与生殖器官的衰老过程，特别是卵母细胞老化与卵巢功能衰退。结合单细胞转录组与表观组数据，解析生殖衰老过程中表观遗传漂移、线粒体功能障碍与染色体分离异常的分子机制，探索延缓生殖衰老与改善辅助生殖结局的干预策略。",
          en: "Focusing on the aging of germ cells and reproductive organs, particularly oocyte aging and ovarian function decline. Combining single-cell transcriptome and epigenome data to dissect the molecular mechanisms of epigenetic drift, mitochondrial dysfunction, and chromosome segregation errors during reproductive aging, and exploring intervention strategies to delay reproductive aging and improve assisted reproductive outcomes.",
        },
        tags: { zh: ["卵母细胞", "卵巢", "表观遗传", "线粒体"], en: ["Oocyte", "Ovary", "Epigenetics", "Mitochondria"] },
        findings: [
          { year: "2025", title: { zh: "卵母细胞衰老过程中线粒体功能障碍的表观遗传调控机制", en: "Epigenetic regulation of mitochondrial dysfunction during oocyte aging" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Aging Cell", en: "Aging Cell" }, link: "#" },
          { year: "2024", title: { zh: "单细胞转录组揭示卵巢衰老的细胞异质性变化", en: "Single-cell transcriptomics reveals cellular heterogeneity changes in ovarian aging" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Cell Reports", en: "Cell Reports" }, link: "#" },
        ],
      },
      {
        icon: "🔬",
        title: { zh: "不孕不育", en: "Infertility" },
        desc: {
          zh: "从遗传学、表观遗传学与细胞生物学角度系统研究不孕不育的发病机制。结合单细胞测序与多组学整合分析，解析配子发生异常、受精失败与早期胚胎发育阻滞的分子基础，为不孕不育的临床诊断与精准治疗提供新的生物标志物与干预靶点。",
          en: "Systematically studying the pathogenesis of infertility from genetic, epigenetic, and cellular biology perspectives. Combining single-cell sequencing and multi-omics integration analysis to dissect the molecular basis of gametogenesis abnormalities, fertilization failure, and early embryonic developmental arrest, providing new biomarkers and intervention targets for clinical diagnosis and precision treatment of infertility.",
        },
        tags: { zh: ["配子发生", "胚胎阻滞", "生物标志物", "临床"], en: ["Gametogenesis", "Embryo Arrest", "Biomarker", "Clinical"] },
        findings: [
          { year: "2025", title: { zh: "早期胚胎发育阻滞的多组学整合分析与生物标志物筛选", en: "Multi-omics integration analysis and biomarker screening for early embryonic developmental arrest" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "Human Reproduction", en: "Human Reproduction" }, link: "#" },
          { year: "2023", title: { zh: "受精失败的遗传学机制研究", en: "Genetic mechanisms underlying fertilization failure" }, authors: { zh: "刘雨辰, 等", en: "Liu Y, et al." }, venue: { zh: "AJHG", en: "AJHG" }, link: "#" },
        ],
      },
    ],
  },

  // ===== 团队成员页 people.html =====
  peoplePage: {
    title: { zh: "团队成员", en: "People" },
    subtitle: {
      zh: "课题组由一名课题组长（PI）、若干博士/硕士研究生与本科生组成。我们欢迎对发育生物学感兴趣的同学加入。",
      en: "The lab consists of a Principal Investigator (PI), several PhD/Master students and undergraduates. We welcome students interested in developmental biology to join us.",
    },
    piTitle: { zh: "课题组长", en: "Principal Investigator" },
    pi: {
      name: { zh: "刘雨辰", en: "Yuchen Liu" },
      image: "assets/liuyuchen.JPG",
      role: { zh: "课题组长 / 教授", en: "Principal Investigator / Professor" },
      bio: {
        zh: "刘雨辰于南开大学获得博士学位，主要研究方向为发育生物学，聚焦早期胚胎发育、干细胞多能性调控与生殖衰老等问题。",
        en: "Yuchen Liu received a PhD from Nankai University, with main research directions in developmental biology, focusing on early embryonic development, stem cell pluripotency regulation, and reproductive aging.",
      },
      interests: { zh: "研究方向：早期胚胎发育 · 干细胞 · 生殖衰老", en: "Research: Early Embryonic Development · Stem Cells · Reproductive Aging" },
    },
    studentsTitle: { zh: "研究生", en: "Graduate Students" },
    students: [
      { name: { zh: "博士研究生", en: "PhD Student" }, image: "assets/boshiyanjiusheng.JPG", role: { zh: "博士在读 (2024 级)", en: "PhD Candidate (2024)" }, focus: { zh: "单细胞转录组分析", en: "Single-cell transcriptome" } },
      { name: { zh: "硕士研究A", en: "Master A" }, image: "assets/yanjiushenga.JPG", role: { zh: "硕士在读 (2025 级)", en: "Master Student (2025)" }, focus: { zh: "转录组标准化方法", en: "Transcriptome normalization" } },
      { name: { zh: "硕士研究B", en: "Master B" }, image: "assets/yanjiushengb.JPG", role: { zh: "硕士在读 (2025 级)", en: "Master Student (2025)" }, focus: { zh: "CRISPR 实验设计工具", en: "CRISPR design tools" } },
      { name: { zh: "硕士研究C", en: "Master C" }, image: "assets/yanjiushengc.JPG", role: { zh: "硕士在读 (2026 级)", en: "Master Student (2026)" }, focus: { zh: "基因集富集分析", en: "Gene set enrichment" } },
    ],
    undergradsTitle: { zh: "本科生", en: "Undergraduates" },
    undergrads: [
      { name: { zh: "本科同学A", en: "Undergrad A" }, image: "assets/benkeshenga.JPG", role: { zh: "本科科研训练", en: "Undergrad Research" }, focus: { zh: "qPCR 数据分析", en: "qPCR analysis" } },
      { name: { zh: "本科同学B", en: "Undergrad B" }, image: "assets/bengkeshengb.JPG", role: { zh: "本科科研训练", en: "Undergrad Research" }, focus: { zh: "R 包开发辅助", en: "R package dev" } },
    ],
    staffTitle: { zh: "工作人员", en: "Staff" },
    staff: [
      { name: { zh: "科研助理", en: "Research Assistant" }, image: "assets/keyanzhuli.JPG", role: { zh: "科研助理", en: "Research Assistant" }, focus: { zh: "实验室行政管理", en: "Lab administration" } },
      { name: { zh: "实验员", en: "Lab Technician" }, image: "assets/shiyanyuan.JPG", role: { zh: "实验员", en: "Lab Technician" }, focus: { zh: "实验技术支持", en: "Lab technical support" } },
    ],
    postdocsTitle: { zh: "博士后", en: "Postdocs" },
    postdocs: [
      { name: { zh: "博士后", en: "Postdoctoral Fellow" }, image: "assets/boshihou.JPG", role: { zh: "博士后", en: "Postdoctoral Fellow" }, focus: { zh: "早期胚胎发育", en: "Early embryonic development" } },
    ],
    alumniTitle: { zh: "校友", en: "Alumni" },
    alumni: [
      { name: { zh: "已毕业校友A", en: "Alumnus A" }, image: "assets/biyea.JPG", role: { zh: "硕士毕业 (2024)", en: "MS (2024)" }, focus: { zh: "去向：博士深造", en: "Now: PhD study" } },
      { name: { zh: "已毕业校友B", en: "Alumnus B" }, image: "assets/biyeb.JPG", role: { zh: "本科毕业 (2023)", en: "BS (2023)" }, focus: { zh: "去向：企业就业", en: "Now: Industry" } },
    ],
  },

  // ===== 论文成果页 publications.html =====
  publicationsPage: {
    title: { zh: "论文成果", en: "Publications" },
    subtitle: {
      zh: "课题组的代表性论文与软件工具。* 表示通讯/共同作者。",
      en: "Representative publications and software tools from the lab. * denotes corresponding/co-author.",
    },
    categories: {
      all: { zh: "全部", en: "All" },
      journal: { zh: "期刊论文", en: "Journal" },
      software: { zh: "软件工具", en: "Software" },
      patent: { zh: "专利", en: "Patent" },
    },
    items: [
      {
        year: "2026",
        type: "journal",
        citation: {
          zh: "Zhu M, Catta-Preta R, Lee C, Tabin CJ. Shifts in embryonic oxygen levels cue heterochrony in limb initiation. Cell, 2026. doi: 10.1101/2024.10.25.620348. Accepted in principle.",
          en: "Zhu M, Catta-Preta R, Lee C, Tabin CJ. Shifts in embryonic oxygen levels cue heterochrony in limb initiation. Cell, 2026. doi: 10.1101/2024.10.25.620348. Accepted in principle.",
        },
        link: "https://doi.org/10.1101/2024.10.25.620348",
      },
      {
        year: "2026",
        type: "journal",
        citation: {
          zh: "Zhu M. Re-examining the role of oxygen in mammalian embryogenesis. Development 1 April 2026; 153 (7): dev205661. doi: 10.1242/dev.205661.",
          en: "Zhu M. Re-examining the role of oxygen in mammalian embryogenesis. Development 1 April 2026; 153 (7): dev205661. doi: 10.1242/dev.205661.",
        },
        link: "https://doi.org/10.1242/dev.205661",
      },
      {
        year: "2026",
        type: "patent",
        citation: {
          zh: "刘雨辰. 一种基于早期胚胎发育标志物的细胞质量评估方法. 发明专利（申请中）.",
          en: "Liu Y. A method for cell quality assessment based on early embryonic development markers. Invention Patent (Pending).",
        },
        link: "#",
      },
      {
        year: "2024",
        type: "software",
        citation: {
          zh: "Liu Y. qqercc: Normalization for RNA-Seq data with ERCC spike-in. GitHub open-source R package, 2024.",
          en: "Liu Y. qqercc: Normalization for RNA-Seq data with ERCC spike-in. GitHub open-source R package, 2024.",
        },
        link: "https://github.com/liuyuchenlab/qqercc",
      },
      {
        year: "2024",
        type: "software",
        citation: {
          zh: "Liu Y. qqgmt: One-click DIY GMT file generation for GSEA. GitHub open-source R package, 2024.",
          en: "Liu Y. qqgmt: One-click DIY GMT file generation for GSEA. GitHub open-source R package, 2024.",
        },
        link: "https://github.com/liuyuchenlab/qqgmt",
      },
      {
        year: "2024",
        type: "software",
        citation: {
          zh: "Liu Y. qqdeg: One-click DEG and enrichment results. GitHub open-source R package, 2024.",
          en: "Liu Y. qqdeg: One-click DEG and enrichment results. GitHub open-source R package, 2024.",
        },
        link: "https://github.com/liuyuchenlab/qqdeg",
      },
      {
        year: "2024",
        type: "software",
        citation: {
          zh: "Liu Y. qqseq: One-click exon and intron sequences from transcripts. GitHub open-source R package, 2024.",
          en: "Liu Y. qqseq: One-click exon and intron sequences from transcripts. GitHub open-source R package, 2024.",
        },
        link: "https://github.com/liuyuchenlab/qqseq",
      },
      {
        year: "2023",
        type: "software",
        citation: {
          zh: "Liu Y. qqpcr: Quick qPCR relative expression. GitHub open-source R package, 2023.",
          en: "Liu Y. qqpcr: Quick qPCR relative expression. GitHub open-source R package, 2023.",
        },
        link: "https://github.com/liuyuchenlab/qqpcr",
      },
    ],
  },

  // ===== 新闻页 news.html =====
  newsPage: {
    title: { zh: "新闻动态", en: "News" },
    subtitle: {
      zh: "课题组的最新动态，包括论文发表、会议报告、招生与活动。",
      en: "Latest updates from the lab, including publications, conference talks, recruitment, and events.",
    },
    items: [
      { date: { zh: "2026.09", en: "Sep 2026" }, title: { zh: "课题组成员参加学术会议并作报告", en: "Lab members attended academic conference and gave talks" }, desc: { zh: "课题组多位成员在会议上作报告，展示最新研究进展。", en: "Multiple members presented reports at the conference showcasing latest progress." }, image: "https://picsum.photos/seed/gagalab1/600/400", content: { zh: "2026年9月，课题组多位成员参加了发育生物学国际学术会议，并在会上作了口头报告，展示了我们在早期胚胎发育与干细胞多能性调控方面的最新研究成果。会议期间，团队成员与国内外同行进行了深入交流，达成了多项合作意向。", en: "In September 2026, several lab members attended the International Conference on Developmental Biology and delivered oral presentations showcasing our latest findings in early embryonic development and stem cell pluripotency regulation. During the conference, team members engaged in in-depth discussions with peers from home and abroad, establishing multiple collaboration intentions." } },
      { date: { zh: "2026.07", en: "Jul 2026" }, title: { zh: "新论文发表于期刊名称", en: "New paper published in Journal Name" }, desc: { zh: "关于转录组标准化方法的研究论文正式发表。", en: "A research paper on transcriptome normalization methods was published." }, image: "https://picsum.photos/seed/gagalab2/600/400", content: { zh: "我们关于转录组标准化方法的研究论文于2026年7月正式发表。该研究提出了一种新的标准化算法，能够更准确地处理单细胞转录组数据中的批次效应，为发育生物学研究提供了更可靠的分析工具。", en: "Our research paper on transcriptome normalization methods was officially published in July 2026. This study proposes a novel normalization algorithm that can more accurately handle batch effects in single-cell transcriptome data, providing a more reliable analytical tool for developmental biology research." } },
      { date: { zh: "2026.06", en: "Jun 2026" }, title: { zh: "欢迎新成员加入课题组", en: "Welcome new members to the lab" }, desc: { zh: "课题组迎来新入学的研究生与本科生。", en: "The lab welcomes new graduate and undergraduate students." }, image: "https://picsum.photos/seed/gagalab3/600/400", content: { zh: "2026年6月，课题组迎来了新入学的研究生与本科生。新成员的加入为课题组注入了新鲜血液，期待他们在发育生物学领域展现才华，与课题组共同成长。", en: "In June 2026, the lab welcomed new graduate and undergraduate students. The arrival of new members has injected fresh vitality into the lab. We look forward to their talents in developmental biology and growing together with the lab." } },
      { date: { zh: "2026.03", en: "Mar 2026" }, title: { zh: "qqercc R 包更新至新版本", en: "qqercc R package updated to new version" }, desc: { zh: "新增对更多 ERCC spike-in 模式的支持，改进标准化算法。", en: "Added support for more ERCC spike-in patterns, improved normalization algorithm." }, image: "https://picsum.photos/seed/gagalab4/600/400", content: { zh: "2026年3月，qqercc R 包更新至新版本。本次更新新增了对更多 ERCC spike-in 模式的支持，并改进了标准化算法的运行效率与稳定性。用户可通过 GitHub 安装最新版本。", en: "In March 2026, the qqercc R package was updated to a new version. This update adds support for more ERCC spike-in patterns and improves the efficiency and stability of the normalization algorithm. Users can install the latest version via GitHub." } },
      { date: { zh: "2025.12", en: "Dec 2025" }, title: { zh: "课题组年度总结与团建活动", en: "Lab annual summary and team building" }, desc: { zh: "回顾一年的研究成果，展望来年工作方向。", en: "Reviewing the year's research achievements and looking ahead to next year's directions." }, image: "https://picsum.photos/seed/gagalab5/600/400", content: { zh: "2025年12月，课题组举行了年度总结会议与团建活动。会议回顾了一年来的研究成果与进展，明确了来年的工作方向与重点。团建活动增进了团队成员之间的交流与默契。", en: "In December 2025, the lab held its annual summary meeting and team-building activity. The meeting reviewed the research achievements and progress over the year and clarified the work directions and priorities for the coming year. The team-building activity enhanced communication and rapport among team members." } },
      { date: { zh: "2025.10", en: "Oct 2025" }, title: { zh: "与合作团队发表联合研究", en: "Joint research published with collaborators" }, desc: { zh: "与某实验室合作的关于胚胎发育的研究正式发表。", en: "A collaborative study on embryonic development was published." }, image: "https://picsum.photos/seed/gagalab6/600/400", content: { zh: "2025年10月，我们与合作团队联合开展的关于胚胎发育的研究正式发表。该研究揭示了早期胚胎发育过程中细胞命运决定的新机制，为理解发育异常提供了新的视角。", en: "In October 2025, our collaborative study on embryonic development with partner teams was officially published. This study revealed a new mechanism of cell fate determination during early embryonic development, providing a new perspective for understanding developmental abnormalities." } },
    ],
  },

  // ===== 招生页 join.html =====
  joinPage: {
    title: { zh: "加入我们", en: "Join Us" },
    subtitle: {
      zh: "课题组常年招收对发育生物学感兴趣的同学。无论你是本科生、研究生还是博士后，都欢迎与我们联系。",
      en: "We welcome students interested in developmental biology all year round. Whether you are an undergraduate, graduate student, or postdoc, feel free to reach out.",
    },
    positionsTitle: { zh: "招收方向", en: "Open Positions" },
    positions: [
      {
        role: { zh: "本科生", en: "Undergraduate" },
        desc: { zh: "欢迎发育生物学及生命科学相关专业本科生进组参与科研训练，探索胚胎发育与干细胞的奥秘。", en: "Undergraduates in developmental biology or related life science majors are welcome to join for research training, exploring embryonic development and stem cells." },
      },
      {
        role: { zh: "硕士研究生", en: "Master Student" },
        desc: { zh: "招收发育生物学方向硕士生，围绕早期胚胎发育、干细胞多能性调控等方向开展研究。", en: "Recruiting master students in developmental biology, conducting research on early embryonic development and stem cell pluripotency regulation." },
      },
      {
        role: { zh: "博士研究生", en: "PhD Student" },
        desc: { zh: "招收发育生物学方向博士生，开展胚胎发育、细胞命运决定与生殖衰老等方向的独立研究。", en: "Recruiting PhD students in developmental biology for independent research on embryonic development, cell fate determination, and reproductive aging." },
      },
      {
        role: { zh: "博士后", en: "Postdoc" },
        desc: { zh: "诚邀发育生物学及相关方向的博士后加入，开展独立与合作研究。", en: "Postdocs in developmental biology or related fields are welcome to join for independent and collaborative research." },
      },
      {
        role: { zh: "科研助理", en: "Research Assistant" },
        desc: { zh: "招聘发育生物学方向科研助理，协助课题组开展实验研究与日常管理工作。", en: "Recruiting research assistants in developmental biology to assist with experimental research and daily lab management." },
      },
      {
        role: { zh: "实验员", en: "Lab Technician" },
        desc: { zh: "招聘实验员，负责实验室日常运营、仪器维护与实验技术支持。", en: "Recruiting a lab technician responsible for daily lab operations, equipment maintenance, and technical support." },
      },
    ],
    applyTitle: { zh: "申请方式", en: "How to Apply" },
    applySteps: [
      { step: { zh: "准备材料：个人简历、研究兴趣简述。", en: "Prepare materials: CV, brief statement of research interests." } },
      { step: { zh: "发送邮件至课题组邮箱，邮件标题格式：博士/博士后/科研助理申请-姓名-年份（如：博士申请-张三-2027）。", en: "Email the lab mailbox with subject format: PhD/Postdoc/RA Application-Name-Year (e.g., PhD Application-Zhang San-2027)." } },
      { step: { zh: "初步筛选后，我们将安排面谈或线上交流。", en: "After initial screening, we will arrange an interview or online chat." } },
    ],
    contactCta: { zh: "期待你的来信，一起探索生命的奥秘。", en: "Looking forward to your message to explore the mysteries of life together." },
  },

  // ===== 联系页 contact.html =====
  contactPage: {
    title: { zh: "联系方式", en: "Contact" },
    subtitle: {
      zh: "欢迎通过以下方式与我们联系。招生咨询、合作交流、工具反馈均可。",
      en: "Feel free to reach out via the following. Recruitment, collaboration, and tool feedback are all welcome.",
    },
    infoTitle: { zh: "联系信息", en: "Contact Info" },
    addrLabel: { zh: "地址", en: "Address" },
    addr: { zh: "南开大学津南校区 · 药化生国家重点实验室", en: "Nankai University Jinnan Campus · State Key Laboratory of Medicinal Chemical Biology" },
    emailLabel: { zh: "邮箱", en: "Email" },
    socialTitle: { zh: "在线平台", en: "Online Platforms" },
    github: { zh: "GitHub 代码仓库", en: "GitHub Repositories" },
    social: { zh: "社交媒体", en: "Social Media" },
    mapTitle: { zh: "位置示意", en: "Location Map" },
    mapNote: { zh: "南开大学津南校区", en: "Nankai University Jinnan Campus" },
  },
};

/* ---------- 当前语言 & 切换 ---------- */
let currentLang = "zh";

// 读取本地存储的语言偏好
(function initLang() {
  const saved = localStorage.getItem("lab-lang");
  if (saved === "en" || saved === "zh") currentLang = saved;
})();

function t(obj) {
  if (!obj) return "";
  return obj[currentLang] !== undefined ? obj[currentLang] : obj.zh || "";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lab-lang", lang);
  applyI18n();
  // 更新切换按钮高亮
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  // 更新 html lang 属性
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  // 通知各页面重新渲染动态内容
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* ---------- 渲染所有带 data-i18n 的元素 ---------- */
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getByPath(i18n, key);
    if (val) el.textContent = val;
  });
  // 处理 placeholder / title 等属性
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach((p) => {
      const [attr, key] = p.split(":").map((s) => s.trim());
      const val = getByPath(i18n, key);
      if (val) el.setAttribute(attr, val);
    });
  });
}

function getByPath(obj, path) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur && cur[p] !== undefined) cur = cur[p];
    else return null;
  }
  if (cur && typeof cur === "object" && (cur.zh !== undefined || cur.en !== undefined)) {
    return cur[currentLang];
  }
  return cur;
}

// 暴露给全局
window.i18n = i18n;
window.currentLang = currentLang;
window.t = t;
window.setLang = setLang;
window.applyI18n = applyI18n;
