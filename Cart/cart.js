

let strData = "";
let tong =0;

arrCartIn.forEach(item => {
     strData +=`
        <tr>
        <td>
        <img
            width="15px"
            src="../img/icon/iconRemove/remove.png"
            alt=""
            class="btn-danger"
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
        <td><input type="number" value="${item.qty}" min="1" /></td>
        <td>${112* item.qty}.000</td>
        </tr>
     `;
     tong += (item.qty * 112);
});

document.querySelector("#bodyCart").innerHTML = strData;
document.querySelector("#TamTinh").innerHTML = tong + ".000";
document.querySelector("#TongTien").innerHTML = tong + ".000";








