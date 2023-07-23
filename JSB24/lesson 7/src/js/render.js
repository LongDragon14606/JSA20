// // `` : ""

// let conten = document.querySelector(".conten");
// let a = "cuong";
// conten.innerHTML += `
// <div class="post">
//     <img src="img/1.jpg" alt="">
//     <p>${a}</p>
//     <p>VALORANT - Thông Tin Bản Cập Nhật 4.03</p>
// </div>
// `

//cách để render dữ liều fix mềm ra màn hình

// b1 : phải có 1 mảng chứa dữ liệu mà chúng ta cần
// b2 : tạo 1 function thực hiện công việc render dữ liệu

const listArrPost = [
    {
        img : "img/1.jpg",
        title : ">VALORANT - Thông Tin Bản Cập Nhật 4.03",
        name : "Cập nhật trò chơi"
    },
    {
        img : "img/2.jpg",
        title : "xin chào các bạn",
        name : "Cập nhật trò chơi"
    },
    {
        img : "img/3.jpg",
        title : "naksdnnaskdjkasndnsajdnksajn",
        name : "Cập nhật trò chơi"
    }
];
const listArrNew = [
    {
        img : "img/banner.jpg",
        title : "Tin mới",
        name : "Cập nhật trò chơi"
    }
];
function renderPost(data,conten) {
    //liên kết html và js
    // let conten = document.querySelector(".conten");
    //để sử lí được dữ liệu trong mảng ta phải sử dụng vòng lập for
    for(let item of data) {
        // đổ dự liệu kiểu mềm ra html
        conten.innerHTML += `
        <div class="post">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <p>${item.name}</p>
        </div>
        `
    }
}
let conten = document.querySelector(".conten");
renderPost(listArrPost,conten)
let _new = document.querySelector(".postNew");

renderPost(listArrNew,_new)