import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const comp = document.createElement("div");
  comp.classList.add("card");

  const comp2 = document.createElement("div");
  comp2.classList.add("headline");
  comp2.textContent = makale.anabaslik;
  comp.append(comp2);

  const author = document.createElement("div");
  author.classList.add("author");

  const imgC = document.createElement("div");
  imgC.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  imgC.append(img);
  author.append(imgC);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + "tarafından";

  author.append(span);

  comp.append(author);

  return comp;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get(`http://localhost:5001/api/makaleler`).then((response) => {
    const data = response.data.makaleler;

    for (let category in data) {
      data[category].forEach((makale) => {
        document.querySelector(secici).append(Card(makale));
      });
    }
  });
};

export { Card, cardEkleyici };
