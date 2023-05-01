thongBao();

let strData = "";
let tong =0;


arrCartIn.forEach(item => {
    // console.log(item);
     strData +=`
        <tr>
        <td>
        <img
            width="15px"
            src="../img/icon/iconRemove/remove.png"
            alt=""
            class="btn-danger"
            onclick = \'removeCart(\`${item.sp.id}\`)\'
        />
        </td>
        <td>
        <img
            class="img-product"
            src="${item.sp.biaSach[0]}"
            alt=""
        />
        </td>
        <td>${item.sp.tenSach}</td>
        <td>112.000</td>
        <td><input type="number" value="${item.qty}" min="1" onchange=\'changeValueItem(\`${item.sp.id}\`)\' name="itemValue"/></td>
        <td>${112* item.qty}.000</td>
        </tr>
     `;
     tong += (item.qty * 112);
});

document.querySelector("#bodyCart").innerHTML = strData;
document.querySelector("#TamTinh").innerHTML = tong + ".000";
document.querySelector("#TongTien").innerHTML = tong + ".000";

function removeCart(idPro){
    // var objSP = JSON.parse(objSP);
    // console.log(objSP);

    arrCartIn.forEach(item =>{
        if(item.sp.id == idPro){
            soluongQTY -= item.qty;
        }
    })

    localStorage.setItem("totalQty", soluongQTY + "");

    let temp = arrCartIn.filter(item => item.sp.id !=idPro);
    console.log(temp);
    localStorage.setItem("myCart", JSON.stringify(temp));
    // window.onload();

    // thongBao();
    location.reload();

}

function thongBao() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// let itemValue = Number(document.getElementById("itemValue").value);
// console.log(itemValue);


function changeValueItem(idPro){
    var cout = 0;
    var slQyt =0;
    arrCartIn.forEach(item =>{
        if(item.sp.id == idPro){
            var itemValue = Number(document.getElementsByName("itemValue")[cout].value);
            item.qty = itemValue;
            console.log(item.qty);
        }
        cout ++;
        slQyt += item.qty;
    })



    
    document.querySelector(".cartNo").innerText = slQyt;

    localStorage.setItem("totalQty", slQyt + "");
    localStorage.setItem("myCart", JSON.stringify(arrCartIn));

    location.reload();
}




