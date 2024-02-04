const showSanpham = () => {
    let app = document.querySelector('.item');
    if (app) {
        fetch('http://localhost:3000/product')
        .then(response => response.json())
        .then((data) => {
            for (let item of data ) {
                app.innerHTML += `
                    <tr>
                        <th scope="col">#</th>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><a href="capnhat.html?id=${item.id}"<button>Cập Nhật</button></a></td>
                        <td><button onClick="deleteSanpham(${item.id})">Xóa</button></td>
                    </tr>
                `
            }
        })
    }
}
showSanpham()

const addSanpham = () => {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    fetch(`http://localhost:3000/product`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            'name':`${name}`,
            'price':`${price}`
        })
    });
}

const updateSanpham1 = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
        let app = document.querySelector('.app')
        fetch(`http://localhost:3000/product/${id}`)
            .then(response => response.json())
            .then((data) => {
                app.innerHTML = `
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control name" id="exampleInputEmail1" aria-describedby="emailHelp" value='${data.name}'>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="number" class="form-control price" id="exampleInputPassword1" value='${data.price}'> 
                </div>
                <button type="submit" class="btn btn-primary" onClick='updateSanpham2()'>Cập Nhật</button>
            `
        })
    }
}
updateSanpham1()

const updateSanpham2 = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({name : name, price : price})
    })
    window.location.href = 'index.html'
}

const deleteSanpham = (id) => {
    let check = window.confirm('Bạn có chắc là muốn xóa ko ?')
    if (check) {
        fetch(`http://localhost:3000/product/${id}` , {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        alert("Đã xóa thành công")
    }
}