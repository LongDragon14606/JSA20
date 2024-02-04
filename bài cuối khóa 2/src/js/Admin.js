let check = JSON.parse(localStorage.getItem('user'));

if ((check?.role !== 1) || check == null) {
    let app = document.querySelector('.app');
    app.innerHTML = ' 404 Not Found'
};

const show = () => {
    let app = document.querySelector('.item');
    if (app) {
        fetch('http://localhost:3000/product')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                for (let item of data) {
                    app.innerHTML += `
                    <tr>
                        <th scope="row">1</th>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><button onClick="deleteProduct(${item.id})">Xóa</button></td>
                        <td><a href="update.html?id=${item.id}"><button>Cập Nhật</button></a></td>
                    </tr>`
                }
            })
    }
}
show()

const addProduct = () => {
    let name = document.querySelector('.card-title').value;
    let price = document.querySelector('.card-text').value;
    fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            'name': `${name}`,
            'price': `${price}`
        })
    });
}

const deleteProduct = (id) => {
    let check = window.confirm("bạn có muốn xóa");
    if (check) {
        fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        alert("đã xóa thành công")
    }
}

const showProductById = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
        let app = document.querySelector('.app');
        fetch(`http://localhost:3000/product/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.name);
                app.innerHTML = `
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm</label>
                    <input type="text" class="form-control name" id="exampleInputEmail1" value='${data.name}'>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Giá Tiền</label>
                    <input type="number" class="form-control price" id="exampleInputPassword1" value=${data.price}>
                </div>
                <button type="submit" class="btn btn-primary" onClick='updateProduct()'>Xác Nhận Cập Nhật</button>
                `
            })
    }
}
showProductById()

const updateProduct = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const name = document.querySelector('.card-title').value;
    const price = document.querySelector('.card-text').value;
    fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ name: name, price: price })
    })
    window.location.href = 'Admin.html'
}