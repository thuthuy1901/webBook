const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector("#LL");
const registerLink = document.querySelector("#RL");
const btnLogin = document.querySelector(".btnLogin");
const iconClose = document.querySelector(".icon-close");

const usernameR = document.querySelector(".username-R");
const passwordR = document.querySelector(".password-R");
const address = document.querySelector(".address-R");
const buttonRegister = document.querySelector("#btnR");

const usernameL =document.querySelector(".username-L");
const passwordL = document.querySelector(".password-L");
const buttonLogin = document.querySelector("#btnL");

thongBaoDN();

registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});


btnLogin.addEventListener("click", ()=>{
    wrapper.classList.add("active-btnLogin");
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-btnLogin");
});


const StatusLogin = JSON.parse(localStorage.getItem("status"));
if(StatusLogin.Status==1){
    btnLogin.classList.add("hidden");
}

buttonRegister.addEventListener("click", (e) =>{
    e.preventDefault();
    if(
        usernameR.value ==="" ||
        passwordR.value ==="" ||
        address.value === ""
    ){
        thongBaoTrong();
    }
    else{
        const user = {
            username: usernameR.value,
            password: passwordR.value,
            address: address.value
        };
        let dsUser = JSON.stringify(user);
        localStorage.setItem(usernameR.value, dsUser);
    }
});

let Status ={
    username:"",
    address:"",
    Status:0
};

buttonLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    if(
        usernameL.value==="" ||
        passwordL.value===""
    ){
        thongBaoTrong();
    }
    else{
        const user = JSON.parse(localStorage.getItem(usernameL.value));
        if(
            user.username === usernameL.value &&
            user.password === passwordL.value 
        ){
            Status ={
                username: user.username,
                address: user.address,
                Status: 1
            };
            console.log(Status);
            localStorage.setItem("status",JSON.stringify(Status));
            location.href = "../Home/index.html";
        }
        else{
            
            thongBaoDNTB();
        }
    }
});

function thongBaoTrong() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function thongBaoDNTB(){
    var x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function thongBaoDN(){
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}











