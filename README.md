# TION Studios Website

TION Studios için React + Vite ile geliştirilen modern kurumsal web sitesi.

## Teknolojiler

- React 19
- Vite 7
- Lucide Icons
- Archivo Variable (başlık/gövde) + JetBrains Mono Variable (etiket/veri)
- Saf CSS animasyonları ve responsive tasarım

## Tasarım Yönü — "Gece Vardiyası"

Site, stüdyoyu *çalışırken* gösteren koyu bir tasarım yönü kullanır.

| Rol | Token | Değer |
| --- | --- | --- |
| Zemin | `--ink` | `#0B1020` |
| Panel | `--ink-2` | `#121A31` |
| Metin | `--text` | `#E6EDFB` |
| İkincil metin | `--muted` | `#7E8DB0` |
| Vurgu (tek sıcak renk) | `--accent` | `#5CE6A8` |
| Veri rengi | `--cyan` | `#39C2F3` |

Kurallar:

- **Vurgu rengi yalnızca CTA ve durum göstergelerinde** kullanılır; geniş yüzeylerde
  zemin rengi olarak kullanılmaz.
- **`--cyan` yalnızca veri/okuma değerleri** içindir, buton veya bağlantı için değil.
- Tüm renkler token üzerinden verilir; CSS içinde sabit hex değeri bulunmaz.
- Etiketler, sayaçlar ve teknik veriler `--font-mono` ile yazılır.
- Ana sayfadaki `.readout` bileşeni, `src/data/games.js` içindeki gerçek veriden
  beslenir — sabit metin içermez.

Tüm sayfalar WCAG 2.1 AA kontrast eşiğini geçer (normal metin 4.5:1, büyük metin 3:1).

## Açılış Ekranı (Splash)

React yüklenene kadar geçen boş anı kapatmak için her HTML sayfasında satır içi
bir açılış ekranı bulunur (`#tion-splash`).

- CSS **satır içidir** — harici stylesheet ilk kareye yetişemeyeceği için.
- React ilk render'ı tamamlayınca `body.tion-ready` sınıfı eklenir ve ekran solar.
- En az `620ms` görünür kalır; aksi halde hızlı yüklemede göz kırpması gibi görünür.

Güvenlik ağı (ekranın sayfayı kilitlememesi için):

| Katman | Süre | Kapsam |
| --- | --- | --- |
| Normal yol | ~620ms | React render'ı tamamlar |
| Uygulama içi yedek | 4s | Uygulama yüklendi ama render takıldı |
| Satır içi yedek | 8s | Uygulama paketi hiç yüklenmedi |

> Kapatma işlemi yalnızca `requestAnimationFrame`'e bağlanmaz — arka plandaki
> sekmelerde rAF durdurulur ve ekran açık kalırdı. Bu yüzden rAF ile bir zamanlayıcı
> birlikte yarışır.

## Kurulum

```bash
npm install
npm run dev
```

Üretim çıktısı için:

```bash
npm run build
npm run preview
```

Kod kalitesi kontrolü:

```bash
npm run check
```

## Dağıtım

`main` dalına gönderilen değişiklikler `.github/workflows/deploy.yml` üzerinden otomatik olarak derlenir ve GitHub Pages'a aktarılır. Özel alan adı `public/CNAME` içindeki `tionstudios.com` değeriyle korunur.

## Sayfalar

- `/`: Ana sayfa ve seçili çalışmalar
- `/hizmetler/`: Web, mobil, özel yazılım ve oyun geliştirme hizmetleri
- `/oyunlar/`: Yedi TION oyun projesinin tamamı
- `/hakkimizda/`: Stüdyo yaklaşımı ve çalışma süreci
- `/iletisim/`: Proje formu, iletişim bilgileri ve SSS
- `/privacy-policy.html` ve `/terms-of-services.html`: Yasal belgeler

Her URL Vite'ın multi-page build yapısıyla bağımsız bir HTML çıktısı üretir. Böylece doğrudan sayfa ziyaretleri ve GitHub Pages yayını herhangi bir SPA yönlendirme çözümüne ihtiyaç duymaz.

## Yapı

- `src/App.jsx`: Ortak site kabuğu, sayfalar ve paylaşılan bölümler
- `src/data/games.js`: Tüm oyun projelerinin tek veri kaynağı
- `src/LegalPage.jsx`: Gizlilik ve kullanım koşulları görünümü
- `src/styles.css`: Tasarım sistemi ve responsive stiller
- `public/images/projects`: Portföy ve oyun görselleri
- `public/legal`: Korunan mevcut yasal metin kaynakları
- `vite.config.js`: Çok sayfalı üretim girişleri

İletişim formu backend gerektirmez; girilen bilgileri kullanıcının e-posta uygulamasında hazır bir taslağa dönüştürür.

> Yasal metinler önceki TION ürünlerinin kapsamı korunarak modern arayüze taşındı. Yayından önce mevcut veri işleme, ödeme ve uygulama akışlarıyla uyumu için hukuk uzmanı tarafından gözden geçirilmesi önerilir.
