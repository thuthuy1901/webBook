const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector("#LL");
const registerLink = document.querySelector("#RL");
const btnLogin = document.querySelector(".btnLogin");
const iconClose = document.querySelector(".icon-close");

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








