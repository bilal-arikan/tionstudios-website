# Real Driver görselleri

Sayfa gerçek proje ve App Store görüntülerini kullanır; AI görseli yoktur.

## Optimize edilmiş görüntüler

Kaynak klasör:
`K:\Diğer bilgisayarlar\Dizüstü Bilgisayarım\TASARIM\MasterDriver_ LegendsOfTheCity\AppStore_SS`

| WebP dosya öneki | Kaynak | Kullanım |
| --- | --- | --- |
| `lineup` | `ss1_2.jpg` | Video önizlemesi |
| `street-coupe` | `ss5_2.jpg` | Your Rules bölümü ve şehir galerisi |
| `online` | `ss6_2.jpg` | Çevrimiçi sürüş galerisi |
| `race` | `ss7_2.jpg` | Yarış galerisi |
| `scenic` | `ss8_2.jpg` | The scenic route |
| `cockpit` | `ss9_2.jpg` | Kokpit galerisi |
| `tuning` | `ss13_2.jpg` | Araç mağazası galerisi |

Her kaynağın `-1600.webp` (1600×900, kalite 82) ve `-800.webp`
(800×450, kalite 78) sürümü vardır. Pillow/Lanczos ile oran korunarak
küçültülmüş, WebP `method=6` ile kodlanmıştır. Kırpma veya renk müdahalesi
yapılmamış, K: sürücüsündeki orijinaller değiştirilmemiştir.

Seçilen yedi orijinalin toplamı 4.468.184 bayttır. Büyük WebP seti
832.856 bayt (%81,4 daha küçük), küçük set 268.798 bayt (%94,0 daha küçük).
Her iki setin diskteki toplamı 1.101.654 bayttır. Bunlar dosya boyutu
karşılaştırmalarıdır; gerçek indirme miktarı ekran genişliğine, piksel
yoğunluğuna, kaydırmaya ve önbelleğe bağlıdır.

`src/data/realDriverImages.js` görsel bilgilerini ve `srcSet`/`sizes`
ayarlarını tutar. Sayfa görselleri geç yüklenir; büyütülen galeri görseli
1600 piksel sürümünü kullanır. Galeri ve Your Rules görsellerinde
`height: auto` doğal 16:9 oranını korur.

## Diğer kaynaklar

- `city.jpg`: RacingTemplate içindeki
  `Assets/_Main/Sprites/Resources/SS/2.jpg` dosyasının değiştirilmemiş kopyası;
  sürüş modları bölümünde kullanılır.
- `/images/projects/real-driver.jpg`: Sitede önceden bulunan açılış görseli;
  RacingTemplate `Assets/_Main/Sprites/Resources/SS/1.jpg` ile aynı sahne.

Önceki Google Play kopyaları (`city-driving.webp`, `garage-store.webp`,
`drift.webp`) yeni seçkiyle değiştirilerek kaldırıldı. Mağaza görüntüleri
farklı sürümlere ait arayüzleri gösterebilir. Bağlı olmayan Drag modunu
gösteren eski Campaign görseli kullanılmadı.
