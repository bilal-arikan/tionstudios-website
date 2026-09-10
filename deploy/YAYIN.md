# Tionport yayını ve geri alma

10 Eylül 2026 kontrolü. Site Caddy ile VPS'de sunulur; GitHub Actions yalnız
kontrol ve paket üretir. Bu denetimde yeni yayın yapılmadı.

## Sunucu ve domain

| Bilgi | Değer |
| --- | --- |
| Ana adres | [tionport.com](https://tionport.com/) |
| Yönlendirmeler | `www.tionport.com`, `tionstudios.com`, `www.tionstudios.com` → ana adres |
| Yönetim | SSH takma adı `myhermes`; Tailscale `100.101.118.70` |
| Public IP | `212.108.107.194` |
| Yayın kökü | `/var/www/tionport/current` |
| Güncel sürüm | `/var/www/tionport/releases/20260910-010450` |
| Önceki sürüm | `/var/www/tionport/releases/20260910-004540` |
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

`.github/workflows/check.yml`: `main` push, pull request ve manuel tetikleme;
Ubuntu, Node 22, `npm ci`, `npm run check`, ardından `dist` artifact'i.
VPS'ye otomatik dağıtım adımı yoktur.

Denetimin başlangıç commit'i `1d6740458b57cc9f7ee007f4aafde494f9d09b3b` için
[Validate website çalışması](https://github.com/bilal-arikan/tionstudios-website/actions/runs/34410492682)
başarılıdır. Bu sonuç, sonraki yerel belge temizliğinin uzak CI sonucu değildir.
Yerel temizlik sonrası kontroller [ortak denetim kaydındadır](../../tion-dashboard/docs/DENETIM.md).

Güncel salt okunur HTTP kontrolleri: ana sayfa ve İngilizce hizmetler 200,
bulunmayan adres 404; `www.tionport.com` ve `tionstudios.com` yol/sorguyu koruyan
308 yanıtı verdi. Güncel/önceki sürüm symlink'leri SSH ile doğrulandı. Yeni
oturumlu tarayıcı veya bütün dil yollarının canlı taraması yapılmadı.

Önceki Caddy yedeği `/home/hermes/stack/caddy/Caddyfile.before-tionport-20260909-192845`,
önceki yerel başlangıç yedeği `C:/Users/Bilal/.codex/backups/tionport-20260909`
olarak kayıtlıdır; bu ikisinin içeriği yeniden doğrulanmadı.
