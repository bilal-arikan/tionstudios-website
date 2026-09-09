// Chinese, Simplified (中文).
//
// Mirrors the key shape of tr.js exactly. Brand and product names are left
// untranslated on purpose: Tionport, Real Driver, Unity, React, iOS.
// Chinese copy is kept short: the layout was built around compact labels.

export default {
  meta: {
    home: {
      title: 'Tionport — 数字产品与软件工作室',
      description: 'Tionport 是一家位于伊斯坦布尔的网页、移动与游戏开发工作室。',
    },
    services: {
      title: '服务 — Tionport',
      description: '网页开发、移动应用、定制软件与游戏开发服务。',
    },
    games: {
      title: '游戏 — Tionport 游戏档案',
      description: 'Tionport 开发的移动游戏项目。',
    },
    about: {
      title: '关于我们 — Tionport',
      description: '位于伊斯坦布尔的软件与游戏开发工作室。',
    },
    contact: {
      title: '联系我们 — Tionport',
      description: '就您的项目联系 Tionport。',
    },
  },

  nav: {
    services: '服务',
    games: '游戏',
    about: '关于我们',
    contact: '联系我们',
    menu: '菜单',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    mainNav: '主导航',
    home: 'Tionport 首页',
    skipToContent: '跳到主要内容',
    language: '语言',
    selectLanguage: '选择语言',
  },

  hero: {
    eyebrow: 'Tionport · 伊斯坦布尔',
    titleBefore: '我们开发网页、移动与',
    titleAccent: '游戏',
    titleAfter: '产品。',
    description: 'Tionport 是一家软件与游戏开发工作室。',
    ctaPrimary: '服务',
    ctaSecondary: '游戏',
    proofWeb: '网页开发',
    proofMobile: '移动应用',
    proofGame: '游戏开发',
    scroll: '向下滚动',
  },

  readout: {
    label: 'Tionport 发布状态',
    project: '项目',
    platform: '平台',
    type: '类型',
    focus: '重点',
    status: '状态',
    live: '已在两大商店上线',
    studio: '工作室',
    gamesCount: '款游戏',
    shippedCount: '已上线',
    designCode: '设计 + 开发',
    oneTeam: '同一团队',
    location: '伊斯坦布尔',
  },

  services: {
    eyebrow: '服务',
    titleBefore: '业务',
    titleAccent: '范围。',
    lead: '网页、移动、定制软件与游戏开发。',
    contactCta: '联系我们',
    talkAbout: '咨询{title}',
    items: [
      {
        title: '产品设计',
        text: '产品范围、用户流程与界面设计。',
        tags: ['需求梳理', 'UX', 'UI'],
      },
      {
        title: '网页开发',
        text: '企业网站、网页应用与管理后台。',
        tags: ['React', 'API', '电商'],
      },
      {
        title: '移动应用',
        text: '面向 iOS 与 Android 的移动应用开发。',
        tags: ['iOS', 'Android', '跨平台'],
      },
      {
        title: '定制软件与游戏',
        text: '定制业务系统、系统集成与 Unity 项目。',
        tags: ['系统集成', '自动化', 'Unity'],
      },
    ],
  },

  projects: {
    eyebrow: '游戏',
    titleBefore: 'TION',
    titleAccent: '游戏。',
    sideCopy: '七款移动游戏项目。',
    archiveLabel: '游戏档案',
    allGames: '全部游戏',
    kicker: 'TION 游戏',
    published: '已上线',
    featuredDescription: '移动端城市驾驶模拟游戏。',
    featuredAlt: '游戏 Real Driver: Legend of the City 中的红色跑车',
    coverAlt: '{title} {subtitle} 封面图',
    appStoreAlt: '在 App Store 查看',
    googlePlayAlt: '在 Google Play 下载',
    capabilities: ['移动端', '3D', '驾驶', 'Unity'],
  },

  process: {
    eyebrow: '流程',
    titleBefore: '合作',
    titleAccent: '流程。',
    description: '需求梳理、设计、开发与发布。',
    steps: [
      { title: '需求', text: '明确需求与优先级。',           output: '范围 + 计划' },
      { title: '设计', text: '完成流程与界面原型。',         output: '原型' },
      { title: '开发', text: '进行开发与测试。',             output: '测试版本' },
      { title: '发布', text: '发布产品并按需提供维护。',     output: '正式产品' },
    ],
  },

  about: {
    eyebrow: '关于我们',
    titleBefore: 'TION',
    titleAccent: 'Port.',
    description: '我们是一家位于伊斯坦布尔的软件与游戏开发工作室。',
    location: '土耳其，伊斯坦布尔',
    principles: [
      { title: '设计与开发', text: '设计与工程在同一流程中推进。' },
      { title: '技术基础',   text: '我们构建易于长期维护的系统。' },
      { title: '定期交付',   text: '项目全程持续交付可运行的版本。' },
      { title: '后续支持',   text: '上线后可继续提供维护支持。' },
    ],
  },

  faq: {
    eyebrow: '常见问题',
    titleBefore: '常见',
    titleAccent: '问题。',
    items: [
      { question: '你们承接哪些类型的项目？',     answer: '我们承接网页、移动、定制软件与游戏项目。' },
      { question: '合作流程如何开始？',           answer: '经过一次简短沟通后，我们会准备项目范围与工作计划。' },
      { question: '可以接手已有的项目吗？',       answer: '可以。我们会先评估代码与设计结构，然后制定交接方案。' },
      { question: '上线后提供支持吗？',           answer: '我们按需提供维护、优化与新功能开发。' },
      { question: '预算如何确定？',               answer: '预算根据项目范围、技术要求与时间安排确定。' },
    ],
  },

  contact: {
    eyebrow: '联系我们',
    titleBefore: '告诉我们',
    titleAccent: '您的项目。',
    description: '留下简要信息，或直接发送邮件给我们。',
    directLabel: '直接联系',
    locationLabel: '所在地',
    location: '土耳其，伊斯坦布尔',
    formStep: '邮件',
    formHeading: '项目信息',
    fields: {
      name: '您的姓名 *',
      namePlaceholder: '姓名',
      email: '工作邮箱 *',
      emailPlaceholder: 'you@company.com',
      company: '公司 / 品牌',
      companyPlaceholder: '公司名称（如有）',
      projectType: '项目类型 *',
      message: '项目简介 *',
      messagePlaceholder: '您的目标、需求，以及时间安排（如有）……',
    },
    choose: '请选择',
    projectTypes: ['网页应用', '移动应用', '定制软件', '游戏项目', 'UX/UI 设计', '其他'],
    submit: '生成邮件',
    note: '表单会将您填写的信息整理成邮件草稿。',
    noteSent: '草稿已生成。若邮件应用未打开，请直接发送至 info@tionport.com。',
    mailSubject: '新项目咨询 — {name}',
    mailName: '姓名',
    mailEmail: '邮箱',
    mailCompany: '公司',
    mailProjectType: '项目类型',
    mailAbout: '项目说明：',
  },

  footer: {
    tagline: '网页 · 移动 · 游戏',
    explore: '浏览',
    legal: '法律条款',
    contact: '联系我们',
    privacy: '隐私政策',
    terms: '服务条款',
    rights: '© {year} Tionport. 保留所有权利。',
    backToTop: '返回顶部',
  },

  games: {
    eyebrow: '游戏',
    heroTitle: 'TION',
    heroAccent: '游戏。',
    heroDescription: '我们的移动游戏项目。',
    catalogTitle: '全部游戏',
    platform: '平台',
    status: '状态',
    category: '类别',
    focus: '重点',
    appStore: 'App Store',
    googlePlay: 'Google Play',
  },

  notFound: {
    title: '页面未找到',
    description: '您访问的页面可能已移动或被删除。',
    cta: '返回首页',
  },

  catalog: {
    eyebrow: '全部游戏',
    titleBefore: '游戏',
    titleAccent: '档案。',
    sideCopy: '七款移动游戏项目。',
    statusNote: '每款作品均标注上线或存档状态',
    gameAlt: '{title} {subtitle} 游戏图片',
    studioArchive: 'TION 工作室存档',
    noteLabel: '说明：',
    noteText: '已失效的商店链接未予列出。',
  },

  pages: {
    home: {
      ctaTitle: '有项目想法吗？',
      ctaText: '发送简要信息即可开始。',
    },
    services: {
      title: '网页、移动与游戏',
      accent: '开发。',
      description: '产品设计、软件开发与后续维护。',
      ctaTitle: '告诉我们您的项目。',
      ctaText: '项目范围与时间安排共同确定。',
    },
    games: {
      description: '七款移动游戏项目。',
      heroImageAlt: '游戏 Real Driver 中的红色跑车',
      seeAll: '查看全部游戏',
      ctaTitle: '与我们讨论您的游戏项目。',
      ctaText: '我们同时提供设计与开发支持。',
    },
    about: {
      description: '位于伊斯坦布尔的软件与游戏开发工作室。',
      factLocation: '所在地',
      factLocationValue: '伊斯坦布尔',
      factAreas: '业务领域',
      factAreasValue: '网页 · 移动 · 游戏',
      ctaTitle: '联系我们',
      ctaText: '欢迎就新项目与我们联系。',
    },
    contact: {
      sendEmail: '发送邮件',
    },
    notFound: {
      eyebrow: '404 / 页面未找到',
      title: '您要访问的页面',
      accent: '不在这里。',
      description: '链接可能已更改，或页面已被删除。',
      cta: '返回首页',
    },
    cta: {
      eyebrow: '联系我们',
      primary: '联系我们',
    },
  },

  footerExtra: {
    tagline: '软件与游戏开发工作室。',
  },

  common: {
    loading: '加载中',
  },
}
