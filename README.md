# React-Native-MusicApp
 ## Projenin Amacı
 Use state, flatlist component ve SearchBar yapısını pratik etmek için yapılmış bir projedir.
 ### Flatlist Component nedir?
 Yoğun bir şekilde veri kullanmak istediğimizde rahat bir kullanıcı deneyimi sunmamızı sağlayan kullanıcı ne kadarını görücekse o kadarını ekrana basan ve ihtiyacımız olmayan veriyi telefona yüklemeyen ve belleği yormayan, telefonu yukarı kaydırdığınızda veriyi bellekten kaldıran bir componenttir.Birçok prop'u bulunmakta fakat projede kullandığım proplar
 - **renderItem** : Bir callback functiondır.Ekrana basılacak data’ları gönderir. Arrow function şeklinde yazılır. Her bir veri görüntüleneceği zaman tetiklenen bir fonksiyondur. Öncelikle parantez içinde neyi göstermesini istediğini tanımlarız item gibi ve item olarak koyduğumuz tüm veriyi teker teker geri döndürür. => ok işaretinden sonraki kısımda nasıl geri dönmesini istiyorsak onu ifade ederiz.
 - **data** : Array’in gönderildiği parametredir.
 - **keyExtractor** : Listemizde dönen her item’a id atar ve her şeyi bir id’de tutar, böylece kafa karışıklığını kaldırır. Öğelerin tamamına bir key verir. Bu key’leri kullanmayacağız ama arkaplanda görmediğimiz öğeleri kaldırırken FlatList component’i bu verilere key’lerle erişir ve onları kaldırır. Eğer key vermezsek bu kaldırma işlemini yapamaz ve belleğe çok yük biner.
 - **ItemSeparatorComponent** : Liste elemanlarının arasına görsel bir öğe eklemek için kullanılır. En başa ve En sona eklemez. Bu uygulamada şarkı aralarındaki çizgiler bu propla yapıldı.
### Use State nedir?
 Özel bir fonksiyondur. Değişiklik güncelleme işlerinde kullanılır. Değişikliği componente bildirip , yeni değerler ile kendini yeniden derler.
 #### Benim bu değişkenim ileride DEĞİŞİKLİK gösterecek mi ?
 - **Cevabımız EVET ise kullanmamamız gereken fonksiyon USESTATE dir.**
 
 <img src ="https://i.hizliresim.com/lxcfqr2.png" />
  <img src ="https://i.hizliresim.com/qgwlqzm.png" />
   <img src ="https://i.hizliresim.com/411t2kv.png" />
