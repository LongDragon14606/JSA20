const ListArrPost = [
    {
        item : "img/image 47 (1).jpg",
        title : "VALORANT - Thông Tin Bản Cập Nhật 4.03",
        name : "Cập nhật trò chơi"
    },
    {
        item : "img/image 47 (1).jpg",
        title : "VALORANT - Thông Tin Bản Cập Nhật 4.03",
        name : "Cập nhật trò chơi"
    },
    {
        item : "img/image 47 (1).jpg",
        title : "VALORANT - Thông Tin Bản Cập Nhật 4.03",
        name : "Cập nhật trò chơi"
    },
    {
        item : "img/image 47 (1).jpg",
        title : "VALORANT - Thông Tin Bản Cập Nhật 4.03",
        name : "Cập nhật trò chơi"
    }
];
function renderPost() {
    let render = document.querySelector(".new")
    for (let item of ListArrPost) {
    render.innerHTML += `
    <div class="content">
                <img src="${item.img}" alt="">
                <p>${item.name}</p>
                <h4>${item.title}</h4>
            </div>
            `
    }
}
renderPost()