
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
var count=0;
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
     document.getElementById("length-Cart").style.display = "none"
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

function listAllProducts(phone) {
  var renderProducts = phone.map((element, index) => {
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
  });
  return renderProducts;
}

function listProductsFromCategory(phone, nameCategory) {
  var renderProducts = phone.map((element, index) => {
    if(element.category == nameCategory) {
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

//danh thêm sự kiện
function logOut(){
  localStorage.removeItem("currentUser")
  window.onload()
}

/* Get URL */
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

/* List products from search */ 
function listProductsFromSearch(phone, nameSearch) {
  var renderProducts = phone.map((element, index) => {
    if(element.name.toLowerCase().includes(nameSearch.toLowerCase())) {
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


/* Sort by genre*/
var sortGenreButton = document.querySelectorAll(".container__shop-main__filter__btn");
sortGenreButton.forEach(function(sortGenre, index) {
  sortGenre.onclick = function() {
    var nameGenre = sortGenre.value;
    if(index == 0) {
      sortGenreButton[0].setAttribute("class", "container__shop-main__filter__btn btn btn--primary");
      sortGenreButton[1].setAttribute("class", "container__shop-main__filter__btn btn");
      sortGenreButton[2].setAttribute("class", "container__shop-main__filter__btn btn");
    }
    if(index == 1) {
      sortGenreButton[0].setAttribute("class", "container__shop-main__filter__btn btn");
      sortGenreButton[1].setAttribute("class", "container__shop-main__filter__btn btn btn--primary");
      sortGenreButton[2].setAttribute("class", "container__shop-main__filter__btn btn");
    }
    if(index == 2) {
      sortGenreButton[0].setAttribute("class", "container__shop-main__filter__btn btn");
      sortGenreButton[1].setAttribute("class", "container__shop-main__filter__btn btn");
      sortGenreButton[2].setAttribute("class", "container__shop-main__filter__btn btn btn--primary");
    }
    document.getElementById("list-products").innerHTML = listProductsFromSortGenre(phone, nameGenre).join("");
  }
}); 

function listProductsFromSortGenre(phone, nameGenre) {
  var renderProducts = phone.map((element, index) => {
    if(element.genre == nameGenre) {
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

/* Sort by price */
var sortPriceButton = document.querySelectorAll(".select-input__link");
sortPriceButton.forEach(function(sortPrice) {
  sortPrice.onclick = function() {
    if(sortPrice.outerText == "Low - High") {
      phone.sort(function(a, b) {
        return a.price - b.price;
      });
    }
    if(sortPrice.outerText == "High - Low") {
      phone.sort(function(a, b) {
        return b.price - a.price;
      });
    }
    document.getElementById("list-products").innerHTML = listAllProducts(phone).join("");
  }
}); 

















