export const games = [
  {
    slug: 'real-driver',
    title: 'Real Driver',
    subtitle: 'Legend of the City',
    category: 'Sürüş simülasyonu',
    platform: 'iOS',
    status: 'App Store’da',
    image: '/images/projects/real-driver.jpg',
    wideImage: '/images/projects/real-driver-action.jpg',
    description:
      'Şehir keşfi, araç kişiselleştirme ve sürüş hissini tek bir mobil deneyimde buluşturan açık dünya otomobil oyunu.',
    focus: ['Açık dünya', '3D araçlar', 'Mobil performans'],
    storeUrl: 'https://apps.apple.com/us/app/real-driver-legend-of-the-city/id1607564621',
    featured: true,
  },
  {
    slug: 'sea-treasure',
    title: 'Sea Treasure',
    subtitle: 'Pirate Run',
    category: 'Macera · Runner',
    platform: 'Mobil',
    status: 'Stüdyo arşivi',
    image: '/images/projects/sea-treasure.jpg',
    description:
      'Korsan temalı düşük poligonlu bir dünyada koşu, yön bulma ve keşif mekaniklerini bir araya getiren mobil oyun.',
    focus: ['Runner mekaniği', 'Low-poly dünya', 'Mobil oyun'],
  },
  {
    slug: 'mice-company',
    title: 'Mice Company',
    subtitle: 'Karakter odaklı macera',
    category: 'Casual macera',
    platform: 'Mobil',
    status: 'Geliştirme arşivi',
    image: '/images/projects/mice-company.jpg',
    description:
      'Renkli karakterleri ve erişilebilir oyun yapısını merkeze alan, karakter odaklı casual mobil oyun konsepti.',
    focus: ['Karakter tasarımı', 'Casual deneyim', 'Oyun konsepti'],
  },
  {
    slug: 'neon',
    title: 'NeoN',
    subtitle: 'Minimal arcade deneyimi',
    category: 'Arcade',
    platform: 'Mobil',
    status: 'Stüdyo arşivi',
    image: '/images/projects/neon.jpg',
    description:
      'Minimal bir görsel dil, hızlı kararlar ve refleks odaklı oynanış üzerine kurulan kompakt arcade deneyimi.',
    focus: ['Refleks', 'Minimal tasarım', 'Arcade döngüsü'],
  },
  {
    slug: 'platforms',
    title: 'Platforms',
    subtitle: '3D platform deneyimi',
    category: 'Platform · Arcade',
    platform: 'Mobil',
    status: 'Stüdyo arşivi',
    image: '/images/projects/platforms.jpg',
    description:
      'Küp tabanlı 3D bir dünyada zamanlama, yön kontrolü ve platform hareketlerini birleştiren arcade çalışma.',
    focus: ['3D platform', 'Zamanlama', 'Seviye tasarımı'],
  },
  {
    slug: 'mountain-tires',
    title: 'Mountain Tires',
    subtitle: 'Hill Drive',
    category: 'Sürüş · Arcade',
    platform: 'Mobil',
    status: 'Stüdyo arşivi',
    image: '/images/projects/mountain-tires.jpg',
    description:
      'Arazi koşulları, denge ve fizik tabanlı tırmanış mekaniklerini odağına alan yandan görünümlü sürüş oyunu.',
    focus: ['Araç fiziği', 'Arazi sürüşü', 'Arcade'],
  },
  {
    slug: 'war-train',
    title: 'War Train',
    subtitle: 'Iron Fortress',
    category: 'Aksiyon · Simülasyon',
    platform: 'Mobil',
    status: 'Stüdyo arşivi',
    image: '/images/projects/war-train.jpg',
    description:
      'Zırhlı tren yolculuğunu, çevre keşfini ve aksiyon öğelerini bir araya getiren mobil oyun projesi.',
    focus: ['Tren simülasyonu', '3D çevre', 'Aksiyon'],
  },
]

export const featuredGame = games.find((game) => game.featured)
