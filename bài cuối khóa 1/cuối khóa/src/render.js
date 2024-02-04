const listArrPost = [
    {
        id: 1,
        img: "img/ice-cream-hop-50g-dua_275x186.png",
        name: "kem hộp dừa tự nhiên 50g",
        price: "17.700₫"
    },
    {       
        id: 2,
         img: "img/ice-cream-hop-50g-matcha_275x186.png",
        name: "kem hộp trà xanh matcha tự nhiên 50g",
        price: "17.700₫"
    },
    {
        id: 3,
        img: "img/ice-cream-hop-50g-sau_275x186.png",
        name: "kem hộp sầu riêng tự nhiên 50g",
        price: "17.700₫"
    },
    {
        id: 4,
        img: "img/ice-cream-hop-50g-socola_275x186.png",
        name: "kem hộp socola nguyên chất 50g",
        price: "17.700₫"
    },
    {
        id: 5,
        img: "img/ice-cream-hop-50g-vani_275x186.png",
        name: "kem hộp vanilla tự nhiên 50g",
        price: "17.700₫"
    },
    {
        id: 6,
        img: "img/Kem-Caramel-hop-50-275x186.png",
        name: "kem hộp caramel cà phê muối tự nhiên 50g",
        price: "17.700₫"
    },
    {       
        id: 7,
         img: "img/ice-cream-que-52g-dua_275x186.png",
        name: "kem que dừa tự nhiên",
        price: "15.800₫"
    },
    {
        id: 8,
        img: "img/ice-cream-que-52g-pho-mat_275x186.png",
        name: "kem que phomat tự nhiên ",
        price: "15.800₫"
    },
    {
        id: 9,
        img: "img/ice-cream-que-52g-sau_275x186.png",
        name: "kem que sầu riêng tự nhiên",
        price: "15.800₫"
    },
    {
        id: 10,
        img: "img/ice-cream-que-52g-socola_275x186.png",
        name: "kem que socola nguyên chất",
        price: "15.800₫"
    },
    {
        id: 11,
        img: "img/ice-cream-que-52g-vani_275x186.png",
        name: "kem que vanilla tự nhiên ",
        price: "15.800₫"
    },
    {       
        id: 12,
        img: "img/Kem-que-dau-275x186.png",
       name: "kem que dâu tự nhiên",
       price: "15.800₫"
   },
   {
    id: 13,
       img: "img/Kem-que-dau-xanh-275x186.png",
       name: "kem que đậu xanh tự nhiên ",
       price: "15.800₫"
   },
   {
    id: 14,
       img: "img/Kem-Caramel-Que-275x186.png",
       name: "kem que caramel cà phê muối tự nhiên",
       price: "15.800₫"
    },
    {       
        id: 15,
        img: "img/Kem-Oc-que-Dau_275x186.png",
       name: "kem ốc quế dâu-hương vanilla tự nhiên",
       price: "15.800₫"
   },
   {
    id: 16,
       img: "img/Kem-Oc-que-Socola_275x186.png",
       name: "kem ốc quế socola tự nhiên ",
       price: "15.800₫"
   },
   {
    id: 17,
       img: "img/Kem-Oc-que-Vanila_275x186.png",
       name: "kem ốc quế vanilla tự nhiên",
       price: "15.800₫"
   },
];
function showProduct() {
    let a = document.querySelector(".a");
    for(let item of listArrPost) {
        a.innerHTML +=
        `
        <div class="body">
        <div class="item">
            <img src="${item.img}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
        </div>
        `
    }
}
showProduct ()
