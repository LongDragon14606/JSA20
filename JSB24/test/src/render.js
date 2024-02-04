const ListArrPost = [
    {
        img1 : "img/Mask Group (1).png",
        title : "Fresh Lime Roasted Salmon",
        img2 : "img/Vector (1).png",
        text1 : "30 minutes",
        img3: "img/Vector (2).png",
        img4: "img/Vector (3).png",
        text2 : "Fish"
    },
    {
        img1 : "img/Mask Group (2).png",
        title : "The Best Easy One Pot Chicken and Rice",
        img2 : "img/Vector (1).png",
        text1 : "30 minutes",
        img3: "img/Vector (2).png",
        img4: "img/Vector (3).png",
        text2 : "Snack"
    },
    {
        img1 : "img/Mask Group (3).png",
        title : "Fresh and Healthy Mixed Mayonnaise ",
        img2 : "img/Vector (1).png",
        text1 : "30 minutes",
        img3: "img/Vector (2).png",
        img4: "img/Vector (3).png",
        text2 : "Healthy"
    },
    {
        img1 : "img/Mask Group (4).png",
        title : "The Creamiest Creamy Chicken",
        img2 : "img/Vector (1).png",
        text1 : "30 minutes",
        img3: "img/Vector (2).png",
        img4: "img/Vector (3).png",
        text2 : "Noodles"
    },
    {
        img1 : "img/Mask Group (5).png",
        title : "Fruity Pancake with Orange & Blueberry",
        img2 : "img/Vector (1).png",
        text1 : "30 minutes",
        img3: "img/Vector (2).png",
        img4: "img/Vector (3).png",
        text2 : "Sweet"
    }
];
function renderPost() {
    let render = document.querySelector(".new")
    for (let item of ListArrPost) {
    render.innerHTML += `
    <div class="list-food">
        <img src="${item.img1}" alt="">
        <h3>${item.title}</h3>
    </div>
    <div class="icon2">
        <img src="${item.img2}" alt="">
        <p>${item.text1}</p>
        <img src="${item.img3}" alt="">
        <img src="${item.img4}" alt="">
        <p>${item.text2}</p>
    </div>
            `
    }
}
renderPost()