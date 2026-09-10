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

Bu komut ESLint, 3 galaksi testi, derleme ve 30 yerelleştirilmiş sayfanın
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

## Kaynak düzeni

- `src/App.jsx`, `src/pages/`: ortak kabuk ve sayfalar.
- `src/components/`, `src/components/galaxy/`: bölümler ve galaksi yaşam döngüsü.
- `src/data/`, `src/i18n/`: portföy ve altı dilin sözlük/yol kayıtları.
- `src/styles/`: tema ve sorumluluklarına ayrılmış stiller.
- Kök Türkçe HTML girişleri: üretim şablonları. Diğer dil HTML'leri
  `scripts/generate-pages.mjs` tarafından derlemede yeniden üretilir.
- `public/`: statik dosyalar; `app-ads.txt` ve `CNAME` için tek kaynak.
- `public/legal/`: React yasal sayfalarının yüklediği içerik; tasarım kaynağı
  `public/favicon.svg`, paylaşım görseli `public/images/og-tionport.png`.
- `.github/workflows/check.yml`: doğrulama ve indirilebilir `dist` paketi.

Galaksi yalnız ana sayfada dinamik yüklenir; azaltılmış hareket tercihi,
görünmeyen sekmede durma ve WebGL yokken sabit SVG desteklenir. Fare/ok tuşları
yakın parçacıkları dağıtır; oynatma düğmesi veya altyazı yoktur. Geometri değişince
`npm run gen:galaxy` ile sabit görseli güncelleyin. Sosyal profillerdeki eski
Tion Studios bağlantıları kullanıcı tercihiyle korunur.

Kod, yorumlar ve yeni kaynak metinler İngilizce, belgeler Türkçe yazılır.
Mevcut altı dilin çeviri içerikleri korunur. Yerel `.claude/launch.json` Git'e
girmez. Çalışma alanı ve dashboard: [üst kılavuz](../README.md).
