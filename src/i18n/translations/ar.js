// Arabic (العربية) — renders right-to-left (dir="rtl").
//
// Mirrors the key shape of tr.js exactly. Brand and product names are left in
// Latin script on purpose: TION Studios, Real Driver, Unity, React, iOS.
//
// Note on the hero: Arabic reads right-to-left, so `titleBefore` is the part
// that appears FIRST when reading (i.e. rightmost on screen).

export default {
  meta: {
    home: {
      title: 'TION Studios — استوديو المنتجات الرقمية والبرمجيات',
      description: 'TION Studios استوديو لتطوير الويب وتطبيقات الهاتف والألعاب، مقره إسطنبول.',
    },
    services: {
      title: 'الخدمات — TION Studios',
      description: 'تطوير الويب، تطبيقات الهاتف، البرمجيات المخصصة وتطوير الألعاب.',
    },
    games: {
      title: 'الألعاب — أرشيف ألعاب TION Studios',
      description: 'مشاريع ألعاب الهاتف التي طورها استوديو TION Studios.',
    },
    about: {
      title: 'من نحن — TION Studios',
      description: 'استوديو لتطوير البرمجيات والألعاب مقره إسطنبول.',
    },
    contact: {
      title: 'اتصل بنا — TION Studios',
      description: 'تواصل مع TION Studios بخصوص مشروعك.',
    },
  },

  nav: {
    services: 'الخدمات',
    games: 'الألعاب',
    about: 'من نحن',
    contact: 'اتصل بنا',
    menu: 'القائمة',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    mainNav: 'التنقل الرئيسي',
    home: 'الصفحة الرئيسية لـ TION Studios',
    skipToContent: 'الانتقال إلى المحتوى الرئيسي',
    language: 'اللغة',
    selectLanguage: 'اختر اللغة',
  },

  hero: {
    eyebrow: 'TION Studios · إسطنبول',
    titleBefore: 'نطوّر الويب والتطبيقات',
    titleAccent: 'والألعاب',
    titleAfter: 'الرقمية.',
    description: 'TION Studios استوديو لتطوير البرمجيات والألعاب.',
    ctaPrimary: 'الخدمات',
    ctaSecondary: 'الألعاب',
    proofWeb: 'تطوير الويب',
    proofMobile: 'تطبيقات الهاتف',
    proofGame: 'تطوير الألعاب',
    scroll: 'مرّر للأسفل',
  },

  readout: {
    label: 'حالة إصدارات TION Studios',
    project: 'المشروع',
    platform: 'المنصة',
    type: 'النوع',
    focus: 'التركيز',
    status: 'الحالة',
    live: 'متاح في المتجرين',
    studio: 'الاستوديو',
    gamesCount: 'ألعاب',
    shippedCount: 'منشورة',
    designCode: 'تصميم + برمجة',
    oneTeam: 'فريق واحد',
    location: 'إسطنبول',
  },

  services: {
    eyebrow: 'الخدمات',
    titleBefore: 'مجالات',
    titleAccent: 'العمل.',
    lead: 'تطوير الويب والتطبيقات والبرمجيات المخصصة والألعاب.',
    contactCta: 'تواصل معنا',
    talkAbout: 'لنتحدث عن {title}',
    items: [
      {
        title: 'تصميم المنتج',
        text: 'نطاق المنتج ومسارات المستخدم وتصميم الواجهة.',
        tags: ['استكشاف', 'UX', 'UI'],
      },
      {
        title: 'تطوير الويب',
        text: 'المواقع المؤسسية وتطبيقات الويب ولوحات التحكم.',
        tags: ['React', 'API', 'التجارة الإلكترونية'],
      },
      {
        title: 'تطبيقات الهاتف',
        text: 'تطوير تطبيقات الهاتف لنظامي iOS و Android.',
        tags: ['iOS', 'Android', 'متعدد المنصات'],
      },
      {
        title: 'برمجيات مخصصة وألعاب',
        text: 'أنظمة أعمال مخصصة وعمليات تكامل ومشاريع Unity.',
        tags: ['التكامل', 'الأتمتة', 'Unity'],
      },
    ],
  },

  projects: {
    eyebrow: 'الألعاب',
    titleBefore: 'ألعاب',
    titleAccent: 'TION.',
    sideCopy: 'سبعة مشاريع ألعاب للهاتف.',
    archiveLabel: 'أرشيف الألعاب',
    allGames: 'كل الألعاب',
    kicker: 'ألعاب TION',
    published: 'متاح',
    featuredDescription: 'محاكاة مدينة وقيادة على الهاتف.',
    featuredAlt: 'سيارة رياضية حمراء من لعبة Real Driver: Legend of the City',
    coverAlt: 'صورة غلاف {title} {subtitle}',
    appStoreAlt: 'اعرضه على App Store',
    googlePlayAlt: 'حمّله من Google Play',
    capabilities: ['الهاتف', '3D', 'القيادة', 'Unity'],
  },

  process: {
    eyebrow: 'المنهجية',
    titleBefore: 'مراحل',
    titleAccent: 'العمل.',
    description: 'تحديد النطاق، التصميم، التطوير والإطلاق.',
    steps: [
      { title: 'النطاق',   text: 'نحدد المتطلبات والأولويات.',            output: 'النطاق + الخطة' },
      { title: 'التصميم',  text: 'نصمم نماذج أولية للمسارات والواجهة.',   output: 'نموذج أولي' },
      { title: 'التطوير',  text: 'نطوّر المنتج ونختبره.',                 output: 'نسخة اختبارية' },
      { title: 'الإطلاق',  text: 'ننشر المنتج ونوفر صيانته عند الحاجة.',  output: 'منتج فعلي' },
    ],
  },

  about: {
    eyebrow: 'من نحن',
    titleBefore: 'TION',
    titleAccent: 'Studios.',
    description: 'نحن استوديو لتطوير البرمجيات والألعاب مقره إسطنبول.',
    location: 'إسطنبول، تركيا',
    principles: [
      { title: 'التصميم والتطوير', text: 'يسير التصميم والهندسة ضمن مسار واحد.' },
      { title: 'أساس تقني متين',   text: 'نبني أنظمة قابلة للصيانة على المدى الطويل.' },
      { title: 'تسليم منتظم',      text: 'نشارك نسخًا قابلة للتشغيل طوال المشروع.' },
      { title: 'الدعم',            text: 'نوفر الصيانة بعد الإطلاق عند الحاجة.' },
    ],
  },

  faq: {
    eyebrow: 'الأسئلة الشائعة',
    titleBefore: 'أسئلة',
    titleAccent: 'شائعة.',
    items: [
      { question: 'ما نوع المشاريع التي تعملون عليها؟',   answer: 'نعمل على مشاريع الويب والهاتف والبرمجيات المخصصة والألعاب.' },
      { question: 'كيف تبدأ العملية؟',                     answer: 'بعد مكالمة قصيرة نُعدّ نطاق العمل وخطة التنفيذ.' },
      { question: 'هل يمكنكم استلام مشروع قائم؟',          answer: 'نعم. نراجع أولًا بنية الشيفرة والتصميم، ثم نُعدّ خطة انتقال.' },
      { question: 'هل تقدمون دعمًا بعد الإطلاق؟',          answer: 'نقدم الصيانة والتحسينات وتطوير ميزات جديدة حسب الحاجة.' },
      { question: 'كيف تُحدد الميزانية؟',                  answer: 'تُحدد الميزانية وفق النطاق والمتطلبات التقنية والجدول الزمني.' },
    ],
  },

  contact: {
    eyebrow: 'اتصل بنا',
    titleBefore: 'حدّثنا عن',
    titleAccent: 'مشروعك.',
    description: 'اترك لنا معلومات مختصرة أو راسلنا مباشرة عبر البريد.',
    directLabel: 'راسلنا مباشرة',
    locationLabel: 'الموقع',
    location: 'إسطنبول، تركيا',
    formStep: 'البريد',
    formHeading: 'معلومات المشروع',
    fields: {
      name: 'اسمك *',
      namePlaceholder: 'الاسم الكامل',
      email: 'بريد العمل *',
      emailPlaceholder: 'you@company.com',
      company: 'الشركة / العلامة',
      companyPlaceholder: 'اسم شركتك، إن وُجد',
      projectType: 'نوع المشروع *',
      message: 'نبذة عن مشروعك *',
      messagePlaceholder: 'هدفك، وما تحتاجه، والجدول الزمني إن وُجد...',
    },
    choose: 'اختر',
    projectTypes: ['تطبيق ويب', 'تطبيق هاتف', 'برمجيات مخصصة', 'مشروع لعبة', 'تصميم UX/UI', 'أخرى'],
    submit: 'إنشاء رسالة',
    note: 'يحوّل النموذج معلوماتك إلى مسودة جاهزة في تطبيق البريد لديك.',
    noteSent: 'المسودة جاهزة. إذا لم يفتح تطبيق البريد، راسلنا مباشرة على info@tionstudios.com.',
    mailSubject: 'طلب مشروع جديد — {name}',
    mailName: 'الاسم',
    mailEmail: 'البريد الإلكتروني',
    mailCompany: 'الشركة',
    mailProjectType: 'نوع المشروع',
    mailAbout: 'عن المشروع:',
  },

  footer: {
    tagline: 'ويب · هاتف · ألعاب',
    explore: 'تصفّح',
    legal: 'قانوني',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    rights: '© {year} TION Studios. جميع الحقوق محفوظة.',
    backToTop: 'العودة للأعلى',
  },

  games: {
    eyebrow: 'الألعاب',
    heroTitle: 'ألعاب',
    heroAccent: 'TION.',
    heroDescription: 'مشاريع ألعاب الهاتف لدينا.',
    catalogTitle: 'كل الألعاب',
    platform: 'المنصة',
    status: 'الحالة',
    category: 'الفئة',
    focus: 'التركيز',
    appStore: 'App Store',
    googlePlay: 'Google Play',
  },

  notFound: {
    title: 'الصفحة غير موجودة',
    description: 'ربما نُقلت الصفحة التي تبحث عنها أو حُذفت.',
    cta: 'العودة إلى الرئيسية',
  },

  catalog: {
    eyebrow: 'كل الألعاب',
    titleBefore: 'أرشيف',
    titleAccent: 'الألعاب.',
    sideCopy: 'سبعة مشاريع ألعاب للهاتف.',
    statusNote: 'حالة النشر أو الأرشفة مذكورة لكل لعبة',
    gameAlt: 'صورة من لعبة {title} {subtitle}',
    studioArchive: 'أرشيف استوديو TION',
    noteLabel: 'ملاحظة:',
    noteText: 'لم تُدرج روابط المتاجر التي لم تعد فعّالة.',
  },

  pages: {
    home: {
      ctaTitle: 'هل لديك مشروع؟',
      ctaText: 'أرسل لنا معلومات مختصرة للبدء.',
    },
    services: {
      title: 'تطوير الويب والتطبيقات',
      accent: 'والألعاب.',
      description: 'تصميم المنتج وتطوير البرمجيات والصيانة.',
      ctaTitle: 'حدّثنا عن مشروعك.',
      ctaText: 'يُحدد النطاق والجدول الزمني معًا.',
    },
    games: {
      description: 'سبعة مشاريع ألعاب للهاتف.',
      heroImageAlt: 'سيارة رياضية حمراء من لعبة Real Driver',
      seeAll: 'عرض كل الألعاب',
      ctaTitle: 'لنتحدث عن مشروع لعبتك.',
      ctaText: 'نقدم الدعم في التصميم والتطوير معًا.',
    },
    about: {
      description: 'استوديو لتطوير البرمجيات والألعاب مقره إسطنبول.',
      factLocation: 'الموقع',
      factLocationValue: 'إسطنبول',
      factAreas: 'المجالات',
      factAreasValue: 'ويب · هاتف · ألعاب',
      ctaTitle: 'اتصل بنا',
      ctaText: 'راسلنا بخصوص مشروع جديد.',
    },
    contact: {
      sendEmail: 'إرسال بريد',
    },
    notFound: {
      eyebrow: '404 / الصفحة غير موجودة',
      title: 'الصفحة التي تبحث عنها',
      accent: 'ليست هنا.',
      description: 'ربما تغيّر الرابط أو حُذفت الصفحة.',
      cta: 'العودة إلى الرئيسية',
    },
    cta: {
      eyebrow: 'اتصل بنا',
      primary: 'راسلنا',
    },
  },

  footerExtra: {
    tagline: 'استوديو لتطوير البرمجيات والألعاب.',
  },

  common: {
    loading: 'جارٍ التحميل',
  },
}
