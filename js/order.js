var orders = [
    // {
    //     id: 0,
    //     customer: {
    //         name: "Truong Duc Khai",
    //         email: "khaibuombuom.gmail.com"
    //     },
    //     product: {
    //         id: 0,
    //         type: "Iphone",
    //         name: "iPhone 7 Plus",
    //         price: 449.99,
    //         image: "../assets/Images/iphone-7-plus-black-600x600.jpg",
    //         amount: 20,
    //         description: "iPhone 7 Plus features dual 12.0MP cameras for high-resolution zoom and an ƒ/1.8 aperture for great low-light photos and 4K video. Optical image stabilization. A 5.5-inch Retina HD display with wide color and 3D Touch. An A10 Fusion chip for up to 2x faster performance than iPhone 6. Touch ID. Faster LTE. The longest battery life in an iPhone. Immersive stereo sound, splash- and water-resistant design, and iOS 13."
    //     },
    //     orderDate: "11/11/2020",
    //     status: "unship"
    // },
    // {
    //     id: 1,
    //     customer: {
    //         name: "Doan Cong Danh",
    //         email: "danhbuombuom.gmail.com"
    //     },
    //     product: {
    //         id: 2,
    //         type: "Iphone",
    //         name: "iPhone X",
    //         price: 899.99,
    //         image: "../assets/Images/iphone-x-64gb-hh-600x600.jpg",
    //         amount: 20,
    //         description: "Watch and share engaging mobile content with this iPhone X smartphone for Simple Mobile. It has a 5.8-inch Super Retina OLED display for brilliant viewing, and the dual 12-megapixel cameras let you record 4K videos. Take creative, flattering selfies with the TrueDepth front camera of this 64GB iPhone X smartphone."
    //     },
    //     orderDate: "11/11/2020",
    //     status: "shipped"
    // },
    // {
    //     id: 2,
    //     customer: {
    //         name: "Le Trong Tai",
    //         email: "taibuombuom.gmail.com"
    //     },
    //     product: {
    //         id: 3,
    //         type: "Iphone",
    //         name: "iPhone XR",
    //         price: 749.99,
    //         image: "../assets/Images/iphone-xr-128gb-600x600.jpg",
    //         amount: 20,
    //         description: "iPhone XR features the most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy and an innovative backlight design that allows the screen to stretch into the corners¹. Six stunning new finishes. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP camera system with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance². And iOS 12 - the most advanced mobile operating system in the world - with powerful new tools that make iPhone more personal than ever."
    //     },
    //     orderDate: "11/11/2020",
    //     status: "unship"
    // },
    // {
    //     id: 3,
    //     customer: {
    //         name: "Nguyen Trong Hieu",
    //         email: "hieubuombuom.gmail.com"
    //     },
    //     product: {
    //         id: 8,
    //         type: "Iphone",
    //         name: "iPhone 11 Pro Max",
    //         price: 1449.99,
    //         image: "../assets/Images/iphone-11-pro-max-512gb-gold-600x600.jpg",
    //         amount: 20,
    //         description: "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display – the brightest iPhone display yet.¹ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life² and a new level of water resistance.³ All in the first iPhone powerful enough to be called Pro."
    //     },
    //     orderDate: "11/11/2020",
    //     status: "unship"
    // },
    
]

var orderStatus = "unship"

function ordersTable(){
    if(localStorage.getItem("order") == null) {
        localStorage.setItem("order", JSON.stringify(orders));
      } 
    orders = JSON.parse(localStorage.getItem("order"));

    console.log(orders)
    document.getElementById("ordersTable").innerHTML = ""
    var filterOrders = orders.filter((order) => {
        if (order.status == orderStatus) return order
    })
    console.log(filterOrders)
    for (let order of filterOrders){
        var row = "<tr>"
        let column = ""
        row += "<td>" + order.id + "</td>"
        row += "<td>" + order.currentUser + "</td>"
        row += "<td width='300px' height = 'auto'>"
        for (let cart of order.cart){
            column += "<img src='" + cart.product.image + "' width = '20%' height = 'auto' >"
            column +=  " " + cart.product.name + ": " + cart.product.price + "$"
            column += "</br>"
        }
        row += column + "</td>"
        // row += "<td width='300px'><img src='" + order.product.image + "' width = '30%' height = 'auto' >"
        // row +=  " " + order.product.name + ": " + order.product.price + "$</td>"
        row += "<td>" + order.dateOder + "</td>"
        row += "<td id='actionBtn(" + order.id + ")'><button class='btn btn-primary btn-block' onclick = 'ship(" + order.id + ")'>Ship</button>"
        row += "<button class='btn btn-danger btn-block' onclick = 'cancel(" + order.id + ")'>Cancel</button></td></tr>"
        document.getElementById("ordersTable").innerHTML += row
    }

    if (orderStatus == "shipped"){
        for (let order of filterOrders){
            document.getElementById("actionBtn("+ order.id +")").innerHTML = "<button class='btn btn-primary btn-block'>Shipped</button>"
        }
    }
}

function ship(id){
    orders = JSON.parse(localStorage.getItem("order"));

    orders[id-1].status = "shipped"
    localStorage.setItem("order", JSON.stringify(orders));

    ordersTable()
}

function cancel(id){
    orders = JSON.parse(localStorage.getItem("order"));

    orders[id-1].status = "canceled"
    localStorage.setItem("order", JSON.stringify(orders));

    ordersTable()
}

function changeStatus(value){
    orderStatus = value
    console.log(value)
    ordersTable()
}