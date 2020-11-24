var id = getUrlParameter('id');
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
var count =0;
function detailProduct() {
    if (localStorage.getItem("phone") != null) {
        phone = JSON.parse(localStorage.getItem("phone"));
        document.getElementById("detail-product").innerHTML = displayImageProduct(phone,id).join("");
        document.getElementById("infoProduct").innerHTML = displayInfoProduct(phone,id).join("");
        document.getElementById("relativeProduct").innerHTML = displayRelativeProduct(phone,id).join("");
        document.getElementById("relative2Product").innerHTML = displayRelative2Product(phone,id).join("");
    }
    var currentUser
    if(localStorage.getItem("currentUser")!=null){
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
function displayImageProduct(phone,id) {
    var renderProduct = phone.map((element, index) => {
        if (element.id == id) {
            return `
          <figure class="view overlay rounded z-depth-1" >
              <a href="${element.image}"
                  data-size="710x823">
                  <img src="${element.image}"
                      class="img-fluid z-depth-1">
              </a>
          </figure>
          
          `
          ;
          
        }
    });
    return renderProduct;
}
function displayRelativeProduct(phone,id){
    var j=4;
    var category
    for ( i = 0; i < phone.length; i++) {
        if(phone[i].id == id){
            category = phone[i].category;
        }
    }
    var renderProduct = phone.map((element, index) => {
        
        if (element.id != id && element.category == category && j>0 ) {
            j--;
            return `
            <div class="col-3">
            <div class="view overlay rounded z-depth-1 gallery-item">
                <img src="${element.image}"
                    class="img-fluid">
                <div class="mask rgba-white-slight"></div>
            </div>
        </div>
          
          `
          ;
          
        }
    });
    return renderProduct;
}
function displayRelative2Product(phone,id){
    var j=4;
    var category
    for ( i = 0; i < phone.length; i++) {
        if(phone[i].id == id){
            category = phone[i].category;
        }
    }
    var renderProduct = phone.map((element, index) => {
        if (element.id != id && element.category == category && j>0 ) {
            j--;
            return `
            <div class="col-md-6 col-lg-3 mb-5">

                    <!-- Card -->
                    <div class="">

                        <div class="view zoom overlay z-depth-2 rounded">
                            <img class="img-fluid w-100"
                                src="${element.image}"
                                alt="Sample">
                            <a href="Detail-product.html?id=${element.id}">
                                <div class="mask">
                                    <img class="img-fluid w-100"
                                        src="${element.image}">
                                    <div class="mask rgba-black-slight"></div>
                                </div>
                            </a>
                        </div>

                        <div class="pt-4">

                            <h5>${element.name}</h5>
                            <h6>${element.price} Đ</h6>
                        </div>

                    </div>
                    <!-- Card -->

                </div>
          
          `
          ;
          
        }
    });
    return renderProduct;
}
function displayInfoProduct(phone,id){
    
    var renderProduct = phone.map((element, index) => {
        if (element.id == id) {
            return `
            <h5>${element.name}</h5>
            
            <ul class="rating">
                <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                    <i class="far fa-star fa-sm text-primary"></i>
                </li>
            </ul>
            <p><span class="mr-1"><strong>${element.price} Đ</strong></span></p>
            <p class="pt-1">${element.description}</p>
            <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                    <tbody>
                        <tr>
                            <th class="pl-0 w-25" scope="row"><strong>System</strong></th>
                            <td>${element.system}</td>
                        </tr>
                        <tr>
                            <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                            <td>${element.color}</td>
                        </tr>
                        <tr>
                            <th class="pl-0 w-25" scope="row"><strong>Brand</strong></th>
                            <td>${element.category}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <div class="table-responsive mb-2">
                <table class="table table-sm table-borderless">
                    <tbody>
                        <tr>
                            <td class="pl-0 pb-0 w-25">Quantity</td>
                        </tr>
                        <tr>
                            <td class="pl-0">
                                <div class="def-number-input number-input safari_only mb-0">    
                                    <input class="quantity" min="0" name="quantity" value="1" id="quantity" type="number">

                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <a href="Checkout.html"><button type="button" class="btn btn-primary btn-md mr-1 mb-2" onclick="addCart(${id})">Buy now</button></a>
            <button type="button" class="btn btn-light btn-md mr-1 mb-2" id="add-cart" onclick="addCart(${id})"><i
                    class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
          
          `
          ;
          
        }
    });
    return renderProduct;
}

function addCart(id){
    if(localStorage.getItem("currentUser")!=null){
        var quantity = parseInt( document.getElementById("quantity").value);
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
            product = phone[i];
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
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Da them san pham vao gio hang")
    }else{
        alert("Moi ban dang nhap")
    }
    
}
