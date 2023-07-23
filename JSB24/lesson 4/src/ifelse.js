//if else : câu lệnh kiểm tra diều kiện

// công thức : if (đk) {cv}

// let a = 10
// let b = 20

//nếu a < b thì hiện thị hello 
//nếu a > b thì hiển thị bye
// console.log("bye");
// console.log("hello");

// if (a<b) {
//     console.log("hello");
// }


// if (a>b) {
//     console.log("bye");
// }
//chỉ thực hiện công việc có đk đúng hoặc thỏa mãn

//cho 3 điểm toán , văn , anh tự nhập
//tính trung bình cộng 3 điểm đó và hiển thị học lực kém nếu tbc<5 và học lực giỏi nếu tbc>=5

// let toan = 6.5
// let van = 5.75 
// let anh = 8.7
// let TBC = (toan+van+anh) /3
// if (TBC<5) {
//     console.log("học lực kém");
// }
// if (TBC>=5) {
//     console.log("học lực giỏi");
// }
//else là ngược lại
// công thức : if (đk) {cv1}
            // else {cv2}
// if (TBC>5) {
//     console.log("kém");
// } else {
//     console.log(giỏi);
// }


//if else if else 

// if (dk1) {cv1}
// elseif (dk2) {cv2}
// else {cv3}

// nếu điều kiện nào đúng thì thực hiện công việc đó và bỏ qua tất cả các dk và cv còn lại 
// nếu ko có dk nào đúng thì thực hiện else

//cho 3 điểm toán , văn , anh tự nhập
//tính trung bình cộng 3 điểm đó và hiển thị học lực
let toan = 5.2
let van = 5.5 
let anh = 7.4
let TBC = (toan+van+anh) /3
if (TBC >0 && TBC <=3) {
    console.log("kém");
} else if (TBC >3 && TBC <= 6) {
    console.log("khá");
} else if (TBC >6 && TBC <=  10) {
    console.log("giỏi");
} else { 
    console.log("lỗi");
}