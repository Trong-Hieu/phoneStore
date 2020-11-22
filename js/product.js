var image

var products = [
    {
      id: 0,
      type: "Iphone",
      name: "iPhone 7 Plus",
      price: 449.99,
      image: "../assets/Images/iphone-7-plus-black-600x600.jpg",
      amount: 20,
      description: "iPhone 7 Plus features dual 12.0MP cameras for high-resolution zoom and an ƒ/1.8 aperture for great low-light photos and 4K video. Optical image stabilization. A 5.5-inch Retina HD display with wide color and 3D Touch. An A10 Fusion chip for up to 2x faster performance than iPhone 6. Touch ID. Faster LTE. The longest battery life in an iPhone. Immersive stereo sound, splash- and water-resistant design, and iOS 13."
    },
    {
      id: 1,
      type: "Iphone",
      name: "iPhone 8 Plus",
      price: 599.99,
      image: "../assets/Images/iphone-8-plus-hh-600x600.jpg",
      amount: 20,
      description: "iPhone 8 is a new generation of iPhone. Designed with most durable glass and a stronger aerospace-grade aluminum band. Charges wirelessly.¹ Resists water and dust.² 5.5-inch Retina HD display with True Tone.³ 12MP dual cameras offer improved Portrait mode and new Portrait Lighting.⁴ Powered by A11 Bionic, a most powerful smartphone chip. Supports augmented reality experiences in games and apps. With iPhone 8 Plus, intelligence has never looked better."
    },
    {
      id: 2,
      type: "Iphone",
      name: "iPhone X",
      price: 899.99,
      image: "../assets/Images/iphone-x-64gb-hh-600x600.jpg",
      amount: 20,
      description: "Watch and share engaging mobile content with this iPhone X smartphone for Simple Mobile. It has a 5.8-inch Super Retina OLED display for brilliant viewing, and the dual 12-megapixel cameras let you record 4K videos. Take creative, flattering selfies with the TrueDepth front camera of this 64GB iPhone X smartphone."
    },
    {
      id: 3,
      type: "Iphone",
      name: "iPhone XR",
      price: 749.99,
      image: "../assets/Images/iphone-xr-128gb-600x600.jpg",
      amount: 20,
      description: "iPhone XR features the most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy and an innovative backlight design that allows the screen to stretch into the corners¹. Six stunning new finishes. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP camera system with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance². And iOS 12 - the most advanced mobile operating system in the world - with powerful new tools that make iPhone more personal than ever."
    },
    {
      id: 4,
      type: "Iphone",
      name: "iPhone XS",
      price: 999.99,
      image: "../assets/Images/iphone-xs-gold-600x600.jpg",
      amount: 20,
      description: "Make and receive calls with this iPhone XS smartphone. An A10 Bionic chip ensures the smooth running of programs and apps, while the 64GB of memory provide ample storage space for data. This iPhone XS smartphone features a 5.8-inch touchscreen for easy operation and entertainment plus 12MP and 7MP cameras for taking quality videos and photos."
    },
    {
      id: 5,
      type: "Iphone",
      name: "iPhone XS Max",
      price: 1099.99,
      image: "../assets/Images/iphone-xs-max-256gb-white-600x600.jpg",
      amount: 20,
      description: "Stay connected with this Total Wireless iPhone XS Max smartphone. An A12 Bionic chip ensures flawless completion of processes, while the 64GB memory provides enough storage for data. This Total Wireless iPhone XS Max features a 12MP rear camera and 7MP front camera for quality recording and photo capture plus a built-in rechargeable lithium-ion battery with up to 25-hours of talk time."
    },
    {
      id: 6,
      type: "Iphone",
      name: "iPhone 11",
      price: 849.99,
      image: "../assets/Images/iphone-11-red-600x600.jpg",
      amount: 20,
      description: "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.³ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.² And worry less with water resistance up to 2 meters for 30 minutes."
    },
    {
      id: 7,
      type: "Iphone",
      name: "iPhone 11 Pro",
      price: 1349.99,
      image: "../assets/Images/iphone-11-pro-256gb-black-600x600.jpg",
      amount: 20,
      description: "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life¹ and a new level of water resistance.² All in the first iPhone powerful enough to be called Pro."
    },
    {
      id: 8,
      type: "Iphone",
      name: "iPhone 11 Pro Max",
      price: 1449.99,
      image: "../assets/Images/iphone-11-pro-max-512gb-gold-600x600.jpg",
      amount: 20,
      description: "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display – the brightest iPhone display yet.¹ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life² and a new level of water resistance.³ All in the first iPhone powerful enough to be called Pro."
    },
    {
      id: 9,
      type: "Ipad",
      name: "iPad Pro",
      price: 1409.99,
      image: "../assets/Images/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-600x600.jpg",
      amount: 20,
      description: "Immensely powerful, portable, and capable, the 12.9-inch iPad Pro features a redesigned Retina display that is the most advanced on the planet, while the A10X Fusion chip delivers more power than most PC laptops. ¹ With Apple Pencil, the Smart Keyboard, and iOS—the most advanced mobile operating system—iPad Pro is designed for the world we live in today. "
    },
]

function productsTable(){
    // localStorage.setItem("listProducts", JSON.stringify(products));
    if(localStorage.getItem("phone") == null) {
      localStorage.setItem("phone", JSON.stringify(products));
    } 
    products = JSON.parse(localStorage.getItem("phone"));

    console.log(products)
    document.getElementById("productTable").innerHTML = ""
    for (let p of products){
        var row = "<tr>"
        row += "<td>" + p.id + "</td>"
        row += "<td width='150px'><img src='" + p.image + "' width = '70%' height = 'auto' ></td>"
        row += "<td>" + p.name + "</td>"
        row += "<td>" + p.category + "</td>"
        row += "<td>" + p.amount + "</td>"
        row += "<td>" + p.price + "$</td>"
        row += "<td><button class='btn btn-primary btn-block' onclick = 'edit(" + p.id + ")'>Edit</button>"
        row += "<button class='btn btn-danger btn-block' onclick = 'Delete(" + p.id + ")'>Delete</button></td></tr>"
        document.getElementById("productTable").innerHTML += row
    }
}

function addProduct(){
  
  products = JSON.parse(localStorage.getItem("phone"));  
  var id = products.length
  var name = document.getElementById("name").value
  var price = Number(document.getElementById("price").value)
  var oldPrice = Number(document.getElementById("oldPrice").value)
  var amount = Number(document.getElementById("amount").value)
  var category = document.getElementById("category").value
  var color = document.getElementById("color").value
  var description = document.getElementById("description").value


  var productId = getUrlParameter("id")
  if (productId){
    products[productId].name = name
    products[productId].price = price
    products[productId].oldPrice = oldPrice
    products[productId].category = category
    products[productId].amount = amount
    products[productId].color = color
    products[productId].description = description
  }else{
    products.push({id, name, color, price, oldPrice, category, amount, image, description});
  }
  alert("Saved product")
  console.log(products)

  localStorage.setItem("phone", JSON.stringify(products));

}

function uploadImg(event) {   
  // image = URL.createObjectURL(event.target.files[0])
  // console.log(event.target.files)
  // image = event.target.files[0]
  // console.log(event.target.files[0])
  var reader = new FileReader()
  reader.addEventListener("load", () =>{
    image = reader.result
  })
  reader.readAsDataURL(event.target.files[0])
}

function edit(id){
  window.location = "forms.html?id=" + id
}

function Delete(id){

  var conf = confirm("Are you sure to delete this product?");
  if (conf){
    products = JSON.parse(localStorage.getItem("phone")); 
    products.splice(id, 1)
    for (let i = 0; i < products.length; i++){
        products[i].id = i
        console.log("id: " + products[i].id)
    }

    localStorage.setItem("phone", JSON.stringify(products));
    productsTable()
  }
}

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

function onloadEditPage(){
  var id = getUrlParameter("id");
  console.log(id)
  if (id){
    document.getElementById("pageTitle").innerHTML = "Edit Product"
    products = JSON.parse(localStorage.getItem("phone"));
    document.getElementById("name").value = products[id].name
    document.getElementById("price").value = products[id].price
    document.getElementById("oldPrice").value = products[id].oldPrice
    document.getElementById("amount").value = products[id].amount
    document.getElementById("color").value = products[id].color
    // document.getElementById("image").value = products[id].image
    document.getElementById("category").value = products[id].category
    document.getElementById("description").value = products[id].description
  }
}