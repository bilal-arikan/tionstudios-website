// English (English).
//
// Mirrors the key shape of tr.js exactly. Brand and product names are left
// untranslated on purpose: Tionport, Real Driver, Unity, React, iOS.

export default {
  meta: {
    home: {
      title: 'Tionport — Digital Product and Software Studio',
      description: 'Tionport is an Istanbul-based web, mobile and game development studio.',
    },
    services: {
      title: 'Services — Tionport',
      description: 'Web development, mobile apps, custom software and game development services.',
    },
    games: {
      title: 'Games — Tionport Game Archive',
      description: 'Mobile game projects developed by Tionport.',
    },
    about: {
      title: 'About — Tionport',
      description: 'An Istanbul-based software and game development studio.',
    },
    contact: {
      title: 'Contact — Tionport',
      description: 'Get in touch with Tionport about your project.',
    },
  },

  nav: {
    services: 'Services',
    games: 'Games',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    home: 'Tionport home',
    skipToContent: 'Skip to main content',
    language: 'Language',
    selectLanguage: 'Select language',
  },

  hero: {
    eyebrow: 'Tionport · Istanbul',
    titleBefore: 'We build web, mobile and',
    titleAccent: 'game',
    titleAfter: 'products.',
    description: 'Tionport is a software and game development studio.',
    ctaPrimary: 'Services',
    ctaSecondary: 'Games',
    proofWeb: 'Web development',
    proofMobile: 'Mobile apps',
    proofGame: 'Game development',
    scroll: 'Scroll down',
  },

  readout: {
    label: 'Tionport release status',
    project: 'project',
    platform: 'platform',
    type: 'type',
    focus: 'focus',
    status: 'status',
    live: 'Live on both stores',
    studio: 'STUDIO',
    gamesCount: 'games',
    shippedCount: 'live',
    designCode: 'Design + code',
    oneTeam: 'One team',
    location: 'Istanbul',
  },

  services: {
    eyebrow: 'Services',
    titleBefore: 'What we',
    titleAccent: 'do.',
    lead: 'Web, mobile, custom software and game development.',
    contactCta: 'Get in touch',
    talkAbout: 'Talk to us about {title}',
    items: [
      {
        title: 'Product Design',
        text: 'Product scope, user flows and interface design.',
        tags: ['Discovery', 'UX', 'UI'],
      },
      {
        title: 'Web Development',
        text: 'Corporate sites, web applications and admin dashboards.',
        tags: ['React', 'API', 'E-commerce'],
      },
      {
        title: 'Mobile Apps',
        text: 'Mobile app development for iOS and Android.',
        tags: ['iOS', 'Android', 'Cross-platform'],
      },
      {
        title: 'Custom Software & Games',
        text: 'Custom business software, integrations and Unity projects.',
        tags: ['Integration', 'Automation', 'Unity'],
      },
    ],
  },

  projects: {
    eyebrow: 'Games',
    titleBefore: 'TION',
    titleAccent: 'games.',
    sideCopy: 'Seven mobile game projects.',
    archiveLabel: 'Game archive',
    allGames: 'All games',
    kicker: 'TION GAMES',
    published: 'Live',
    featuredDescription: 'A mobile city and driving simulation.',
    featuredAlt: 'Red sports car from the game Real Driver: Legend of the City',
    coverAlt: '{title} {subtitle} cover image',
    appStoreAlt: 'View on the App Store',
    googlePlayAlt: 'Get it on Google Play',
    capabilities: ['Mobile', '3D', 'Driving', 'Unity'],
  },

  process: {
    eyebrow: 'Process',
    titleBefore: 'How we',
    titleAccent: 'work.',
    description: 'Scope, design, development and release.',
    steps: [
      { title: 'Scope',       text: 'We define the requirements and priorities.', output: 'Scope + plan' },
      { title: 'Design',      text: 'We prototype the flows and the interface.',  output: 'Prototype' },
      { title: 'Development', text: 'We build and test the product.',             output: 'Test build' },
      { title: 'Release',     text: 'We ship the product and maintain it as needed.', output: 'Live product' },
    ],
  },

  about: {
    eyebrow: 'About',
    titleBefore: 'TION',
    titleAccent: 'Port.',
    description: 'We are an Istanbul-based software and game development studio.',
    location: 'Istanbul, Türkiye',
    principles: [
      { title: 'Design and development', text: 'Design and engineering run as one process.' },
      { title: 'Technical foundation',   text: 'We build systems that stay maintainable.' },
      { title: 'Regular updates',        text: 'We share working builds throughout the project.' },
      { title: 'Support',                text: 'We can provide maintenance after release.' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    titleBefore: 'Frequently asked',
    titleAccent: 'questions.',
    items: [
      { question: 'What kinds of projects do you work on?',   answer: 'We work on web, mobile, custom software and game projects.' },
      { question: 'How does a project start?',                answer: 'After a short call we prepare the scope and a work plan.' },
      { question: 'Can you take over an existing project?',   answer: 'Yes. We first review the code and design, then prepare a handover plan.' },
      { question: 'Do you provide support after release?',    answer: 'We offer maintenance, improvements and new feature work as needed.' },
      { question: 'How is the budget determined?',            answer: 'The budget is set by scope, technical requirements and timeline.' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    titleBefore: 'Tell us about',
    titleAccent: 'your project.',
    description: 'Leave a few details or email us directly.',
    directLabel: 'Email us',
    locationLabel: 'Location',
    location: 'Istanbul, Türkiye',
    formStep: 'EMAIL',
    formHeading: 'Project details',
    fields: {
      name: 'Your name *',
      namePlaceholder: 'Full name',
      email: 'Work email *',
      emailPlaceholder: 'you@company.com',
      company: 'Company / brand',
      companyPlaceholder: 'Your company name, if any',
      projectType: 'Project type *',
      message: 'About your project *',
      messagePlaceholder: 'Your goal, what you need and your timeline if you have one...',
    },
    choose: 'Select',
    projectTypes: ['Web application', 'Mobile app', 'Custom software', 'Game project', 'UX/UI design', 'Other'],
    submit: 'Compose email',
    note: 'The form turns your details into a ready draft in your email app.',
    noteSent: 'Draft ready. If your email app did not open, write to info@tionport.com directly.',
    mailSubject: 'New project enquiry — {name}',
    mailName: 'Name',
    mailEmail: 'Email',
    mailCompany: 'Company',
    mailProjectType: 'Project type',
    mailAbout: 'About the project:',
  },

  footer: {
    tagline: 'Web · Mobile · Games',
    explore: 'Explore',
    legal: 'Legal',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: '© {year} Tionport. All rights reserved.',
    backToTop: 'Back to top',
  },

  games: {
    eyebrow: 'Games',
    heroTitle: 'TION',
    heroAccent: 'games.',
    heroDescription: 'Our mobile game projects.',
    catalogTitle: 'All games',
    platform: 'Platform',
    status: 'Status',
    category: 'Category',
    focus: 'Focus',
    appStore: 'App Store',
    googlePlay: 'Google Play',
  },

  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for may have moved or been removed.',
    cta: 'Back to home',
  },

  catalog: {
    eyebrow: 'All games',
    titleBefore: 'Game',
    titleAccent: 'archive.',
    sideCopy: 'Seven mobile game projects.',
    statusNote: 'Release and archive status is noted for each title',
    gameAlt: '{title} {subtitle} game artwork',
    studioArchive: 'TION studio archive',
    noteLabel: 'Note:',
    noteText: 'Store links that are no longer active have been omitted.',
  },

  pages: {
    home: {
      ctaTitle: 'Have a project in mind?',
      ctaText: 'Send us a few details to get started.',
    },
    services: {
      title: 'Web, mobile and game',
      accent: 'development.',
      description: 'Product design, software development and maintenance.',
      ctaTitle: 'Tell us about your project.',
      ctaText: 'Scope and timeline are agreed together.',
    },
    games: {
      description: 'Seven mobile game projects.',
      heroImageAlt: 'Red sports car from the game Real Driver',
      seeAll: 'See all games',
      ctaTitle: 'Talk to us about your game project.',
      ctaText: 'We support both design and development.',
    },
    about: {
      description: 'An Istanbul-based software and game development studio.',
      factLocation: 'Location',
      factLocationValue: 'Istanbul',
      factAreas: 'Areas',
      factAreasValue: 'Web · Mobile · Games',
      ctaTitle: 'Get in touch',
      ctaText: 'Write to us about a new project.',
    },
    contact: {
      sendEmail: 'Send email',
    },
    notFound: {
      eyebrow: '404 / Page not found',
      title: 'The page you want',
      accent: 'is not here.',
      description: 'The link may have changed or the page may have been removed.',
      cta: 'Back to home',
    },
    cta: {
      eyebrow: 'Contact',
      primary: 'Get in touch',
    },
  },

  footerExtra: {
    tagline: 'Software and game development studio.',
  },

  common: {
    loading: 'Loading',
  },
}
