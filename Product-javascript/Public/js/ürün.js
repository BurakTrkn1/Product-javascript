addEventListener("DOMContentLoaded", event => {});

let products = [
  {
    id: 1,
    name: "Monitör",
    details:
      "Asus VP249QGR 23.8 144Hz 1ms (Analog+Display+HDMI) FreeSync Full HD IPS Monitör",
    piece: 0,

    price: "3.699.00 TL",
    img: "Asus.jpg",
  },
  {
    id: 2,
    name: "Monitör",
    details:
      "ViewSonic VX2458-C-mhd 23.6 144Hz 1ms (HDMI+Display+DVI) FreeSync/GSync FHD Curved Oyuncu Monitör",
    piece: 0,

    price: "5.400,00 TL",
    img: "view.jpg",
  },
  {
    id: 3,
    name: "Monitör",
    details:
      "Samsung Odyssey G3 24” 1Ms 144Hz Freesync Çerçevesiz VA Panel (DP + HDMI, PİVOT) Full Hd Gaming Monitör LS24AG300NUXUF",
    piece: 0,

    price: "3.548,99 TL",
    img: "samsung.jpg",
  },
  {
    id: 4,
    name: "Monitör",
    details:
      "Asus TUF Gaming VG247Q1A 23,8 Va FreeSync 1920X1080 165Hz 1ms(mprt) Monitör",
    piece: 0,

    price: "3.199,00 TL",
    img: "Tuf.jpg",
  },

  {
    id: 5,
    name: "Monitör",
    details:
      "Casper Excalibur E27QHD-G 27 144Hz 1ms (HDMI+Display) FreeSync + G-Sync 2K QHD LED Monitör",
    piece: 0,

    price: "5.499,00 TL",
    img: "EXCALİ.jpg",
  },
  {
    id: 6,
    name: "Monitör",
    details:
      "Gamebooster GB-327LCQ-H 32'' 165Hz 1ms Curved Freesync 2k Qhd Gaming Monitör",
    piece: 0,

    price: "5.598,99 TL",
    img: "gamebooster.jpg",
  },
  {
    id: 7,
    name: "Monitör",
    details:
      "MSI Optix G24C6 23.6 144Hz 1ms (2xHDMI+Display) FreeSync Premium Full HD Curved Oyuncu Monitör",
    piece: 0,

    price: "3.999,00 TL",
    img: "MSİ.jpg",
  },
  {
    id: 8,
    name: "Monitör",
    details:
      "AOC C27G2ZE/BK 27 240Hz 0.5 ms (HDMI+Display) FreeSync Full HD Curved LED Monitör",
    piece: 0,
    price: "6.625,00 TL",
    img: "AOC.jpg",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  //ürünlerimi dönücem
  products.forEach(val => {
    //yeni bi değişken oluşturdum
    //   class="col-md-12  mb-5 ms-md-2"
    let prod = `
      <div class="col-md-12 mb-5 ms-md-2"   style="width:20rem; margin-top: 2rem
      
      ;">
      <div class="row">
          <div  class="card" id="pro-${val.id}" >
              <img src="/img/${val.img}" class="card-img-top" alt="">
              <hr>
              <div class="card-body">
                  <h5 class="card-title" id="0">
                   ${val.name}
                  </h5>
                  <p class="card-text">${val.details}</p>
                  <p class="card-price" style="color:red; font-size: 1.5rem;" name="price">${val.price}</p>
                  <button type="button" class="btn btn-primary" onclick="add(event,${val.id})" name="1">Ekle</button>
                  <button type="button" class="btn btn-primary" onclick="productedit(event,${val.id})" name="4" style="margin-left: 55%;">Edit</button>
              </div>
          </div>

`;

    document.getElementById("product").insertAdjacentHTML("beforeend", prod);
  });
});
let totalprice = 0;
let basket = [];
let idd = 0;
function add(event, id) {
  document.getElementById("tota").style.display = "block";
  document.getElementById("buy").style.display = "block";
  products.forEach(val => {
    if (val.id == id) {
      val.piece++;

      let dvh = document.getElementById(`basket-${val.id}`);

      if (dvh == null) {
        let newTable = `<tr id="basket-${val.id}">
                              <td class="name">${val.name}</td>
                              <td class="detail">${val.details}</td>
                              <td class="amount">${val.piece}</td>
                              <td class="money">${val.price}</td>
                              <td><button class="btn btn-danger" onclick="removeProduct(event,${id})">Sepetten Çıkar</button></td>
                           </tr>`;
        document
          .getElementById("table-product")
          .insertAdjacentHTML("beforeend", newTable);
      } else {
        dvh.getElementsByClassName("amount")[0].innerHTML =
          parseInt(dvh.getElementsByClassName("amount")[0].innerHTML) + 1;
        dvh.getElementsByClassName("money")[0].innerHTML = totalprice =
          val.piece * parseFloat(val.price);
        console.log(val.price);
        console.log(val.piece);
        console.log(val.piece * parseFloat(val.price));

        document.getElementsByClassName("total")[0].innerHTML = totalprice;
      }
    }
  });
}
function addproduct(event) {
  let product = document.getElementById("input-ürün").value;
  let detail = document.getElementById("input-detay").value;
  let price = document.getElementById("input-tutar").value;
  const img = document.getElementById("imgOut").getAttribute("src");
  let productss = {
    id: idd,
    ürün: product,
    detay: detail,
    tutar: price,
    img: img,
  };
  products.push(productss);
  idd++;
  let pro = `
      <div class="col-md-12 mb-5 ms-md-2"   style="width:20rem; margin-top: 2rem
      
      ;">
      <div class="row">
          <div  class="card"id="${products.id} >
              <img src="/img/" class="card-img-top" alt="">
              <hr>
              <div class="card-body">
                  <h5 class="card-title" id="0">
                   ${productss.ürün}
                  </h5>
                  <p class="card-text">${productss.detay}</p>
                  <p class="card-text" style="color:red; font-size: 1.5rem;" name="price">${productss.tutar}</p>
                  <button type="button" class="btn btn-primary" onclick="add(event,${productss.idd})" name="1">Ekle</button>
                  <button type="button" class="btn btn-primary" onclick="productedit(event,${productss.idd})" name="4" style="margin-left: 55%;">Edit</button>
              </div>
          </div>

`;
  document.getElementById("product").insertAdjacentHTML("beforeend", pro);
  console.log(products);
}
function productedit(event, id) {
  let pros = products.filter(product => product.id == id);
  document.getElementById("input-ürün").value = pros[0].name;
  document.getElementById("input-detay").value = pros[0].details;
  document.getElementById("input-tutar").value = pros[0].price;
  document.getElementById("process").innerHTML = "Edit";
  document
    .getElementById("process")

    .setAttribute("onclick", "javascript: productupdate(event," + id + ")");
  const mymodal = new bootstrap.Modal("#modal", {
    keyboard: false,
  });
  mymodal.show("modal");
}
function productupdate(event, id) {
  products.forEach(product => {
    if (product.id == id) {
      product.name = document.getElementById("input-ürün").value;
      product.details = document.getElementById("input-detay").value;
      product.price = document.getElementById("input-tutar").value;
      let tr = document.getElementById(`basket-${id}`);
      if (tr != undefined) {
        tr.getElementsByClassName("name")[0].innerHTML = product.name;
        tr.getElementsByClassName("price")[0].innerHTML =
          parseInt(product.price) *
          parseInt(tr.getElementsByClassName("amount")[0].innerHTML);
      }
      let card = document.getElementById(`pro-${product.id}`);
      console.log(product.id);
      console.log(card);
      card.getElementsByClassName("card-title")[0].innerHTML = product.name;
      card.getElementsByClassName("card-text")[0].innerHTML = product.details;
      card.getElementsByClassName("card-price")[0].innerHTML = product.price;
    }
  });
}
function removeProduct(event, id) {
  document.getElementById("tota").style.display = "none";
  event.target.closest("tr").remove();
  basket = basket.filter(product => product.id != id);
}
function home(event) {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("prods").style.display = "block";
  console.log("geldi");
}
function baskets(event) {
  document.getElementById("main-container").style.display = "block";
  document.getElementById("prods").style.display = "none";
}
function buy(event) {
  basket = [];
  document.getElementById("table-product").style.display = "none";
  document.getElementById("tota").style.display = "none";
  document.getElementById("sat").style.display = "block";
}
const fileIn = document.getElementById("imgInp");
const readUrl = event => {
  const fileOut = document.getElementById("imgOut");
  if (event.files && event.files[0]) {
    let reader = new FileReader();
    reader.onload = event => (fileOut.src = event.target.result);
    reader.readAsDataURL(event.files[0]);
  }
};
fileIn.onchange = function () {
  readUrl(this);
};
