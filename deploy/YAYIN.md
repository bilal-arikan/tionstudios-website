# Tionport yayını ve geri alma

17 Ekim 2026 ek proje yayını tamamlandı. Site Caddy ile VPS'de
sunulur; GitHub Actions yalnız kontrol ve paket üretir. Aşağıdaki DNS ve
altyapı denetim notları, aksi belirtilmedikçe 10 Eylül 2026 kontrolüne aittir.

## Sunucu ve domain

17 Ekim 2026: Bedenden Beyne ve Afyon Cimnastik ürün kartları ve ayrı tanıtım
sayfaları eklendi. Afyon Cimnastik'in site, veli ve eğitmen bağlantıları ayrı
gösteriliyor; ürün listesi toplam sekiz kart içeriyor. `20261017-001946`
sürümü yayınlandı; önceki sürüm `20261009-020626` korunuyor.
`npm run check` başarılı (4 test, 114 yerelleştirilmiş sayfa ve 116 site haritası
URL'si). İki ürünün altı dildeki 12 yeni adresi ile Türkçe/İngilizce ana
sayfalar HTTPS üzerinden 200 yanıtı verdi; canonical adresleri ve güncel JS
bağlantısı doğrulandı. Canlı ana JS/CSS SHA-256 değerleri yerel derlemeyle eşleşti.
Canlı tarayıcıda sekiz kart, iki yeni tanıtım sayfası ve dört resmi bağlantı
doğrulandı. Masaüstünde ve 390 piksel mobil görünümde yatay taşma görülmedi.

9 Ekim 2026 Product gezinmesi: Navbar ve footer bağlantısı Games yerine
Product olarak düzenlendi; ortak ürün/oyun detaylarının geri bağlantıları
ve eski Games adresleri ürün bölümüne (`#projects`) gider. Ürün bölümü başlığı
Our products olarak güncellendi. `20261009-020626` yayınlandı; önceki sürüm
`20261009-015659` korunuyor. `npm run check` başarılı; altı dilin navbar/footer
Product bağlantıları ve eski adreslerin ürün bölümüne yönlendirmesi doğrulandı.
Canlı ana sayfa ve oyun detayında Product navbar/footer/geri bağlantıları,
eski Games yönlendirmesi ve 390 piksel mobil menüden ürün bölümüne kaydırma
doğrulandı. Canlı ana JS/CSS SHA-256 değerleri yerel derlemeyle eşleşti.

9 Ekim 2026 tanıtım sayfaları yayını: Ana sayfa yedi oyunun tamamını gösteriyor;
altı ürün ve yedi oyunun kendi tanıtım sayfası var. Real Driver kampanyası
korundu; diğer tanıtımlar ortak şablonla oluşturuldu. Ayrı Games kataloğu
kaldırıldı; eski altı Games adresi dilin ana sayfasındaki `#projeler` bölümüne
HTML yönlendirmesi yapıyor ve site haritasından çıkarıldı. Yeni sürüm
`20261009-015659`, önceki sürüm `20261009-013609`.

`npm run check` başarılı (4 test, 102 yerelleştirilmiş sayfa, 104 site haritası
URL'si). Genel HTTPS üzerinden 102 sayfanın 200 yanıtı, canonical adresi ve
güncel JS bağlantısı; altı eski Games yönlendirmesi ve ana JS/CSS dosyalarının
yerel derlemeyle SHA-256 eşleşmesi doğrulandı. Yerel tarayıcıda 12 yeni
detay sayfası, dil seçimi, görseller, klavye bağlantıları ve 390 piksel mobil
düzen kontrol edildi. Detaydan ana sayfanın bölümüne dönüşteki kaydırma sorunu
düzeltildi; masaüstü/mobil geri dönüş ve eski Games yönlendirmesi yeniden geçti.
Canlı tarayıcıda altı ürün/yedi oyun, TionAds ve Sea Treasure detayları,
bölüme geri dönüş ve eski Games yönlendirmesi doğrulandı. Ana sayfa ve
detaylarda 390 piksel mobil görünümde yatay taşma görülmedi.

9 Ekim 2026 ek proje yayını: Duomsy ve Tevapp site/uygulama bağlantılarıyla,
Farkindayim ise `farkindayim.tr` bağlantısıyla `20261009-013609` sürümüne
eklendi. Proje listesi toplam altı kart ve on iki bağlantı içeriyor; önceki
sürüm `20261009-013113` korunuyor. `npm run check` başarılı (4 test, 36
yerelleştirilmiş sayfa). Türkçe ve İngilizce ana sayfa genel HTTPS üzerinden
200 yanıtı verdi; canlı ana JS/CSS SHA-256 değerleri yerel derlemeyle eşleşti.
Canlı tarayıcıda altı kart ve on iki bağlantı doğrulandı; masaüstünde üç
sütun/iki satır, 390 piksel mobil görünümde tek sütun ve taşmasız düzen
gözlendi. Oyun bölümü korunuyor.

9 Ekim 2026: Ana sayfadaki hizmetler bölümü kaldırıldı; Tionads, Solsty ve
Namesight için üç proje kartı ve toplam yedi bağlantı `20261009-013113`
sürümüyle yayınlandı. Solsty uygulama adresleri `app.solsty.net` ve
`astro.solsty.net` olarak kullanıldı. Önceki sürüm `20260928-231717` korunuyor.
`npm run check` başarılı (4 test, 36 yerelleştirilmiş sayfa); altı dilde yeni
kartlar, bağlantılar, kaydırma hedefi ve oyun bölümünün korunması ayrıca
doğrulandı. Türkçe, İngilizce ve Arapça ana sayfalar genel HTTPS üzerinden
200 yanıtı verdi; canlı ana JS/CSS dosyalarının SHA-256 değerleri yerel
derlemeyle birebir eşleşti. Yerel ve canlı tarayıcı kontrollerinde masaüstü/mobil
düzen, üç kart, yedi bağlantı, kaydırma hedefi ve oyun bölümünün korunması
doğrulandı; yatay taşma görülmedi. Harici proje hedeflerinde hesap oturumu açılmadı.

28 Eylül 2026: Real Driver tanıtım sayfası, fragman, galeri ve optimize edilmiş
oyun görselleri `20260928-231717` sürümüyle yayınlandı. Önceki sürüm
`20260912-003020` korunuyor. `npm run check` başarılı (4 test, 36 yerelleştirilmiş
sayfa). Genel HTTPS üzerinden ana sayfa, Türkçe/İngilizce Real Driver adresleri
ve ana JS/CSS dosyaları doğrulandı; ana JS/CSS ve 14 WebP görsel yerel yayınla
birebir eşleşti. DNS ve Caddy ayarları değiştirilmedi.

| Bilgi | Değer |
| --- | --- |
| Ana adres | [tionport.com](https://tionport.com/) |
| Yönlendirmeler | `www.tionport.com`, `tionstudios.com`, `www.tionstudios.com` → ana adres |
| Yönetim | SSH takma adı `myhermes`; Tailscale `100.101.118.70` |
| Public IP | `212.108.107.194` |
| Yayın kökü | `/var/www/tionport/current` |
| Güncel sürüm | `/var/www/tionport/releases/20261017-001946` |
| Önceki sürüm | `/var/www/tionport/releases/20261009-020626` |
| Gelen paketler | `/home/hermes/tionport-incoming` |
| Caddy | `myhermes-caddy`; `/home/hermes/stack/caddy/Caddyfile` |
| Kaynak depo | [tionstudios-website](https://github.com/bilal-arikan/tionstudios-website), `main` |

Ad sunucuları `desiree.ns.cloudflare.com` ve `rex.ns.cloudflare.com` olarak
DNS sorgusuyla doğrulandı. Registrar Squarespace, Cloudflare proxy,
Full (Strict), DNSSEC ve Google posta kayıtlarının korunması önceki geçiş
notlarında kayıtlıdır; bu denetimde yönetim panelleri yeniden kontrol edilmedi.
DNS/posta değişikliği yapılmadı. Caddy yapılandırması HTTPS ve 308 yönlendirmeyi tanımlar.

SSH özel anahtarı yerel SSH yapılandırmasından kullanılır; depoya konmaz.
DNS yetkisi Cloudflare, registrar yetkisi Squarespace hesap sahibinden alınır.
Normal dosya yayını Cloudflare tokeni gerektirmez.

## Doğrulama ve yayın

Windows PowerShell, site klasöründe:

```powershell
npm run deploy
```

`scripts/deploy.ps1`, önce `npm run check` çalıştırır. Başarılı `dist/` paketini
SCP ile taşır ve `deploy/release.sh` betiğini SSH üzerinden çalıştırır. Her
sürüm ayrı klasöre açılır; `current` atomik değiştirilir, eski hedef `previous`
olur. Önceki hash'li varlıklar yeni sürüme kopyalanır; açık sekmeler korunur.

İlk kurulum veya Caddy bölümünün güncellenmesi için:

```powershell
ssh myhermes 'mkdir -p /home/hermes/tionport-incoming'
scp deploy/Caddyfile deploy/install-caddy.sh myhermes:/home/hermes/tionport-incoming/
ssh myhermes 'sudo bash /home/hermes/tionport-incoming/install-caddy.sh'
```

Kurucu yalnız `BEGIN TIONPORT WEBSITE` / `END TIONPORT WEBSITE` bölümünü
birleştirir; Caddy dosyasının inode'unu korur, yedekler, doğrular ve reload yapar.
Hata halinde önceki yapılandırmayı geri koyar. Ortak dosyada sonraki değişiklikler
varsa eski Caddy yedeğinin tamamını körlemesine geri yüklemeyin.

## Geri alma

Önce `current` ve `previous` hedeflerini kontrol edin. Aşağıdaki Bash komutları
VPS'de yetkili SSH oturumunda çalıştırılır; önceki sürümü silmez.

```bash
root=/var/www/tionport
readlink "$root/current"
target=$(readlink -f "$root/previous")
case "$target" in "$root/releases/"*) ;; *) echo 'Invalid rollback target'; exit 1 ;; esac
test -s "$target/index.html" || exit 1
sudo ln -sfn "$target" "$root/current.next"
sudo mv -Tf "$root/current.next" "$root/current"
curl --fail https://tionport.com/
```

Sonrasında farklı dil sayfası, yasal belge, görsel ve 404'ü kontrol edin.
`previous` geri alma sonrası otomatik tersine çevrilmez; yeniden ileri gitmek
isterseniz başlangıçta kaydettiğiniz sürüm hedefini kullanın. Site statiktir,
veritabanı geri dönüşü yoktur. Geri alma bu denetimde uygulanmadı.

## CI ve güncel kanıt

12 Eylül 2026, 00:34 TRT yayın kontrolü: `npm run check` başarılı; 30 dil/sayfa
adresinin canlı HTML içeriği yerel derlemeyle birebir eşleşti. Ana JavaScript
dosyaları ve temizlenen paylaşım görselleri de canlıdan hash ile doğrulandı.
Yasal belge kaynakları sunucuda yerel dosyalarla eşleşiyor; Cloudflare genel
HTTP yanıtında kurumsal e-postaları maskeliyor ve `robots.txt` başına kendi
kurallarını ekliyor. İletişim sayfası yeni tarayıcı sekmesinde doğrulandı;
gerçek hesap kontrolü yapılmadı.

Bu kişisel bilgi temizliği yayınında, mevcut yayın betiğinin önceki hash'li
varlıkları kopyalayan adımı tek seferlik atlandı. Önceki on ana JavaScript
adresinin genel erişimde 404 verdiği doğrulandı. Önceki sürüm geri alma için
saklanıyor; geri alınması kaldırılan konum bilgilerini yeniden yayımlar.

`.github/workflows/check.yml`: `main` push, pull request ve manuel tetikleme;
Ubuntu, Node 22, `npm ci`, `npm run check`, ardından `dist` artifact'i.
VPS'ye otomatik dağıtım adımı yoktur.

Denetimin başlangıç commit'i `1d6740458b57cc9f7ee007f4aafde494f9d09b3b` için
[Validate website çalışması](https://github.com/bilal-arikan/tionstudios-website/actions/runs/34410492682)
başarılıdır. Bu sonuç, sonraki yerel belge temizliğinin uzak CI sonucu değildir.
Yerel temizlik sonrası kontroller [ortak denetim kaydındadır](../../tion-dashboard/docs/DENETIM.md).

10 Eylül salt okunur HTTP kontrolleri: ana sayfa ve İngilizce hizmetler 200,
bulunmayan adres 404; `www.tionport.com` ve `tionstudios.com` yol/sorguyu koruyan
308 yanıtı verdi. Güncel/önceki sürüm symlink'leri SSH ile doğrulandı. Yeni
oturumlu tarayıcı veya bütün dil yollarının canlı taraması yapılmadı.

Önceki Caddy yedeği `/home/hermes/stack/caddy/Caddyfile.before-tionport-20260909-192845`,
önceki yerel başlangıç yedeği `C:/Users/Bilal/.codex/backups/tionport-20260909`
olarak kayıtlıdır; bu ikisinin içeriği yeniden doğrulanmadı.
