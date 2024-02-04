let test = {
    name : 'asdgarkmfgvd',
    age : '34'
}

let arr = [1,2,3,4,5];
console.log(arr)
arr.push(test)
console.log("new array",arr);

// local storage 


//localStorage.setItem() // truyền vào 2 tham số , dùng để tạo ra giá trị trên local
//localStorage.getItem() // truyền vào 1 tham số là key , dùng để lấy giá trị từ trên local xuống
//localStorage.removeItem() // truyền vào 1 tham số là key , dùng để xóa dữ liệu đó đi
//localStorage.clear() // xóa toàn bộ local

//giá trị của local ko nhận 1 obj
//sử dụng JSON.stringify để dịch ngược chuỗi trên
//chuyển đổi từ kiểu obj sang string
localStorage.setItem("product" , JSON.stringify(test))


//sử dụng JSON.parse để chuyển đổi từ string sang obj
let data = JSON.parse(localStorage.getItem("product"))
console.log(data);

localStorage.removeItem("product")

localStorage.clear() // dùng để xóa đi tất cả


localStorage.setItem("detail" , 25)


let text = 