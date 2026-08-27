# TION Studios Website

TION Studios için React + Vite ile geliştirilen modern kurumsal web sitesi.

## Teknolojiler

- React 19
- Vite 7
- Lucide Icons
- Manrope Variable Font
- Saf CSS animasyonları ve responsive tasarım

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
