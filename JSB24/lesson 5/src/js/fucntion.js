// fuction là j]gì ?
// là chức năng hoặc là 1 hàm dùng để thực hiện 1 công việc nào đó 

// gọi và sử dụng function 
// tạo function

// function tong() {
//         let a = 10;
//         let b = 20;
//         console.log(a+b);
//}

//gọi function

// tong();


//các kiểu function : gồm 4 kiểu
//{} được gọi là block code
//cách nhận biết nếu trong () có ghi 1 biến nào đó thì là có truyền vào
    // để nhận biết giá trị trả về ta dựa vào câu lệnh return
     
//kiểu 1 : ko có giá trị truyền vào và trả về 
//kiểu 2 : ko có giá trị truyền vào nhưng có giá trị trả về
//kiểu 3 : có giá trị truyền vào nhưng ko có giá trị trả về
//kiểu 4 : có giá trị truyền vào có giá trị trả về

// khi nào sử dụng
    //truyền vào : khi muốn tái sử dụng code

// function tong(a,b) {
//     return a+b ;
// }
// let a = 10 ; 
// let b = 20

    ///trả về : khi muốn dùng kết quả để tính toán tiếp
    //NaN : lỗi kiểu dữ liệu  
    // console.log(tong(a,b)+20);



//==; ===
//đối vời dấu == thì chỉ so sánh về mặt hiển thị 
let z = 3
let c = "3"
if (c==z) {
    console.log("haha");
}
if (c===z) {
    console.log("haha");
}