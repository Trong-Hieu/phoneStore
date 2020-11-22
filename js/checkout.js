function checkout(){
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
        document.getElementById("lengthCart").innerHTML = cart.length;
        document.getElementById("yourCart").innerHTML = displayCart(cart);
    }
}
function displayCart(cart){
    var total=0;
    var renderProduct=``;
    for(i=0;i<cart.length;i++){
        total+=cart[i].product['price'] * cart[i].quantity;
        renderProduct += `<li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">${cart[i].product['name']}</h6>
            <small class="text-muted">Quantity: ${cart[i].quantity}</small>
        </div>
        <span class="text-muted">${cart[i].product['price'] * cart[i].quantity}</span>
    </li>`
    }
    renderProduct +=`<li class="list-group-item d-flex justify-content-between">
    <span>Total (VND)</span>
    <strong>${total}</strong>
</li>`
//     renderProduct = cart.map((element,index)=>{
//         total += element.product['price'] * element.quantity;
//         return`<li class="list-group-item d-flex justify-content-between lh-condensed">
//         <div>
//             <h6 class="my-0">${element.product['name']}</h6>
//             <small class="text-muted">Quantity: ${element.quantity}</small>
//         </div>
//         <span class="text-muted">${element.product['price'] * element.quantity}</span>
//     </li>`
//     });
//     renderProduct +=`<li class="list-group-item d-flex justify-content-between">
//     <span>Total (VND)</span>
//     <strong>${total}</strong>
// </li>`
    return renderProduct;
}
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "taidn303@gmail.com",
        Password : "Tai123578946",
        To : 'leshinno1@gmail.com',
        From : "taidn303@gmail.com",
        Subject : "This is the subject",
        Body : "dcasdasd"
    }).then(
      message => alert(message)
    );
}
function addOrder(){
    var quantity = parseInt( document.getElementById("quantity").value);
    var  product;
    var cond;
    if (localStorage.getItem("phone") != null) {
        phone = JSON.parse(localStorage.getItem("phone"));
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
                product: product,
                quantity: quantity,
            });
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Da them san pham vao gio hang")
}