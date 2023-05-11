let soluongQTY = (localStorage.getItem("totalQty") == null) ? 0: localStorage.getItem("totalQty");
let arrCartIn = ((localStorage.getItem("myCart"))==null) ? [] : (JSON.parse(localStorage.getItem("myCart")));
// console.log(arrCartIn);


// console.log(arrCartIn);

function dangnhap(){
    location.href="../DangNhap/login.html"
}

let Status = JSON.parse(localStorage.getItem("status"));
const dnL = document.querySelector("#dnL");
const dnR = document.querySelector("#dnR");
let LogOut = document.querySelector("#LogOut");

if(Status.Status == 1){
    dnL.classList.add("active");
    dnR.classList.add("active");
    document.querySelector(".cartNo").innerText = soluongQTY;
}
else{
    
    LogOut.classList.add("hidden");
    document.querySelector(".cartNo").innerText = 0;
}


function Logout(){
    const temp ={
        username:"",
        address:"",
        Status:0
    };
    localStorage.setItem("status",JSON.stringify(temp));
    
}


