let soluongQTY = (localStorage.getItem("totalQty") == null) ? 0: localStorage.getItem("totalQty");
let arrCartIn = JSON.parse(localStorage.getItem("myCart"));
// console.log(arrCartIn);
document.querySelector(".cartNo").innerText =soluongQTY ;
// console.log(arrCartIn);





