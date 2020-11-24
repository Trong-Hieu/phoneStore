
var categories = document.querySelectorAll(".container__shop-main__category-item__link");

categories.forEach(function(category) {
  category.onclick = function() {
    var nameCategory = category.outerText;
    if(nameCategory == "All Categories") {
      document.getElementById("list-products").innerHTML = listAllProducts(phone).join("");
    } else {
      document.getElementById("list-products").innerHTML = listProductsFromCategory(phone, nameCategory).join("");
    }
  }
});

function listProducts() {
  if(localStorage.getItem("phone") != null) {
    phone = JSON.parse(localStorage.getItem("phone"));  
    if(nameSearch == undefined) {
      document.getElementById("list-products").innerHTML = listAllProducts(phone).join("");  
    } else {
      if(listProductsFromSearch(phone, nameSearch).join("") == []) {
        document.getElementById("list-products").innerHTML = `
          <p class="container__shop-main__products">There are no products named '${nameSearch}'</p>
        `;
      } else {
        document.getElementById("list-products").innerHTML = listProductsFromSearch(phone, nameSearch).join("");  
      }
    }
  } 
  // danh sửa login - regis
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

function listAllProducts(phone) {
  var renderProducts = phone.map((element, index) => {
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
  });
  return renderProducts;
}

function listProductsFromCategory(phone, nameCategory) {
  var renderProducts = phone.map((element, index) => {
    if(element.category == nameCategory) {
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
//danh thêm sự kiện
function logOut(){
  localStorage.removeItem("currentUser")
  window.onload()
}


function listProductsFromSearch(phone, nameSearch) {
  var renderProducts = phone.map((element, index) => {
    if(element.name.toLowerCase().includes(nameSearch.toLowerCase())) {
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

var nameSearch = getUrlParameter('nameSearch');
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};













