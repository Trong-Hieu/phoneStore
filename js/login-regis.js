function regis(){
    formregis.style.display = "block";
    formlogin.style.display = "none";
    dk.style.display = "flex";
    dn.style.display = "none";
}

var users = [
    {
        id : 0,
        name: "Doan Cong Danh",
        username:"danhdoan1999",
        password:"123123"
    },
    {
        id : 1,
        name: "Nguyen Trong Hieu",
        username:"tronghieu1999",
        password:"456456"
    },
    {   
        id : 2,
        name: "Truong Duc Khai",
        username:"duckhai1999",
        password:"789789"
    },
]
// danh sửa 
function getinfo(){
    if (localStorage.getItem("listUser") == null){
        localStorage.setItem("listUser", JSON.stringify(users))
    }
    users = JSON.parse(localStorage.getItem("listUser"))
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for(i=0;i<users.length;i++){
        if (username == users[i].username && password == users[i].password){
            var currentUser = {
                id: users[i].id,
                name: users[i].name,
                username: users[i].username
            }
            localStorage.setItem("currentUser" , JSON.stringify(currentUser))
            window.location = "index.html" 
            return
        }
    }
    alert("Đăng nhập thất bại")
}

function saveNewUser(){
    localStorage.setItem("listUser", JSON.stringify(users))
    users = JSON.parse(localStorage.getItem("listUser"))
    var id = users.length
    var name = document.getElementById("regisName").value
    var username = document.getElementById("regisUser").value
    var password = document.getElementById("regisPass").value
    if(username == "" || password == "" || name == ""){
        alert("vui lòng nhập thông tin")
    }else {
        users.push({id,name, username, password})

        console.log(users)
        localStorage.setItem("listUser", JSON.stringify(users))
        alert("Dang ky thanh cong")
        formregis.style.display = "none";
        formlogin.style.display = "block";
    }
}