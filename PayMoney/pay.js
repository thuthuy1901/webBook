const Status = JSON.parse(localStorage.getItem("status"));
const SumMoney = localStorage.getItem("SumMoney");

function Home(){
    location.href = "../Home/index.html"
}

document.querySelector(".content-pay").innerHTML = "Hi, "+ Status.username + ". You're deals is "+SumMoney +" to " + Status.address +".";