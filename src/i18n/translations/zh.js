// Chinese (中文) — TRANSLATION PENDING.
//
// Values below are still Turkish placeholders copied from tr.js so the site
// renders correctly while translation is in progress. Replace the strings,
// not the keys: the key shape must stay identical to tr.js.
//
// Keep intact when translating:
//   - {name}, {title}, {year} and similar braces (runtime values)
//   - Brand and product names: TION Studios, Real Driver, Unity, React, iOS
//   - Array lengths (services.items, process.steps, faq.items, about.principles)
//
// Untranslated keys automatically fall back to Turkish, so partial files are safe.

export default {
  meta: {
    home: {
      title: 'TION Studios — Dijital Ürün ve Yazılım Stüdyosu',
      description: 'TION Studios, İstanbul merkezli web, mobil ve oyun geliştirme stüdyosudur.',
    },
    services: {
      title: 'Hizmetler — TION Studios',
      description: 'Web geliştirme, mobil uygulama, özel yazılım ve oyun geliştirme hizmetleri.',
    },
    games: {
      title: 'Oyunlar — TION Studios Oyun Arşivi',
      description: 'TION Studios tarafından geliştirilen mobil oyun projeleri.',
    },
    about: {
      title: 'Hakkımızda — TION Studios',
      description: 'İstanbul merkezli yazılım ve oyun geliştirme stüdyosu.',
    },
    contact: {
      title: 'İletişim — TION Studios',
      description: 'Projeniz için TION Studios ile iletişime geçin.',
    },
  },

  nav: {
    services: 'Hizmetler',
    games: 'Oyunlar',
    about: 'Hakkımızda',
    contact: 'İletişim',
    menu: 'Menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    mainNav: 'Ana menü',
    home: 'TION Studios ana sayfa',
    skipToContent: 'Ana içeriğe geç',
    language: 'Dil',
    selectLanguage: 'Dil seçin',
  },

  hero: {
    eyebrow: 'TION Studios · İstanbul',
    titleBefore: 'Web, mobil ve',
    titleAccent: 'oyun',
    titleAfter: 'geliştiriyoruz.',
    description: 'TION Studios, yazılım ve oyun geliştirme stüdyosudur.',
    ctaPrimary: 'Hizmetler',
    ctaSecondary: 'Oyunlar',
    proofWeb: 'Web geliştirme',
    proofMobile: 'Mobil uygulama',
    proofGame: 'Oyun geliştirme',
    scroll: 'Aşağı kaydır',
  },

  readout: {
    label: 'TION Studios yayın durumu',
    project: 'proje',
    platform: 'platform',
    type: 'tür',
    focus: 'odak',
    status: 'durum',
    live: 'İki mağazada yayında',
    studio: 'STÜDYO',
    gamesCount: 'oyun',
    shippedCount: 'yayında',
    designCode: 'Tasarım + kod',
    oneTeam: 'Tek ekip',
    location: 'İstanbul',
  },

  services: {
    eyebrow: 'Hizmetler',
    titleBefore: 'Çalışma',
    titleAccent: 'alanları.',
    lead: 'Web, mobil, özel yazılım ve oyun geliştirme.',
    contactCta: 'İletişim',
    talkAbout: '{title} hakkında konuşalım',
    items: [
      {
        title: 'Ürün Tasarımı',
        text: 'Ürün kapsamı, kullanıcı akışları ve arayüz tasarımı.',
        tags: ['Keşif', 'UX', 'UI'],
      },
      {
        title: 'Web Geliştirme',
        text: 'Kurumsal siteler, web uygulamaları ve yönetim panelleri.',
        tags: ['React', 'API', 'E-ticaret'],
      },
      {
        title: 'Mobil Uygulamalar',
        text: 'iOS ve Android için mobil uygulama geliştirme.',
        tags: ['iOS', 'Android', 'Cross-platform'],
      },
      {
        title: 'Özel Yazılım & Oyun',
        text: 'Özel iş yazılımları, entegrasyonlar ve Unity projeleri.',
        tags: ['Entegrasyon', 'Otomasyon', 'Unity'],
      },
    ],
  },

  projects: {
    eyebrow: 'Oyunlar',
    titleBefore: 'TION',
    titleAccent: 'oyunları.',
    sideCopy: 'Yedi mobil oyun projesi.',
    archiveLabel: 'Oyun arşivi',
    allGames: 'Tüm oyunlar',
    kicker: 'TION OYUNLARI',
    published: 'Yayında',
    featuredDescription: 'Mobil şehir ve sürüş simülasyonu.',
    featuredAlt: 'Real Driver: Legend of the City oyunundan kırmızı spor otomobil',
    coverAlt: '{title} {subtitle} kapak görseli',
    appStoreAlt: 'App Store’da görüntüle',
    googlePlayAlt: 'Google Play’den indirin',
    capabilities: ['Mobil', '3D', 'Sürüş', 'Unity'],
  },

  process: {
    eyebrow: 'Süreç',
    titleBefore: 'Çalışma',
    titleAccent: 'süreci.',
    description: 'Kapsam, tasarım, geliştirme ve yayın.',
    steps: [
      { title: 'Kapsam',     text: 'Gereksinimleri ve öncelikleri belirleriz.', output: 'Kapsam + plan' },
      { title: 'Tasarım',    text: 'Akışları ve arayüzü prototipleriz.',        output: 'Prototip' },
      { title: 'Geliştirme', text: 'Ürünü geliştirir ve test ederiz.',          output: 'Test sürümü' },
      { title: 'Yayın',      text: 'Ürünü yayınlar, gerektiğinde bakımını sürdürürüz.', output: 'Canlı ürün' },
    ],
  },

  about: {
    eyebrow: 'Hakkımızda',
    titleBefore: 'TION',
    titleAccent: 'Studios.',
    description: 'İstanbul merkezli yazılım ve oyun geliştirme stüdyosuyuz.',
    location: 'İstanbul, Türkiye',
    principles: [
      { title: 'Tasarım ve geliştirme', text: 'Tasarım ve yazılım aynı süreçte yürütülür.' },
      { title: 'Teknik yapı',           text: 'Bakımı yapılabilir sistemler geliştiririz.' },
      { title: 'Düzenli paylaşım',      text: 'Çalışan sürümleri süreç boyunca paylaşırız.' },
      { title: 'Destek',                text: 'Yayın sonrasında bakım desteği verebiliriz.' },
    ],
  },

  faq: {
    eyebrow: 'SSS',
    titleBefore: 'Sık sorulan',
    titleAccent: 'sorular.',
    items: [
      { question: 'Hangi projelerde çalışıyorsunuz?',        answer: 'Web, mobil, özel yazılım ve oyun projelerinde çalışıyoruz.' },
      { question: 'Süreç nasıl başlıyor?',                   answer: 'Kısa bir görüşmeden sonra kapsam ve çalışma planı hazırlanır.' },
      { question: 'Mevcut bir projeyi devralabilir misiniz?', answer: 'Evet. Önce kod ve tasarım yapısını inceler, ardından devir planı hazırlarız.' },
      { question: 'Yayın sonrasında destek veriyor musunuz?', answer: 'İhtiyaca göre bakım, iyileştirme ve yeni özellik desteği veriyoruz.' },
      { question: 'Bütçe nasıl belirleniyor?',               answer: 'Bütçe; kapsam, teknik gereksinimler ve takvime göre belirlenir.' },
    ],
  },

  contact: {
    eyebrow: 'İletişim',
    titleBefore: 'Projeniz için',
    titleAccent: 'bize yazın.',
    description: 'Kısa bir bilgi bırakın veya doğrudan e-posta gönderin.',
    directLabel: 'Doğrudan yazın',
    locationLabel: 'Konum',
    location: 'İstanbul, Türkiye',
    formStep: 'E-POSTA',
    formHeading: 'Proje bilgileri',
    fields: {
      name: 'Adınız *',
      namePlaceholder: 'Ad Soyad',
      email: 'İş e-postanız *',
      emailPlaceholder: 'siz@sirket.com',
      company: 'Şirket / marka',
      companyPlaceholder: 'Varsa şirketinizin adı',
      projectType: 'Proje tipi *',
      message: 'Kısaca projeniz *',
      messagePlaceholder: 'Hedefiniz, ihtiyacınız ve varsa hedef takviminiz...',
    },
    choose: 'Seçiniz',
    projectTypes: ['Web uygulaması', 'Mobil uygulama', 'Özel yazılım', 'Oyun projesi', 'UX/UI tasarım', 'Diğer'],
    submit: 'E-posta oluştur',
    note: 'Form, bilgilerinizi e-posta uygulamanızda hazır bir taslağa dönüştürür.',
    noteSent: 'Taslak hazırlandı. E-posta uygulamanız açılmazsa info@tionstudios.com adresine doğrudan yazabilirsiniz.',
    mailSubject: 'Yeni proje talebi — {name}',
    mailName: 'Ad Soyad',
    mailEmail: 'E-posta',
    mailCompany: 'Şirket',
    mailProjectType: 'Proje tipi',
    mailAbout: 'Proje hakkında:',
  },

  footer: {
    tagline: 'Web · Mobil · Oyun',
    explore: 'Keşfet',
    legal: 'Yasal',
    contact: 'İletişim',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    rights: '© {year} TION Studios. Tüm hakları saklıdır.',
    backToTop: 'Yukarı dön',
  },

  games: {
    eyebrow: 'Oyunlar',
    heroTitle: 'TION',
    heroAccent: 'oyunları.',
    heroDescription: 'Mobil oyun projelerimiz.',
    catalogTitle: 'Tüm oyunlar',
    platform: 'Platform',
    status: 'Durum',
    category: 'Kategori',
    focus: 'Odak',
    appStore: 'App Store',
    googlePlay: 'Google Play',
  },

  notFound: {
    title: 'Sayfa bulunamadı',
    description: 'Aradığınız sayfa taşınmış veya kaldırılmış olabilir.',
    cta: 'Ana sayfaya dön',
  },

  pages: {
    home: {
      ctaTitle: 'Bir projeniz mi var?',
      ctaText: 'Kısa bilgi için bize yazın.',
    },
    services: {
      title: 'Web, mobil ve oyun',
      accent: 'geliştirme.',
      description: 'Ürün tasarımı, yazılım geliştirme ve bakım.',
      ctaTitle: 'Projeniz için bize yazın.',
      ctaText: 'Kapsam ve takvim görüşmede belirlenir.',
    },
    games: {
      description: 'Yedi mobil oyun projesi.',
      heroImageAlt: 'Real Driver oyunundan kırmızı spor otomobil',
      seeAll: 'Tüm oyunları gör',
      ctaTitle: 'Oyun projesi için bize yazın.',
      ctaText: 'Tasarım ve geliştirme desteği veriyoruz.',
    },
    about: {
      description: 'İstanbul merkezli yazılım ve oyun geliştirme stüdyosu.',
      factLocation: 'Konum',
      factLocationValue: 'İstanbul',
      factAreas: 'Alanlar',
      factAreasValue: 'Web · Mobil · Oyun',
      ctaTitle: 'İletişim',
      ctaText: 'Yeni bir proje için bize yazabilirsiniz.',
    },
    contact: {
      sendEmail: 'E-posta gönder',
    },
    notFound: {
      eyebrow: '404 / Sayfa bulunamadı',
      title: 'Aradığınız sayfa',
      accent: 'burada değil.',
      description: 'Bağlantı değişmiş veya sayfa kaldırılmış olabilir.',
      cta: 'Ana sayfaya dön',
    },
    cta: {
      eyebrow: 'İletişim',
      primary: 'Bize yazın',
    },
  },

  footerExtra: {
    tagline: 'Yazılım ve oyun geliştirme stüdyosu.',
  },

  catalog: {
    eyebrow: 'Tüm oyunlar',
    titleBefore: 'Oyun',
    titleAccent: 'arşivi.',
    sideCopy: 'Yedi mobil oyun projesi.',
    statusNote: 'Yayın ve arşiv durumları belirtilmiştir',
    gameAlt: '{title} {subtitle} oyun görseli',
    studioArchive: 'TION stüdyo arşivi',
    noteLabel: 'Not:',
    noteText: 'Aktif olmayan eski mağaza bağlantıları paylaşılmamıştır.',
  },

  common: {
    loading: 'Yükleniyor',
  },
}
