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

Bu komut ESLint, galaksi ve temiz sayfa üretimi testleri, derleme ve 30 yerelleştirilmiş sayfanın
React çıktısı/metadata/yerel bağlantı/görsel/yasal belge/site haritası denetimini
çalıştırır. WebGL, klavye ve mobil menü için tarayıcı kontrolü ayrıca gerekir.
Mevcut büyük Three.js paket uyarısı derlemeyi engellemez.

## Sayfalar ve durum

| Sayfa | Türkçe | İngilizce |
| --- | --- | --- |
| Ana sayfa | `/` | `/en/` |
| Hizmetler | `/hizmetler/` | `/en/services/` |
| Oyunlar | `/oyunlar/` | `/en/games/` |
| Hakkımızda | `/hakkimizda/` | `/en/about/` |
| İletişim | `/iletisim/` | `/en/contact/` |

İspanyolca, Arapça, Rusça ve Çince yollar `src/i18n/locales.js` içindedir.
Toplam 30 dil/sayfa HTML girişi, ortak iki İngilizce yasal sayfa ve 32 URL'lik
site haritası vardır. Arapça RTL kullanır; bulunmayan yollar Caddy'de HTTP 404
verir. `/privacy-policy.html`, `/terms-of-services.html` ve `/app-ads.txt` korunur.

Bu depo mobil uygulama kaynağı içermez. `src/data/games.js` portföy verisidir:
Real Driver için iOS/Android mağaza bağlantıları vardır; diğer kartlardaki arşiv
ve durum metinleri bağımsız yayın/tamamlanma doğrulaması değildir. Bu denetimde
mağaza uygulamalarının güncel erişilebilirliği sınanmadı.

## Klasör düzeni

| Klasör | Sorumluluk |
| --- | --- |
| `src/` | React uygulaması; `pages/` sayfalar, `components/` ortak bölümler, `styles/` stiller |
| `src/i18n/`, `src/data/` | Dil/yol kayıtları, çeviriler ve portföy verileri |
| `templates/` | Beş sayfanın Türkçe HTML şablonu, iki yasal giriş ve 404 girişi |
| `public/` | Olduğu gibi yayımlanan görsel, ikon, reklam ve yasal belge kaynakları |
| `scripts/` | Sayfa/görsel üretimi, doğrulama ve Windows yayın araçları |
| `tests/` | Galaksi ve sayfa üretimi testleri |
| `deploy/` | Caddy, sunucu yayın betikleri ve [yayın kılavuzu](deploy/YAYIN.md) |
| `.github/workflows/` | CI doğrulaması ve indirilebilir `dist` paketi |
| `.generated/` | Vite'ın kullandığı 33 HTML girişi ve site haritası; otomatik, Git dışında |
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
