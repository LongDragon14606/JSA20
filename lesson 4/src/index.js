// READ 
// b1  : tạo data  

const dataProduct = [
    {
        id: 1,
        name: 'Product 1',
        price: 10000
    },
    {
        id: 1,
        name: 'Product 1',
        price: 10000
    },
    {
        id: 1,
        name: 'Product 1',
        price: 10000
    }
];
// b2 : lấy dữ liệu  lên local
const dataProducts = JSON.parse(localStorage.getItem('dataProduct'));
// b3 : kiểm tra dữ liệ xem trên local đã có chưa
//   + có rồi : bỏ qua
//   + chưa có : thì đẩy dữ liệu lên
if (dataProducts == null) localStorage.setItem('dataProduct', JSON.stringify(dataProduct));
console.log(dataProducts);
// b4 : làm tính năng read 

const showProducts = () => {
    // liên kết đến html
    let show = document.querySelector('.show');
    // thêm dữ liệ vào show
    let index = 0

    if (show) {
        show.innerHTML='';
        for (let product of dataProducts) {
            show.innerHTML += `
                <tr>
                    <th scope="row">${index++}</th>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <button type="button" onClick="removeProduct"(${product.id}>DELETE</button>
                    </td>
                </tr>
            `
        }
    }
}
showProducts(dataProduct);

// ADD PRODUCT

const addProduct = (e) => {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    //tạo ra 1 obj mới
    let newObj = {
        price,
        name,
        id: dataProducts.length + 1
    }
    console.log(newObj);
    dataProducts.push(newObj);
    //đẩy mảng mới thêm lên local
    localStorage.setItem('dataProduct', JSON.stringify(dataProducts));
    window.location.href = 'index.html';
}

const removeProduct = (id) => {
    let check = window.confirm = 'index.html';
    if (check) {
        let data = JSON.parse(localStorage.getItem('dataProduct'))
        let dataFilter = data.filter((item),dataProduct)

    }
}

// UPDATE PRODUCT

const updateProduct = () => {
    // lấy được id từ url
    let id = new URLSearchParams(window.location.search).get('id');
    let update = document.querySelector('.update');
    if (update) {
        let name = document.querySelector('.name').value;
        let price = document.querySelector('.price').value;
        let newObj = {
            price,
            name,
            id
        }
        updateDataa = dataProducts.map((item) => item.id == newObj.id ? newObj : item)
        localStorage.setItem('dataProduct',JSON.stringify(updateData));
        window.location.href = 'index.html';
    }
}    
const showUpdate = () => {
    let id = new URLSearchParams(window.location.search).get('id');
    let update = document.querySelector('.update')
    if (update) {
        let name = document.querySelector('.name');
        let price = document.querySelector('.price');
         // lọc ra 1 obj có trùng id với id đã truyền lên url
        let data = dataProduct.find((item) => item.id == id);
        //hiển thị giá trị ra màn hình 
        name.value = data.name;
        price.value = data.price
    }
}
showUpdate()