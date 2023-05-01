// import arrCartIn from "../Home/chung"
let objSPPro = JSON.parse(localStorage.getItem("sanpham"));
// console.log(objSPPro);
document.querySelector("#MainImg").src = `${objSPPro.biaSach[0]}`;

let str = "";
for (let i = 0; i < objSPPro.biaSach.length; i++) {
  str += `
    <div class="small-img-col">
    <img
      src="${objSPPro.biaSach[i]}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
  `;
}

document.querySelector(".small-img-group").innerHTML = str;
document.querySelector(".tenVietLien").innerHTML =
  "Home / " + objSPPro.tenVietLien;
document.querySelector(".tenSach").innerHTML = objSPPro.tenSach;

function addProduct() {
  var flag = false;
  // objSPPro = JSON.parse(objSPPro);


  // objSPPro = JSON.stringify(objSPPro);
  // console.log(objSPPro);

  var valuePro = Number(document.getElementById("valuePro").value);
  console.log(valuePro);

  for(let i=0; i< arrCartIn.length; i++){
        
    if(arrCartIn[i].sp.id == objSPPro.id){
        arrCartIn[i].qty += valuePro;
        flag = true;
        break;
    }
}

  if(flag == false){
      let cartItem = {sp: objSPPro, qty: valuePro};
      arrCartIn.push(cartItem);
  }

  soluongQTY = Number(soluongQTY);
  soluongQTY += valuePro;
  document.querySelector(".cartNo").innerText = soluongQTY;

  localStorage.setItem("totalQty", soluongQTY + "");
  localStorage.setItem("myCart", JSON.stringify(arrCartIn));

  thongBao();
}

function thongBao() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}