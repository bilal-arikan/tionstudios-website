# Tionport web sitesi

React 19 + Vite 7 tabanlı çok sayfalı kurumsal site. Üretim hedefi https://tionport.com;
altyapı MyHermes VPS üzerindeki mevcut Caddy sunucusudur. DNS Cloudflare'da,
alan adı kaydı Squarespace'te yönetilir.

## Geliştirme ve doğrulama

Windows PowerShell üzerinden:

```powershell
npm ci
npm run dev
npm run check
```

`check`, kod denetimini, üretim derlemesini ve site doğrulamasını çalıştırır.
Doğrulama 30 dil/sayfa birleşimini React ile oluşturur; ana başlıkları, yerel
bağlantıları, görselleri, canonical/hreflang etiketlerini, site haritasını ve
eski marka kalıntılarını kontrol eder. Kullanıcı isteğiyle korunan üç sosyal
hesap bağlantısı eski marka kontrolünün dışındadır.

## Sayfalar

| Sayfa | Türkçe | İngilizce |
| --- | --- | --- |
| Ana sayfa | `/` | `/en/` |
| Hizmetler | `/hizmetler/` | `/en/services/` |
| Oyunlar | `/oyunlar/` | `/en/games/` |
| Hakkımızda | `/hakkimizda/` | `/en/about/` |
| İletişim | `/iletisim/` | `/en/contact/` |

İspanyolca, Arapça, Rusça ve Çince sayfalar `/es/`, `/ar/`, `/ru/`, `/zh/`
altında çevrilmiş yol adlarıyla üretilir. Mevcut altı dil korunmuştur.
Arapça sağdan sola düzen kullanır. Dil tercihi tarayıcıda saklanır.
Her URL bağımsız HTML girişidir; yenilemeler ve doğrudan ziyaretler çalışır.
Bulunmayan yollar sunucuda gerçek HTTP 404 yanıtı verir.

İngilizce yasal belgeler tüm dillerde ortak `/privacy-policy.html` ve
`/terms-of-services.html` adreslerini kullanır. `/app-ads.txt` korunur.
İletişim formu `info@tionport.com` alıcılı e-posta taslağı açar.

## Dosya yapısı

- `src/App.jsx`: Ortak kabuk ve sayfa seçimi.
- `src/pages/`: Ana sayfa, hizmetler, oyunlar, hakkımızda, iletişim ve 404.
- `src/components/`: Menü, altbilgi, marka ve ortak bölümler.
- `src/data/`: Oyun portföyü, menü, hizmet ve süreç verileri.
- `src/i18n/`: Dil/yol kayıtları ve çeviri sözlükleri.
- `src/LegalPage.jsx`: Yasal belge görünümü.
- `src/styles.css`: Tema dosyalarının giriş noktası.
- `src/styles/`: Renkler, temel öğeler, menü, ana bölüm, içerik, oyunlar,
  iletişim, altbilgi/yasal belgeler ve mobil düzen için ayrı CSS dosyaları.
- `scripts/generate-pages.mjs`: 30 HTML girişi ve 32 URL içeren site haritası.
- `scripts/verify-site.mjs`: Yayın öncesi doğrulama.
- `deploy/`: Caddy yapılandırması ve sürüm geçiş betikleri.
- `scripts/deploy.ps1`: Windows üzerinden VPS yayını.

Türkçe kök HTML dosyaları sayfa şablonlarıdır. Çeviriler sözlüklerde düzenlenir;
diğer dillerin HTML dosyaları derlemede yeniden üretilir. Marka metinleri ve
paylaşım görseli Tionport olarak güncellenmiştir. LinkedIn, GitHub ve Instagram
adresleri kullanıcının isteğiyle eski hesaplarda kalır.

## Görsel tema

Tion kontrol merkezinden alınan kömür grisi ve lime yeşili palet kullanılır:
`#101319` zemin, `#171b23` paneller, `#292f3a` sınırlar,
`#e9edf4` metin ve `#bcf578` vurgu. Ana yazı tipi yerel sunulan DM Sans,
küçük etiketlerde JetBrains Mono'dur.

Ana sayfa gerçek oyun görselini öne çıkarır; hizmetler satırlar halinde,
süreç ve ilkeler kartlar halinde sunulur. Mobil menü ve altı dil korunur.
Açılışı geciktiren splash ekranı kaldırılmıştır. Hareket azaltma tercihi
desteklenir. Marka simgesi `public/favicon.svg`, paylaşım görselinin vektör
kaynağı `public/images/og-card.svg` dosyasıdır; yayın görseli
`public/images/og-tionport.png` olarak kullanılır.

## VPS yayını

SSH yapılandırmasındaki `myhermes` takma adı kullanılır. Yönetim Tailscale ile
`100.101.118.70`, genel web trafiği `212.108.107.194` adresini kullanır.
Özel anahtar projeye veya GitHub'a eklenmez.

```powershell
npm run deploy
```

Yalnızca doğrulanmış `dist/` içeriği aktarılır. Her sürüm
`/var/www/tionport/releases/<tarih-saat>/` altına açılır. `current` bağlantısı
atomik olarak değiştirilir; önceki sürüm `previous` bağlantısında korunur.
Önceki sürümün hash içeren kaynakları, eski sekmelerin çalışması için saklanır.

İlk kurulum veya Caddy bölümünün değişmesi durumunda:

```powershell
scp deploy/Caddyfile deploy/install-caddy.sh myhermes:/home/hermes/tionport-incoming/
ssh myhermes 'sudo bash /home/hermes/tionport-incoming/install-caddy.sh'
```

Betik mevcut Caddy dosyasını yedekler, yalnızca Tionport bölümünü günceller,
doğrular ve kesintisiz yeniden yükler. Hata halinde önceki yapılandırmaya döner.
Caddy Let's Encrypt HTTPS sertifikalarını otomatik yönetir.

Geri dönüş için önce `readlink /var/www/tionport/previous` ile hedefi doğrulayın.
Bu sürüme `current.next` bağlantısı oluşturup `current` üzerine atomik taşıyın.
Sürüm klasörlerinin silinmesi gerekmez.

GitHub Actions artık doğrulama ve dağıtım paketi üretir; GitHub Pages yayını ve
otomatik yayın iş akışı kapatılmıştır. VPS güncellemesi yukarıdaki komutla yapılır.

## Alan adı

- Cloudflare: `desiree.ns.cloudflare.com`, `rex.ns.cloudflare.com`.
- Ana alan adı: `A @ → 212.108.107.194`, Cloudflare proxy etkin.
- `www`: `CNAME www → tionport.com`, proxy etkin, ana adrese kalıcı yönlendirme.
- Cloudflare SSL/TLS modu `Full (Strict)`; DNSSEC etkin.
- Eski alan adı, yol ve sorgu korunarak yeni adrese yönlendirilir.
- Google MX, SPF, DKIM ve doğrulama TXT kayıtları korunur.
- E-posta ve `_domainconnect` kayıtları DNS üzerinden çalışır.

Geçişin canlı sonuçları `deploy/YAYIN.md` dosyasında tutulur.
