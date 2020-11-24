
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

function listProducts() {
  if(localStorage.getItem("phone") != null) {
    phone = JSON.parse(localStorage.getItem("phone"));  
    document.getElementById("list-new-products").innerHTML = listNewProducts(phone).join("");
    document.getElementById("list-best-sellers").innerHTML = listBestSellers(phone).join("");
  }
  if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("length-Cart").innerHTML = cart.length;
  }
  if(cart.length<1){
    document.getElementById("length-Cart").style.display = "none";
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
  } 
}

function listNewProducts(phone) {
  var renderProducts = phone.map((element, index) => {
    if(element.genre == "New product") {
      return `
        <div class="col l-3">
          <a href="Detail-product.html?id=${element.id}" class="container__homepage__product">
            <div class="container__homepage__product__img"
              style="background-image: url(${element.image})">
            </div>
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
              <div class="container__homepage__product__function">
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
            <div class="container__homepage__installment">Installment 0%</div>
          </a>
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
          <a href="Detail-product.html?id=${element.id}" class="container__homepage__product">
            <div class="container__homepage__product__img"
              style="background-image: url(${element.image})">
            </div>
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
              <div class="container__homepage__product__function">
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
            <div class="container__homepage__installment">Installment 0%</div>
          </a>
        </div>
      `;
    }
  });
  return renderProducts;
}
// danh thêm 
function logOut(){
  localStorage.removeItem("currentUser")
  window.onload()
}






















