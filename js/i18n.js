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
    eyebrow: { zh: "发育生物学 · 生物信息学", en: "Developmental Biology · Bioinformatics" },
    title1: { zh: "用数据", en: "Decoding Life" },
    title2: { zh: "解码发育", en: "With Data" },
    lead: {
      zh: "GaGaLab 是一支专注于发育生物学与生物信息学的课题组，致力于通过多组学数据分析与算法开发，揭示胚胎发育与细胞命运决定的分子机制。",
      en: "GaGaLab is a research group focused on developmental biology and bioinformatics, dedicated to revealing the molecular mechanisms of embryonic development and cell fate determination through multi-omics data analysis and algorithm development.",
    },
    btnResearch: { zh: "查看研究方向", en: "View Research" },
    btnJoin: { zh: "加入我们", en: "Join Us" },
    stat1Num: { zh: "5", en: "5" },
    stat1Label: { zh: "研究方向", en: "Research Areas" },
    stat2Num: { zh: "10", en: "10" },
    stat2Label: { zh: "团队成员", en: "Members" },
    stat3Num: { zh: "30", en: "30" },
    stat3Label: { zh: "发表论文", en: "Publications" },
  },

  // ===== 课题组简介 =====
  intro: {
    eyebrow: { zh: "关于我们", en: "About Us" },
    title: { zh: "探索生命科学的数字密码", en: "Exploring the Digital Code of Life" },
    p1: {
      zh: "GaGaLab 隶属于学校名称学院名称，围绕发育生物学核心问题，结合生物信息学方法学与多组学数据分析开展研究。",
      en: "GaGaLab is affiliated with the School of XX at University Name, focusing on core developmental biology questions combined with bioinformatics methodology and multi-omics data analysis.",
    },
    p2: {
      zh: "我们以哺乳动物早期胚胎发育与 X 染色体失活为主要模型，整合转录组、表观组、单细胞等多维度数据，开发面向实验生物学家的易用工具（如 R 包），解析细胞命运决定与基因调控的分子机制。",
      en: "Using early mammalian embryonic development and X chromosome inactivation as primary models, we integrate multi-dimensional data including transcriptome, epigenome, and single-cell, develop easy-to-use tools (e.g., R packages) for experimental biologists, and dissect the molecular mechanisms of cell fate determination and gene regulation.",
    },
    kw1: { zh: "方法开发", en: "Methods" },
    kw2: { zh: "多组学整合", en: "Multi-omics" },
    kw3: { zh: "单细胞分析", en: "Single-cell" },
    kw4: { zh: "R 语言工具", en: "R Toolkit" },
  },

  // ===== 研究方向 =====
  research: {
    eyebrow: { zh: "研究方向", en: "Research" },
    title: { zh: "我们聚焦的五大方向", en: "Five Focus Areas" },
    subtitle: {
      zh: "围绕生物信息学方法学与生物学问题，我们形成了多个相互支撑的研究方向。",
      en: "Centered on bioinformatics methodology and biological questions, we have developed multiple mutually reinforcing research directions.",
    },
    items: [
      {
        icon: "🐣",
        title: { zh: "早期胚胎发育", en: "Early Embryonic Development" },
        desc: {
          zh: "研究哺乳动物早期胚胎发育过程中的细胞命运决定与基因调控网络，结合多组学数据解析合子基因组激活与谱系分化机制。",
          en: "Studying cell fate determination and gene regulatory networks in early mammalian embryonic development, integrating multi-omics data to dissect zygotic genome activation and lineage specification.",
        },
        tags: ["Embryo", "ZGA", "Lineage"],
      },
      {
        icon: "🧫",
        title: { zh: "胚胎干细胞", en: "Embryonic Stem Cells" },
        desc: {
          zh: "探索胚胎干细胞的干性维持与定向分化机制，结合单细胞测序刻画干细胞状态转换与表观遗传重编程过程。",
          en: "Exploring pluripotency maintenance and directed differentiation of embryonic stem cells, using single-cell sequencing to characterize state transitions and epigenetic reprogramming.",
        },
        tags: ["ESC", "Pluripotency", "Differentiation"],
      },
      {
        icon: "🩹",
        title: { zh: "再生医学", en: "Regenerative Medicine" },
        desc: {
          zh: "利用干细胞与类器官技术研究组织器官再生机制，开发面向损伤修复与功能重建的再生医学策略。",
          en: "Utilizing stem cell and organoid technology to study tissue and organ regeneration mechanisms, developing regenerative strategies for injury repair and functional restoration.",
        },
        tags: ["Organoid", "Regeneration", "Tissue Repair"],
      },
      {
        icon: "💉",
        title: { zh: "细胞治疗", en: "Cell Therapy" },
        desc: {
          zh: "面向免疫细胞治疗与干细胞治疗的临床转化研究，结合基因编辑与单细胞技术优化细胞治疗产品的安全性与有效性。",
          en: "Translational research on immune cell therapy and stem cell therapy, combining gene editing and single-cell technology to optimize the safety and efficacy of cell therapy products.",
        },
        tags: ["Immunotherapy", "Gene Editing", "Translational"],
      },
      {
        icon: "⏳",
        title: { zh: "衰老", en: "Aging" },
        desc: {
          zh: "从分子、细胞到组织层面探究衰老的生物学基础，结合多组学数据解析衰老过程中的表观遗传漂移与干细胞耗竭机制。",
          en: "Investigating the biological basis of aging from molecular, cellular to tissue levels, using multi-omics data to dissect epigenetic drift and stem cell exhaustion during aging.",
        },
        tags: ["Senescence", "Epigenetics", "Stem Cell Exhaustion"],
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
      },
      {
        date: { zh: "2026.07", en: "Jul 2026" },
        title: { zh: "新论文发表于期刊名称", en: "New paper published in Journal Name" },
        desc: { zh: "关于转录组标准化方法的研究论文正式发表。", en: "A research paper on transcriptome normalization methods was published." },
      },
      {
        date: { zh: "2026.06", en: "Jun 2026" },
        title: { zh: "欢迎新成员加入", en: "Welcome new members" },
        desc: { zh: "课题组迎来新入学的研究生与本科生。", en: "The lab welcomes new graduate and undergraduate students." },
      },
    ],
  },

  // ===== 团队成员预览 =====
  team: {
    eyebrow: { zh: "团队成员", en: "People" },
    title: { zh: "课题组核心成员", en: "Core Members" },
    members: [
      { name: { zh: "导师姓名", en: "PI Name" }, role: { zh: "课题组长 (PI)", en: "Principal Investigator" }, focus: { zh: "生物信息学 / 方法学", en: "Bioinformatics / Methods" } },
      { name: { zh: "博士研究生", en: "PhD Student" }, role: { zh: "博士在读", en: "PhD Candidate" }, focus: { zh: "单细胞分析", en: "Single-cell" } },
      { name: { zh: "硕士研究A", en: "Master A" }, role: { zh: "硕士在读", en: "Master Student" }, focus: { zh: "转录组分析", en: "Transcriptome" } },
      { name: { zh: "硕士研究B", en: "Master B" }, role: { zh: "硕士在读", en: "Master Student" }, focus: { zh: "实验设计", en: "Experiment" } },
    ],
  },

  // ===== CTA 区 =====
  cta: {
    title: { zh: "加入我们，一起探索生命的数据之美", en: "Join us to explore the beauty of life's data" },
    desc: {
      zh: "课题组常年招收对生物信息学感兴趣的本科生、硕士生、博士生与博士后，欢迎联系咨询。",
      en: "We welcome undergraduate, master, PhD students and postdocs interested in bioinformatics to contact us.",
    },
    btnContact: { zh: "联系我们", en: "Contact Us" },
    btnJoin: { zh: "招生信息", en: "Recruitment" },
  },

  // ===== 页脚 =====
  footer: {
    aboutTitle: { zh: "GaGaLab", en: "GaGaLab" },
    about: {
      zh: "隶属学校名称，致力于发育生物学与生物信息学交叉研究。",
      en: "Affiliated with University Name, dedicated to interdisciplinary research in developmental biology and bioinformatics.",
    },
    linksTitle: { zh: "快速链接", en: "Quick Links" },
    contactTitle: { zh: "联系方式", en: "Contact" },
    addr: { zh: "学校名称 · 学院名称 · 实验室房间号", en: "University · School · Lab Room" },
    email: { zh: "lab@example.edu", en: "lab@example.edu" },
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
      zh: "课题组围绕生物信息学方法学与关键生物学问题，形成以下研究方向。每个方向都有配套的开源工具与代表成果。",
      en: "The lab focuses on the following research directions around bioinformatics methodology and key biological questions. Each direction has supporting open-source tools and representative outputs.",
    },
    detailTitle: { zh: "代表性工具与产出", en: "Representative Tools & Outputs" },
    items: [
      {
        icon: "🐣",
        title: { zh: "早期胚胎发育", en: "Early Embryonic Development" },
        desc: {
          zh: "研究哺乳动物早期胚胎发育过程中的细胞命运决定与基因调控网络。我们结合单细胞转录组、表观组与空间转录组等多组学数据，解析合子基因组激活（ZGA）、谱系分化与 X 染色体失活等关键发育事件的分子机制。",
          en: "Studying cell fate determination and gene regulatory networks in early mammalian embryonic development. We integrate single-cell transcriptome, epigenome, and spatial transcriptome data to dissect the molecular mechanisms of key developmental events such as zygotic genome activation (ZGA), lineage specification, and X chromosome inactivation.",
        },
        tags: ["Embryo", "ZGA", "Lineage", "XCI"],
        tools: { zh: "多组学整合分析", en: "Multi-omics integration" },
      },
      {
        icon: "🧫",
        title: { zh: "胚胎干细胞", en: "Embryonic Stem Cells" },
        desc: {
          zh: "探索胚胎干细胞的干性维持与定向分化机制。结合单细胞测序与基因编辑技术，刻画干细胞状态转换、表观遗传重编程以及向特定谱系分化的调控网络，为再生医学提供细胞来源。",
          en: "Exploring pluripotency maintenance and directed differentiation of embryonic stem cells. Combining single-cell sequencing and gene editing to characterize stem cell state transitions, epigenetic reprogramming, and regulatory networks of lineage-specific differentiation, providing cell sources for regenerative medicine.",
        },
        tags: ["ESC", "Pluripotency", "Differentiation", "Epigenetics"],
        tools: { zh: "单细胞测序分析", en: "Single-cell sequencing" },
      },
      {
        icon: "🩹",
        title: { zh: "再生医学", en: "Regenerative Medicine" },
        desc: {
          zh: "利用干细胞与类器官技术研究组织器官再生机制。通过构建体外类器官模型，模拟器官发育与损伤修复过程，开发面向组织损伤修复与功能重建的再生医学策略。",
          en: "Utilizing stem cell and organoid technology to study tissue and organ regeneration mechanisms. By constructing in vitro organoid models to mimic organ development and injury repair, we develop regenerative strategies for tissue injury repair and functional restoration.",
        },
        tags: ["Organoid", "Regeneration", "Tissue Repair", "Stem Cells"],
        tools: { zh: "类器官模型构建", en: "Organoid modeling" },
      },
      {
        icon: "💉",
        title: { zh: "细胞治疗", en: "Cell Therapy" },
        desc: {
          zh: "面向免疫细胞治疗与干细胞治疗的临床转化研究。结合基因编辑与单细胞技术，优化细胞治疗产品的制备工艺，提升治疗的安全性与有效性，推动从实验室到临床的转化。",
          en: "Translational research on immune cell therapy and stem cell therapy. Combining gene editing and single-cell technology to optimize the manufacturing process of cell therapy products, improving therapeutic safety and efficacy, and advancing bench-to-bedside translation.",
        },
        tags: ["Immunotherapy", "Gene Editing", "Translational", "Manufacturing"],
        tools: { zh: "细胞治疗工艺开发", en: "Cell therapy process dev" },
      },
      {
        icon: "⏳",
        title: { zh: "衰老", en: "Aging" },
        desc: {
          zh: "从分子、细胞到组织层面探究衰老的生物学基础。结合多组学数据解析衰老过程中的表观遗传漂移、干细胞耗竭与慢性炎症机制，探索延缓衰老与干预老年疾病的潜在靶点。",
          en: "Investigating the biological basis of aging from molecular, cellular to tissue levels. Using multi-omics data to dissect epigenetic drift, stem cell exhaustion, and chronic inflammation during aging, exploring potential targets for delaying aging and intervening in age-related diseases.",
        },
        tags: ["Senescence", "Epigenetics", "Inflammation", "Stem Cell Exhaustion"],
        tools: { zh: "衰老多组学图谱", en: "Aging multi-omics atlas" },
      },
    ],
  },

  // ===== 团队成员页 people.html =====
  peoplePage: {
    title: { zh: "团队成员", en: "People" },
    subtitle: {
      zh: "课题组由一名课题组长（PI）、若干博士/硕士研究生与本科生组成。我们欢迎对生物信息学感兴趣的同学加入。",
      en: "The lab consists of a Principal Investigator (PI), several PhD/Master students and undergraduates. We welcome students interested in bioinformatics to join us.",
    },
    piTitle: { zh: "课题组长", en: "Principal Investigator" },
    pi: {
      name: { zh: "导师姓名", en: "PI Name" },
      role: { zh: "课题组长 / 教授", en: "Principal Investigator / Professor" },
      bio: {
        zh: "导师姓名于学校名称获得博士学位，主要研究方向为生物信息学方法学与多组学数据分析。开发多个面向实验生物学家的 R 包工具，长期围绕转录组分析与发育生物学问题开展研究。",
        en: "PI Name received a PhD from University Name, with main research directions in bioinformatics methodology and multi-omics data analysis. Developed several R package tools for experimental biologists, and has long been conducting research around transcriptome analysis and developmental biology questions.",
      },
      interests: { zh: "研究方向：方法开发 · 转录组 · 发育生物学", en: "Research: Methods · Transcriptome · Developmental Biology" },
    },
    studentsTitle: { zh: "研究生", en: "Graduate Students" },
    students: [
      { name: { zh: "博士研究生", en: "PhD Student" }, role: { zh: "博士在读 (2024 级)", en: "PhD Candidate (2024)" }, focus: { zh: "单细胞转录组分析", en: "Single-cell transcriptome" } },
      { name: { zh: "硕士研究A", en: "Master A" }, role: { zh: "硕士在读 (2025 级)", en: "Master Student (2025)" }, focus: { zh: "转录组标准化方法", en: "Transcriptome normalization" } },
      { name: { zh: "硕士研究B", en: "Master B" }, role: { zh: "硕士在读 (2025 级)", en: "Master Student (2025)" }, focus: { zh: "CRISPR 实验设计工具", en: "CRISPR design tools" } },
      { name: { zh: "硕士研究C", en: "Master C" }, role: { zh: "硕士在读 (2026 级)", en: "Master Student (2026)" }, focus: { zh: "基因集富集分析", en: "Gene set enrichment" } },
    ],
    undergradsTitle: { zh: "本科生", en: "Undergraduates" },
    undergrads: [
      { name: { zh: "本科同学A", en: "Undergrad A" }, role: { zh: "本科科研训练", en: "Undergrad Research" }, focus: { zh: "qPCR 数据分析", en: "qPCR analysis" } },
      { name: { zh: "本科同学B", en: "Undergrad B" }, role: { zh: "本科科研训练", en: "Undergrad Research" }, focus: { zh: "R 包开发辅助", en: "R package dev" } },
    ],
    alumniTitle: { zh: "校友", en: "Alumni" },
    alumni: [
      { name: { zh: "已毕业校友A", en: "Alumnus A" }, role: { zh: "硕士毕业 (2024)", en: "MS (2024)" }, focus: { zh: "去向：博士深造", en: "Now: PhD study" } },
      { name: { zh: "已毕业校友B", en: "Alumnus B" }, role: { zh: "本科毕业 (2023)", en: "BS (2023)" }, focus: { zh: "去向：企业就业", en: "Now: Industry" } },
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
    },
    items: [
      {
        year: "2026",
        type: "journal",
        title: { zh: "论文标题占位：一种改进的转录组数据标准化方法", en: "Placeholder title: An improved normalization method for transcriptome data" },
        authors: { zh: "作者A, 作者B, 导师姓名*", en: "Author A, Author B, PI Name*" },
        venue: { zh: "期刊名称 (影响因子)", en: "Journal Name (IF)" },
        link: "#",
      },
      {
        year: "2025",
        type: "journal",
        title: { zh: "论文标题占位：哺乳动物早期胚胎 X 染色体失活的调控机制", en: "Placeholder title: Regulatory mechanisms of X chromosome inactivation in early mammalian embryos" },
        authors: { zh: "作者C, 作者D, 导师姓名*", en: "Author C, Author D, PI Name*" },
        venue: { zh: "期刊名称 (影响因子)", en: "Journal Name (IF)" },
        link: "#",
      },
      {
        year: "2024",
        type: "software",
        title: { zh: "qqercc：对添加 ERCC spike-in 的 RNA-Seq 数据进行标准化", en: "qqercc: Normalization for RNA-Seq data with ERCC spike-in" },
        authors: { zh: "导师姓名", en: "PI Name" },
        venue: { zh: "GitHub 开源 R 包", en: "GitHub open-source R package" },
        link: "https://github.com/liuyuchenlab/qqercc",
      },
      {
        year: "2024",
        type: "software",
        title: { zh: "qqgmt：一键生成 DIY 的 GMT 文件用于 GSEA 分析", en: "qqgmt: One-click DIY GMT file generation for GSEA" },
        authors: { zh: "导师姓名", en: "PI Name" },
        venue: { zh: "GitHub 开源 R 包", en: "GitHub open-source R package" },
        link: "https://github.com/liuyuchenlab/qqgmt",
      },
      {
        year: "2024",
        type: "software",
        title: { zh: "qqdeg：一键获得差异基因与富集结果", en: "qqdeg: One-click DEG and enrichment results" },
        authors: { zh: "导师姓名", en: "PI Name" },
        venue: { zh: "GitHub 开源 R 包", en: "GitHub open-source R package" },
        link: "https://github.com/liuyuchenlab/qqdeg",
      },
      {
        year: "2024",
        type: "software",
        title: { zh: "qqseq：一键获得转录本的外显子与内含子序列", en: "qqseq: One-click exon and intron sequences from transcripts" },
        authors: { zh: "导师姓名", en: "PI Name" },
        venue: { zh: "GitHub 开源 R 包", en: "GitHub open-source R package" },
        link: "https://github.com/liuyuchenlab/qqseq",
      },
      {
        year: "2023",
        type: "software",
        title: { zh: "qqpcr：快速获得 qPCR 相对表达量", en: "qqpcr: Quick qPCR relative expression" },
        authors: { zh: "导师姓名", en: "PI Name" },
        venue: { zh: "GitHub 开源 R 包", en: "GitHub open-source R package" },
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
      { date: { zh: "2026.09", en: "Sep 2026" }, title: { zh: "课题组成员参加学术会议并作报告", en: "Lab members attended academic conference and gave talks" }, desc: { zh: "课题组多位成员在会议上作报告，展示最新研究进展。", en: "Multiple members presented reports at the conference showcasing latest progress." } },
      { date: { zh: "2026.07", en: "Jul 2026" }, title: { zh: "新论文发表于期刊名称", en: "New paper published in Journal Name" }, desc: { zh: "关于转录组标准化方法的研究论文正式发表。", en: "A research paper on transcriptome normalization methods was published." } },
      { date: { zh: "2026.06", en: "Jun 2026" }, title: { zh: "欢迎新成员加入课题组", en: "Welcome new members to the lab" }, desc: { zh: "课题组迎来新入学的研究生与本科生。", en: "The lab welcomes new graduate and undergraduate students." } },
      { date: { zh: "2026.03", en: "Mar 2026" }, title: { zh: "qqercc R 包更新至新版本", en: "qqercc R package updated to new version" }, desc: { zh: "新增对更多 ERCC spike-in 模式的支持，改进标准化算法。", en: "Added support for more ERCC spike-in patterns, improved normalization algorithm." } },
      { date: { zh: "2025.12", en: "Dec 2025" }, title: { zh: "课题组年度总结与团建活动", en: "Lab annual summary and team building" }, desc: { zh: "回顾一年的研究成果，展望来年工作方向。", en: "Reviewing the year's research achievements and looking ahead to next year's directions." } },
      { date: { zh: "2025.10", en: "Oct 2025" }, title: { zh: "与合作团队发表联合研究", en: "Joint research published with collaborators" }, desc: { zh: "与某实验室合作的关于胚胎发育的研究正式发表。", en: "A collaborative study on embryonic development was published." } },
    ],
  },

  // ===== 招生页 join.html =====
  joinPage: {
    title: { zh: "加入我们", en: "Join Us" },
    subtitle: {
      zh: "课题组常年招收对生物信息学感兴趣的同学。无论你是本科生、研究生还是博士后，都欢迎与我们联系。",
      en: "We welcome students interested in bioinformatics all year round. Whether you are an undergraduate, graduate student, or postdoc, feel free to reach out.",
    },
    positionsTitle: { zh: "招收方向", en: "Open Positions" },
    positions: [
      {
        role: { zh: "博士研究生", en: "PhD Student" },
        desc: { zh: "招收生物信息学、计算生物学或相关方向博士生，开展方法学与生物学问题研究。", en: "Recruiting PhD students in bioinformatics, computational biology, or related fields for methodology and biological research." },
        reqs: { zh: "要求：具有生物学或统计学基础，对编程（R/Python）有兴趣。", en: "Requirements: Background in biology or statistics, interest in programming (R/Python)." },
      },
      {
        role: { zh: "硕士研究生", en: "Master Student" },
        desc: { zh: "招收分子生物学与生物信息学方向硕士生，参与工具开发或应用研究。", en: "Recruiting master students in molecular biology and bioinformatics to participate in tool development or applied research." },
        reqs: { zh: "要求：有生命科学或相关本科背景，愿意学习数据分析。", en: "Requirements: Undergraduate background in life sciences or related, willing to learn data analysis." },
      },
      {
        role: { zh: "本科科研训练", en: "Undergraduate Research" },
        desc: { zh: "欢迎本科生进组参与科研训练，学习生物信息学方法与 R 包开发。", en: "Undergraduates are welcome to join for research training, learning bioinformatics methods and R package development." },
        reqs: { zh: "要求：每周能保证一定时间投入，有学习热情即可。", en: "Requirements: Able to commit time weekly, with enthusiasm for learning." },
      },
      {
        role: { zh: "博士后", en: "Postdoc" },
        desc: { zh: "诚邀具有生物信息学/计算生物学研究背景的博士后加入，开展独立与合作研究。", en: "Postdocs with bioinformatics/computational biology research background are welcome to join for independent and collaborative research." },
        reqs: { zh: "要求：已获博士学位，有第一作者论文产出。", en: "Requirements: PhD degree obtained, with first-author publications." },
      },
    ],
    applyTitle: { zh: "申请方式", en: "How to Apply" },
    applySteps: [
      { step: { zh: "准备材料：个人简历、成绩单（学生）、研究兴趣简述。", en: "Prepare materials: CV, transcript (for students), brief statement of research interests." } },
      { step: { zh: "发送邮件至课题组邮箱，标题注明『招生咨询 - 姓名 - 方向』。", en: "Email the lab mailbox, with subject line 'Recruitment - Name - Direction'." } },
      { step: { zh: "初步筛选后，我们将安排面谈或线上交流。", en: "After initial screening, we will arrange an interview or online chat." } },
    ],
    contactCta: { zh: "期待你的来信，一起探索生命的数据之美。", en: "Looking forward to your message to explore the beauty of life's data together." },
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
    addr: { zh: "学校名称 · 学院名称 · 课题组实验室（房间号）", en: "University Name · School Name · Lab (Room No.)" },
    emailLabel: { zh: "邮箱", en: "Email" },
    phoneLabel: { zh: "电话", en: "Phone" },
    phone: { zh: "+86-XXX-XXXX-XXXX", en: "+86-XXX-XXXX-XXXX" },
    socialTitle: { zh: "在线平台", en: "Online Platforms" },
    github: { zh: "GitHub 代码仓库", en: "GitHub Repositories" },
    social: { zh: "社交媒体", en: "Social Media" },
    mapTitle: { zh: "位置示意", en: "Location Map" },
    mapNote: { zh: "（位置示意图，正式上线后可替换为真实地图）", en: "(Location illustration; can be replaced with a real map when going live)" },
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
