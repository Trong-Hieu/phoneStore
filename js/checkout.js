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
        Host : "smtp.elasticemail.com",
        Username : "taidn303@gmail.com",
        Password : "AC4EB9FC468BFC30BEA91675436CDAE6ED78",
        To : 'leshinno1@gmail.com',
        From : "taidn303@gmail.com",
        Subject : "This is the subject",
        Body : ``
    }).then(
      message => alert(message)
    );
}
function addOrder(){
    if(localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));  
        
      }
      if(localStorage.getItem("currentUser") != null) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));  
        
      } 
    if(localStorage.getItem("order") !=null){
        order = JSON.parse(localStorage.getItem("order"));
    }else{
        var order = [];
    }
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = document.getElementById("username").value;
    if(userName != currentUser.name){
        alert(" Moi nhap lai ten tai khoan");
        return;
    }
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var status = "unship";
    var dateOder = Date.now();
    var info = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        address: address,
        address2: address2,
        country: country,
        state: state,
        zip: zip,
    };
    
    order.push({
        id:  order.length+1,
        currentUser: currentUser.name,
        cart: cart,
        info: info,
        status: status,
        dateOder: dateOder,
    });
    
    localStorage.setItem("order", JSON.stringify(order));
    alert("Da Order thanh cong")
}