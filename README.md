# Tionport web sitesi

[tionport.com](https://tionport.com/) için altı dilli kurumsal tanıtım ve oyun
portföyü. React 19 + Vite 7, Three.js, Lucide, DM Sans ve JetBrains Mono kullanır.
Caddy statik `dist/` dosyalarını VPS'de sunar. Ayrı API/veritabanı yoktur;
iletişim formu `info@tionport.com` alıcılı e-posta taslağı açar.

Kaynak depo: [bilal-arikan/tionstudios-website](https://github.com/bilal-arikan/tionstudios-website).
Eski depo adı korunmuştur; ana dal `main`. [Yayın, domain ve geri alma](deploy/YAYIN.md).

## Geliştirme

Windows PowerShell; Node.js 22.12+ veya 24+, npm:

```powershell
npm ci
npm run dev
```

Vite varsayılanı 5173; gerçek adres terminal çıktısındadır. `npm run preview`
üretim derlemesini varsayılan 4173 portunda önizler. Çalışmak için ortam değişkeni
veya gizli anahtar gerekmez. Canonical domain `scripts/generate-pages.mjs` ve
HTML kaynaklarında tanımlıdır; otomatik `.env` domain ayarı yoktur.

```powershell
npm run check
```

Bu komut ESLint, galaksi ve temiz sayfa üretimi testleri, derleme ve 96 dil/yol sayfasının
React çıktısı/metadata/yerel bağlantı/görsel/yasal belge/site haritası denetimini
çalıştırır. WebGL, klavye ve mobil menü için tarayıcı kontrolü ayrıca gerekir.
Mevcut büyük Three.js paket uyarısı derlemeyi engellemez.

## Sayfalar ve durum

| Sayfa | Türkçe | İngilizce |
| --- | --- | --- |
| Ana sayfa | `/` | `/en/` |
| Hizmetler | `/hizmetler/` | `/en/services/` |
| Ana sayfa oyun bölümü | `/#projeler` | `/en/#projeler` |
| Ürün tanıtımı | `/products/{id}/` | `/en/products/{id}/` |
| Oyun tanıtımı | `/oyunlar/{slug}/` | `/en/games/{slug}/` |
| Real Driver | `/oyunlar/real-driver/` | `/en/games/real-driver/` |
| Hakkımızda | `/hakkimizda/` | `/en/about/` |
| İletişim | `/iletisim/` | `/en/contact/` |

İspanyolca, Arapça, Rusça ve Çince yollar `src/i18n/locales.js` içindedir.
Toplam 96 dil/sayfa HTML girişi, ortak iki İngilizce yasal sayfa ve 98 URL'lik
site haritası vardır. Arapça RTL kullanır; bulunmayan yollar Caddy'de HTTP 404
verir. `/privacy-policy.html`, `/terms-of-services.html` ve `/app-ads.txt` korunur.

Ana sayfada hizmetler bölümü yerine web projelerinin kartları
bulunur; yedi oyunun tamamı aynı sayfada gösterilir. Ayrı Games kataloğu
kaldırılmıştır; menüdeki Product bağlantısı ana sayfanın ürün bölümüne gider.
Detay sayfalarındaki geri bağlantılar ve eski altı Games adresi de aynı ürün
bölümüne yönlendirilir. Eski Games adresleri HTML yönlendirmesi yapar
ve site haritasına dahil edilmez. Her ürün ve oyunun ayrı tanıtım sayfası vardır.

Bu depo mobil uygulama kaynağı içermez. `src/data/games.js` portföy verisidir:
Real Driver için iOS/Android mağaza bağlantıları vardır; diğer kartlardaki arşiv
ve durum metinleri bağımsız yayın/tamamlanma doğrulaması değildir. Bu denetimde
mağaza uygulamalarının güncel erişilebilirliği sınanmadı.

## Klasör düzeni

| Klasör | Sorumluluk |
| --- | --- |
| `src/` | React uygulaması; `pages/` sayfalar, `components/` ortak bölümler, `styles/` stiller |
| `src/i18n/`, `src/data/` | Dil/yol kayıtları, çeviriler ve portföy verileri |
| `templates/` | Altı sayfanın HTML şablonu, iki yasal giriş ve 404 girişi |
| `public/` | Olduğu gibi yayımlanan görsel, ikon, reklam ve yasal belge kaynakları |
| `scripts/` | Sayfa/görsel üretimi, doğrulama ve Windows yayın araçları |
| `tests/` | Galaksi ve sayfa üretimi testleri |
| `deploy/` | Caddy, sunucu yayın betikleri ve [yayın kılavuzu](deploy/YAYIN.md) |
| `.github/workflows/` | CI doğrulaması ve indirilebilir `dist` paketi |
| `.generated/` | Vite'ın kullandığı 105 HTML girişi (96 sayfa, 3 sabit giriş, 6 yönlendirme) ve site haritası; otomatik, Git dışında |
| `dist/` | Yayımlanacak üretim çıktısı; otomatik, Git dışında |

`npm run dev` ve `npm run build`, önce `templates/` ile `src/i18n/` kaynaklarından
`.generated/` klasörünü yeniden oluşturur. Dil klasörleri yalnız bu çıktıda ve
`dist/` içinde bulunur; yayımlanan URL'ler değişmez. Vite girdileri
`scripts/site-paths.mjs` üzerinden kayıtlı sayfalardan belirlenir; depo genelinde
HTML taraması yapılmaz. `node_modules/` npm bağımlılıklarıdır, kaynak değildir.

React, CSS ve çeviri içeriği Vite üzerinden yenilenir. Geliştirme sunucusu açıkken
HTML şablonu, dil/yol kaydı veya sayfa metadata'sı değişirse ayrı terminalde
`npm run gen:pages` çalıştırın; yeni bir dil/yol eklediyseniz sunucuyu yeniden
başlatın. `.generated/`, `dist/` ve üretilen `sitemap.xml` elle düzenlenmez;
üretim her seferinde eski ara çıktıları temizler ve kaynak şablonlara dokunmaz.

Yasal sayfalar `public/legal/` içeriğini yükler. `app-ads.txt` ve `CNAME` için tek
kaynak `public/` klasörüdür. Tasarım kaynağı `public/favicon.svg`, paylaşım görseli
`public/images/og-tionport.png` dosyasıdır.

Galaksi yalnız ana sayfada dinamik yüklenir; azaltılmış hareket tercihi,
görünmeyen sekmede durma ve WebGL yokken sabit SVG desteklenir. Fare/ok tuşları
yakın parçacıkları dağıtır; oynatma düğmesi veya altyazı yoktur. Geometri değişince
`npm run gen:galaxy` ile sabit görseli güncelleyin. Sosyal profillerdeki eski
Tion Studios bağlantıları kullanıcı tercihiyle korunur.

Kod, yorumlar ve yeni kaynak metinler İngilizce, belgeler Türkçe yazılır.
Mevcut altı dilin çeviri içerikleri korunur. Yerel `.claude/launch.json` Git'e
girmez. Çalışma alanı ve dashboard: [üst kılavuz](../README.md).

## Real Driver tanıtım sayfası

Ana sayfa, dilin oyun yolu altındaki `real-driver/` sayfasına
bağlanır. Yeni kampanya içeriği İngilizcedir (`lang="en"`, `dir="ltr"`);
üst menü, alt bilgi ve dil seçici mevcut yerelleştirmeyi korur. Altı dilin
sayfa yolları, canonical ve site haritası otomatik üretilir.

Sayfa bileşenleri `src/components/real-driver/`, sayfa girişi
`src/pages/RealDriverPage.jsx`, stilleri `src/styles/real-driver*.css` altındadır.
Sürüş modları, galeri ve platform ayarları `src/data/realDriver.js` içindedir.
Steam sayfası açıldığında bu dosyadaki `steamUrl: null` resmi mağaza adresiyle
değiştirilir; bekleme kartı otomatik olarak bağlantıya dönüşür. Çıkış tarihi
veya henüz kullanılabilir bir Steam sürümü iddia edilmez.

YouTube fragmanı (`wSkLt35uevA`) yalnız oynatma düğmesine basıldığında
`youtube-nocookie.com` üzerinden yüklenir. Gömme erişimi engellenirse doğrudan
YouTube bağlantısı kullanılabilir. Altı sürüş modu klavyeyle seçilebilir;
galeri yerel `dialog` ile açılır, Escape ile kapanır ve ok tuşlarıyla gezilir.
Görsel kaynakları: [Real Driver görselleri](public/images/real-driver/README.md).

## Ürün ve oyun tanıtımları

Ürün açıklamaları, özellikler ve resmi bağlantılar `src/data/projects.js`
dosyasında; mevcut oyun verisi `src/data/games.js`, yeni İngilizce oyun tanıtım
metinleri `src/data/gameDetails.js` dosyasındadır. Mevcut Türkçe oyun verileri
korunur. Yeni ürünler mevcut veri listesine eklendiğinde ayrı sayfa kaydı
`src/data/detailPages.js` üzerinden üretilir.

Ortak tanıtım bileşenleri `src/components/detail/`, sayfa girişi
`src/pages/DetailPage.jsx`, stiller `src/styles/details.css` ve HTML şablonu
`templates/detail.html` altındadır. Tanıtım içeriği İngilizce ve LTR;
menü, alt bilgi ve dil seçici mevcut altı dili korur. Dil seçimi aynı ürün veya
oyunun karşılık gelen adresini açar. Real Driver kendi kampanya sayfasını korur.

Ürün metinleri 9 Ekim 2026 tarihinde görünen resmi ana sayfa içeriklerinden
hazırlanmıştır: [TionAds](https://tionads.com/), [Solsty](https://solsty.net/en/),
[Namesight](https://namesight.app/en), [Duomsy](https://duomsy.com/),
[TevApp](https://tevapp.com/) ve [Farkındayım](https://farkindayim.tr/en).
Farkındayım 26 Kasım 2026'da kullanıcı isteğiyle ürün listesinden kaldırılmıştır.
Bu kaynak incelemesi uygulama işlevlerinin veya hesapların sınanması değildir.

Bedenden Beyne ve Afyon Cimnastik 17 Ekim 2026'da eklenmiş, 25 Kasım 2026'da
kullanıcı isteğiyle Tionport'tan kaldırılıp bilalarikan.com portfolyosuna taşınmıştır.
Eski `/products/bedendenbeyne/` ve `/products/afyoncimnastik/` adresleri artık 404 verir.
