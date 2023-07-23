//DOM là gì ?
//  
//các phương tiện sử dụng DOM
// let n = document.getElementsByTagName("p")
// n[3].innerHTML="<h1>jhbaskjvb</h1>";
// let t = document.getElementById("one")
// console.log(t);
// let r = document.getElementsByClassName("two")
// console.log(r);

//selector là bộ trọn trong css
// let a1 = document.querySelector(".two")
// console.log(a1);
// let a2 = document.querySelectorAll(".two")
// console.log(a2);

//tạo ra 1 thẻ h1 bên html và thay đổi nội dung của nó bằng js 
let n = document.getElementsByTagName("h1")
n[2].innerHTML="<h1>hello</h1>"
let a1 = document.querySelector("#one")
a1.innerHTML="<h1>bye</h1>"
