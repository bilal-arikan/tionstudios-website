# Tionport yayın kaydı

- Tarih: 9 Eylül 2026.
- Ana adres: https://tionport.com.
- Sunucu: MyHermes (`100.101.118.70` yönetim, `212.108.107.194` genel adres).
- Yayın kökü: `/var/www/tionport/current`.
- Güncel sürüm: `/var/www/tionport/releases/20260909-232438`.
- Önceki sürüm: `/var/www/tionport/releases/20260909-224555`.
- İlk Caddy yedeği: `/home/hermes/stack/caddy/Caddyfile.before-tionport-20260909-192845`.
- Yerel başlangıç yedeği: `C:/Users/Bilal/.codex/backups/tionport-20260909`.

## Tamamlanan geçiş

React + Vite çok sayfalı site VPS'de yayınlanmıştır. Ana sayfa, hizmetler,
oyunlar, hakkımızda ve iletişim için altı dilde 30 bağımsız HTML girişi vardır.
Marka metinleri, alan adı, iletişim adresi ve paylaşım görseli Tionport olarak
güncellenmiştir. Eski sosyal hesap bağlantıları kullanıcı isteğiyle korunmuştur.

Squarespace kaydı korunarak ad sunucuları `desiree.ns.cloudflare.com` ve
`rex.ns.cloudflare.com` olarak değiştirilmiştir. Ana alan adı ve `www`
kayıtlarında Cloudflare proxy etkindir. SSL/TLS modu `Full (Strict)` olarak
kaydedilmiştir. Cloudflare Universal SSL sertifikası etkin durumdadır.

Eski Squarespace DNSSEC kaydı geçiş sırasında kullanıcı onayıyla kapatılmış;
Cloudflare DNSSEC etkinleştirilip yeni DS kaydı Squarespace'e eklenmiştir.
Cloudflare paneli DNSSEC başarı durumunu göstermektedir. Google ve Cloudflare
çözümleyicileri imzalı yanıtları doğrulamaktadır.

Google Workspace MX, SPF, DKIM ve alan adı doğrulama TXT kayıtları başlangıç
yedeğiyle karşılaştırılmış ve birebir korunduğu doğrulanmıştır.
`tionstudios.com` ve `www.tionstudios.com` web kayıtları VPS'ye taşınmıştır;
eski alan adının e-posta kayıtları korunmuştur.

GitHub Pages yayını ve Pages dağıtım iş akışı kapatılmıştır. Kaynak depo
korunur; yeni GitHub Actions iş akışı doğrulama ve yayın paketi üretir.

## Doğrulamalar

- `npm run deploy`: kod denetimi, üretim derlemesi, 30 sayfanın oluşturulması,
  metadata, yerel bağlantı, görsel, yasal belge ve site haritası kontrolleri başarılı.
- Cloudflare üzerinden 35 genel URL geçerli HTTPS ile HTTP 200 yanıtı vermiştir.
- Olmayan adres HTTP 404 yanıtı verir.
- `www.tionport.com`, `tionstudios.com` ve `www.tionstudios.com`, geçerli HTTPS
  ile yol ve sorguyu koruyarak HTTP 308 üzerinden ana adrese yönlendirilir.
- Canlı paylaşım görselinin dosya özeti yayın sürümüyle eşleşir.
- Masaüstü görünümü, mobil menü, bağımsız hizmetler sayfasına geçiş ve ortak
  gizlilik belgesi tarayıcıda kontrol edilmiştir.

DNS önbellekleri nedeniyle bazı ağlar eski yanıtları TTL süresince tutabilir.
Yeni web kayıtları ve güvenlik imzası yetkili sunucularda kaydedilmiştir.

## Güncelleme ve geri dönüş

9 Eylül 2026 tarihindeki tema yenilemesinde Tion kontrol merkezinin kömür grisi
ve lime paleti kullanılmıştır. Menü, ana sayfa, hizmetler, oyunlar, süreç,
iletişim, altbilgi ve yasal belge düzenleri yenilenmiştir. DM Sans yazı tipi,
yeni marka simgesi ve paylaşım görseli eklenmiş; splash ekranı kaldırılmıştır.
Tema ayrı sorumluluklara sahip dokuz CSS dosyasında tutulur.

320 piksel genişlik dahil dar ekran kontrolleri, menünün Escape/fokus davranışı,
aynı sayfada dil geçişi ve farklı dil örneklerinde taşma kontrolleri başarılıdır.
`npm run deploy` doğrulamaları geçmiştir. Canlı sitede 32 sayfanın yeni CSS'yi
kullandığı; CSS, favicon, dokunmatik simge ve paylaşım görselinin yerel yayın
dosyalarıyla eşleştiği doğrulanmıştır.

Windows üzerinden `npm run deploy` yeni bir sürüm oluşturur. Her yayında
`previous` bağlantısı önceki sürümü korur. Geri dönüşte önce bu bağlantının
hedefini kontrol edin, ardından `current` bağlantısını atomik olarak değiştirin.
Ayrıntılı kurulum adımları `README.md` dosyasındadır.
