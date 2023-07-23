//tạo ra 1 mảng chứa các đường link ảnh 

let ListArrImg = [
    "img/image 19.png",
    "img/image 29.png",
    "img/image 39.png",
    "img/image 40.png"
]
let i = 0;
function show(x) {
    if(i>=ListArrImg.leght-1) i=0;
    if(i=0) i=ListArrImg.length-1;
    let img = document.querySelector("img");
    img.src = ListArrImg[i];
    i+=x
}
