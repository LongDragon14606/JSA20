console.log("dsgarg")
console.log();
// document.write()
// biến là nơi chứa các giá trị/value
// kiểu khai báo biến trong js
// var , let , const ( ko dùng var)
// do var có vùng hoạt động toàn cầu ( có vùng hoạt động rộng )
// let : có vùng hoạt động nội bộ
// const : hằng số là 1 số ko thể thay đổi đc và có vùng hoạt động như let 
let number = 10 
console.log(number);
number = 20
console.log(number);
// = là phép gán trong js
const numberB = 10;
console.log("đây là const=" + number);

// các kiểu toán tử

// toán tử số học : +,-,*,/,%
console.log(5%2);
// toán tử so sánh : <,>,=,>=,<=,==
// toán tử logic : and (&&) , or (||) , not (!)


//tính thế kỉ của năm 2023 bất kì 
let n = 2023;
console.log((n+99)/100);


// data type : 
// number , string , boolean , null , undefined
let b;
console.log(b);
// array , obj : rất mạnh , trong arr và obj có thể chứa đc tất cả các kiểu dữ liệu trên kể cả là chính nó 

let arr = []
// dùng dấu ngoặc vuông để khai báo 1 mảng
// các giá trị trong mảng cách nhau bởi 1 dấu phẩy





arr = [1,2,3,4,"ho's le", true]
console.log(arr);
// để lấy được từng giá trị trong mảng , sử dụng index của mảng để lấy giá trị 
// index của 1 mảng bắt đầu từ số 0 
console.log(arr[4]);
// độ dài của mảng
// độ dài của mảng sẽ bắt đầu từ 1
// index | vị trí của mảng bắt đầu từ 0
console.log(arr.length);



//obj : vật thể hoặc đối tượng
//để định nghĩa OBJ ta sử dụng dấu {}
//với mỗi giá trị của OBj sẽ gồm 2 phần là key : value
//mỗi giá trị của OBj cách nhau bời 1 dấu phẩy

// tạo ra 1 OBJ là 1 sản phẩm tùy thích gồm có 5 giá trị
let aophong = {
    price : 100,
    name: "3 lỗ"
}
let nerfgun = {
    price : 150,
    type : "rifle",
    numberAmmo : 20,
    material : "nhựa",
    color : "yellow"
}
console.log(nerfgun);
//quy tắc đặt tên
    // - đặt tên tiếng anh
    // - nếu đặt bằng tiếng việt thì ghi thường ko dấu , ko dấu cách , ko dấu 
// vd : đối với từ đơn : number price | cách 1 : number-price
                                     //    | cách 2 : numberPrice
console.log(nerfgun.type);

let A = {
    price : 100,
    name : "iphone x",
    sale : 30,
    color : "black",
    kg : 500
}                      
let sum = A.price* A.sale/100
console.log(sum);