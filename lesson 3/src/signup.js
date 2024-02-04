
const dataUsers = JSON.parse(localStorage.getItem('dataUser'));


const signUp = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    let name = document.querySelector('.name').value;
    if (acc == '' || pass == '' || name == '') {
        alert('vui lòng nhập đầy đủ thông tin')
    } else {
        for (let user of dataUsers) {
            if (acc == user.name) {
                alert("tài khoản đã tồn tại");
                return;
            }
        }
        let userNew = {
            name,
            pass,
            acc,
            id: dataUsers.length + 1
        }
        dataUsers.push(userNew);
        localStorage.setItem("dataUser" , JSON.stringify(dataUsers))
    }
}