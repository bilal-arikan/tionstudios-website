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

## Yapı

- `src/App.jsx`: Ana kurumsal sayfa ve bölümler
- `src/LegalPage.jsx`: Gizlilik ve kullanım koşulları görünümü
- `src/styles.css`: Tasarım sistemi ve responsive stiller
- `public/images/projects`: Portföy görselleri
- `public/legal`: Korunan mevcut yasal metin kaynakları

İletişim formu backend gerektirmez; girilen bilgileri kullanıcının e-posta uygulamasında hazır bir taslağa dönüştürür.

> Yasal metinler önceki TION ürünlerinin kapsamı korunarak modern arayüze taşındı. Yayından önce mevcut veri işleme, ödeme ve uygulama akışlarıyla uyumu için hukuk uzmanı tarafından gözden geçirilmesi önerilir.
