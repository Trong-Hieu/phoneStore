function userManageOnload(){
    if(localStorage.getItem("listUser") == null) {
        // localStorage.setItem("listUser", JSON.stringify(orders));
      } 
    users = JSON.parse(localStorage.getItem("listUser"));

    console.log(users)
    document.getElementById("userTable").innerHTML = ""
    for (let user of users){
        var row = "<tr>"
        row += "<td>" + user.id + "</td>"
        row += "<td>" + user.username + "</td>"
        row += "<td>" + user.name + "</td>"
        row += "<td>" + user.password + "</td>"
        // row += "<td id='actionBtn(" + user.id + ")'><button class='btn btn-primary btn-block' onclick = 'ship(" + user.id + ")'>Ship</button>"
        // row += "<button class='btn btn-danger btn-block' onclick = 'cancel(" + user.id + ")'>Cancel</button></td></tr>"
        document.getElementById("userTable").innerHTML += row
    }
}