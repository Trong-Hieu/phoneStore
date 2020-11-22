function listCart() {
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
        document.getElementById("length-cart").innerHTML = displayTotalCart(cart);
        document.getElementById("cart-list").innerHTML = displayListCart(cart).join("");
        document.getElementById("total-amount").innerHTML = displayTotalAmountCart(cart);
    }
}
function displayTotalCart(cart) {
    var renderProduct =
        `Cart (<span>${cart.length}</span> items)`;
    return renderProduct;
}
var total = 0;
function displayListCart(cart) {
    var renderProduct = cart.map((element, index) => {
        total += element.product['price'] * element.quantity;
        return `
            <div class="row mb-4">
            <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img class="img-fluid w-100"
                        src="${element.product['image']}"
                        alt="Sample">
                    <a href="#!">
                        <div class="mask">
                            <img class="img-fluid w-100"
                                src="${element.product['image']}">
                            <div class="mask rgba-black-slight"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5>${element.product['name']}</h5>
                            <p class="mb-3 text-muted text-uppercase small">${element.product['color']}</p>
                            <p class="mb-2 text-muted text-uppercase small">${element.product['category']}</p>
                            
                        </div>
                        <div>
                            <div class="def-number-input number-input safari_only mb-0 w-100">

                                <input class="quantity" min="0" name="quantity" id="quantity${element.id}" value="${element.quantity}"
                                    type="number" onchange="changeQuantity( ${element.id})">

                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted text-center">

                            </small>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        
                            <a href="Cart-product.html" type="button" target="_self"
                                class="card-link-secondary small text-uppercase mr-3" onclick="deleteProductCart(${element.id})"><i
                                    class="fas fa-trash-alt mr-1" ></i> Remove item </a>
                            <a href="#" type="button"
                                class="card-link-secondary small text-uppercase"><i
                                    class="fas fa-heart mr-1"></i> Move to wish list </a>
                        </div>
                        <p class="mb-0"><span><strong id="summary">${element.product['price'] * element.quantity}</strong></span></p
                            class="mb-0">
                    </div>
                </div>
            </div>
        </div>
           
          `

            ;

    });
    return renderProduct;
}
function changeQuantity(id){
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    var newQuantity = document.getElementById("quantity"+id).value;
    cart.map((element,index)=>{
        if(element.id == id){
            element.quantity = newQuantity;
            localStorage.setItem("cart",JSON.stringify(cart))
            alert("Da thay doi so luong");
        }
      });
    
}
function deleteProductCart(id){
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
      cart.map((element,index)=>{
        if(element.id == id){
            cart.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cart))
            alert("Da xoa san pham")
        }
      });
}
function displayTotalAmountCart(cart) {
    var renderProduct = cart.map((element, index) => {
        return `
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
        ${element.product["name"]} <span>  ${element.quantity}</span>
        <span>${element.product['price'] * element.quantity}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
        Shipping
        <span>Gratis</span>
    </li>
    
      `
            ;
        

    }) + `<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
    <div>
        <strong>The total amount</strong>
        <strong>
            <p class="mb-0">(including VAT)</p>
        </strong>
    </div>
    <span><strong>${total}</strong></span>
</li>`;
    return renderProduct;
}
