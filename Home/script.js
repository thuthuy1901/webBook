
var http = new XMLHttpRequest();
var url = "bookData.json";
http.open("GET",url,true);

http.send();
http.onreadystatechange = function() {
    if (this.readyState == 4) {
        var products = JSON.parse(this.responseText);
        console.log(products);
        var output="";
        
        for(let item of products){
            output +=
            `
            <div
            class="pro"
            onclick="window.location.href='../Product/product.html'"
            >
            <img src="${item.biaSach}" />
            <div class="des">
                <span>${item.tenTacGia}</span>
                <h5>${item.tenSach}</h5>
                <div class="star">
                <img src="../img/logo/iconStar/star.png" />
                <img src="../img/logo/iconStar/star.png" />
                <img src="../img/logo/iconStar/star.png" />
                <img src="../img/logo/iconStar/star.png" />
                <img src="../img/logo/iconStar/star.png" />
                </div>
                <h4>112.000 vnd</h4>
            </div>
            <a href="#">
                <img
                width="25px"
                height="25px"
                src="../img/logo/logoCart/paper-bag.png"
                class="cart"
                />
            </a>
            </div>
            `;
        

        document.querySelector(".pro-container").innerHTML =output;
        document.querySelector(".pro-container1").innerHTML =output;
    }
}

}
