
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

var headerNavbarContent = document.querySelector(".header__navbar__content");
headerNavbarContent.style.transform = "translateY(-70px)";

tl.to(".header__navbar__content", { y: "0%", duration: 1.5 });
tl.fromTo('.container__introduction__container', { opacity: 0 }, { opacity: 1, duration: 2 }, "-=0.7");

let counterBackground = 0;    

var carouselBackground = setInterval(function() {
  if(counterBackground == 0) {
    tl.fromTo('.container__introduction--second', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction--third', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground ++;
  } else if(counterBackground == 1) {
    tl.fromTo('.container__introduction', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction--second', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground ++;
  } else if(counterBackground == 2) {
    tl.fromTo('.container__introduction--third', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground ++;
  } else if(counterBackground == 3) {
    tl.fromTo('.container__introduction--second', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction--third', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground ++;
  } else if(counterBackground == 4) {
    tl.fromTo('.container__introduction', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction--second', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground ++;
  }  else if(counterBackground == 5) {
    tl.fromTo('.container__introduction--third', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.container__introduction', { opacity: 1 }, { opacity: 0, duration: 1 });
    counterBackground = 0;
  }  
}, 5000);

// tl.to('.container__introduction--third', { opacity: 1, duration: 1 }, "-=3");
// tl.from('.container__introduction--third', { opacity: 1, duration: 1 }, "+=3");

// setInterval(() => {
//   tl.to('.container__introduction--third', { opacity: 1, duration: 1 }, "-=5");
//   tl.to('.container__introduction--third', { opacity: 0, duration: 1 }, "+=5");
//   tl.to('.container__introduction--second', { opacity: 1, duration: 1 }, "-=5");
//   tl.to('.container__introduction--second', { opacity: 0, duration: 1 }, "+=5");
//   tl.to('.container__introduction', { opacity: 1, duration: 1 }, "-=5");
//   tl.to('.container__introduction', { opacity: 0, duration: 1 }, "+=5");
// }, 5000);

// setInterval(() => {
//   tl.from('.container__introduction', { opacity: 0, duration: 1 });
//   tl.from('.container__introduction--second', { opacity: 0, duration: 1 });
//   tl.from('.container__introduction--third', { opacity: 0, duration: 1 });
// }, 5000);


// var listNewProducts = document.getElementById("list-new-products");

// listNewProducts.onload = function(e) {
//   e.preventDefault();
  
//   if(localStorage.getItem("phone") != null) {
//     phone = JSON.parse(localStorage.getItem("listProducts"));  
//     var showProducts = formatArray(phone);
//     document.getElementById("list-new-products").innerHTML = showProducts.join("");
//   }
// }
var count=0;
function listProducts() {
  if(localStorage.getItem("phone") != null) {
    phone = JSON.parse(localStorage.getItem("phone"));  
    
    var k = 0;
    for(var i = 0; i < listNewProducts(phone).length; i++) {
      if(listNewProducts(phone)[i] != undefined) {
        k++;
        document.getElementById("list-new-products").innerHTML += listNewProducts(phone)[i];
        if(k == 4) break;
      }
    }

    k = 0;
    for(var i = 0; i < listBestSellers(phone).length; i++) {
      if(listBestSellers(phone)[i] != undefined) {
        k++;
        document.getElementById("list-best-sellers").innerHTML += listBestSellers(phone)[i];
        if(k == 4) break;
      }
    }
  }

  var currentUser = JSON.parse(localStorage.getItem("currentUser"))
  if(currentUser){
       document.getElementById("dropUser").textContent = currentUser.name 
       document.getElementById("dropUser").style.display = "block"
       document.getElementById("login").style.display = "none"
  }
  else{
     document.getElementById("dropUser").style.display = "none"
     document.getElementById("login").style.display = "block"
     document.getElementById("length-Cart").style.display = "none";
  }
  if(currentUser != null){
    if (localStorage.getItem("cart") != null) {
      cart = JSON.parse(localStorage.getItem("cart"));
      for(i = 0;i<cart.length;i++){
        if(cart[i].userName == currentUser.username) {
          count ++;
          document.getElementById("length-Cart").style.display = "block";
        };
    }
    if(count==0){
      document.getElementById("length-Cart").style.display = "none";
    }else document.getElementById("length-Cart").innerHTML = count;
  }
  }
}

function listNewProducts(phone) {
  var renderProducts = phone.map((element, index) => {
    if(element.genre == "New product") {
      return `
        <div class="col l-3">
          <div class="container__homepage__product">
            <a href="Detail-product.html?id=${element.id}">
              <div class="container__homepage__product__img"
                style="background-image: url(${element.image})">
              </div>
            </a>
            <div class="container__homepage__content">
              <div class="container__homepage__product__name">${element.name}</div>
              <div class="container__homepage__product__price">
                <div class="container__homepage__product__price-discount">${element.price}đ</div>
                <div class="container__homepage__product__price-origin">${element.oldPrice}đ</div>
              </div>
              <div class="container__homepage__product__rating">
                <div class="container__homepage__product__star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="container__homepage__product__review">25 Review</div>
              </div>
              <div class="container__homepage__product__function" onclick="addCart(${element.id})">
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
            <div class="container__homepage__installment">Installment 0%</div>
          </div>
        </div>
      `;
    }
  });
  return renderProducts;
}

function listBestSellers(phone) {
  var renderProducts = phone.map((element, index) => {
    if(element.genre == "Best seller") {
      return `
        <div class="col l-3">
          <div class="container__homepage__product">
            <a href="Detail-product.html?id=${element.id}">
              <div class="container__homepage__product__img"
                style="background-image: url(${element.image})">
              </div>
            </a>
            <div class="container__homepage__content">
              <div class="container__homepage__product__name">${element.name}</div>
              <div class="container__homepage__product__price">
                <div class="container__homepage__product__price-discount">${element.price}đ</div>
                <div class="container__homepage__product__price-origin">${element.oldPrice}đ</div>
              </div>
              <div class="container__homepage__product__rating">
                <div class="container__homepage__product__star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="container__homepage__product__review">25 Review</div>
              </div>
              <div class="container__homepage__product__function" onclick="addCart(${element.id})">
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
            <div class="container__homepage__installment">Installment 0%</div>
          </div>
        </div>
      `;
    }
  });
  return renderProducts;
}
function addCart(id){
  if(localStorage.getItem("currentUser")!=null){
      var quantity = 1;
  var  product;
  var cond;
  if (localStorage.getItem("phone") != null) {
      phone = JSON.parse(localStorage.getItem("phone"));
  }
  if (localStorage.getItem("currentUser") != null) {
      currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  if(localStorage.getItem("cart") != null) {
      cart = JSON.parse(localStorage.getItem("cart"));  
      
    } else{
        var cart = [];
    }

  for ( i = 0; i < phone.length; i++) {
      if(phone[i].id == id){
          phone[i].amount -= quantity;
          product = phone[i];
          product.amount = quantity;
      }
  }
  if(cart.length<0){
      cart.push({
          id: cart.length+1,
          userName: currentUser.username,
          product: product,
          quantity: quantity,
      });
  }else{
      for ( i = 0; i < cart.length; i++) {
          if(cart[i].product["id"] == product.id){
              cart[i].quantity += quantity;
              cond=true;
          }
      }
      if(!cond){
          cart.push({
              id: cart.length+1,
              userName: currentUser.username,
              product: product,
              quantity: quantity,
          });
      }
  }
  localStorage.setItem("phone",JSON.stringify(phone));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Da them san pham vao gio hang")
  }else{
      alert("Moi ban dang nhap")
  }
  
}

// danh thêm 
function logOut(){
  localStorage.removeItem("currentUser")
  window.onload()
}























