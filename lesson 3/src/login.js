const dataUser = [
    {
        id: 1,
        name: 'random',
        acc: 'random12',
        pass: 123456799
    }
];

const localUser = JSON.parse(localStorage.getItem('dataUser'));

if (localUser == null) {
    localStorage.setItem('dataUser', JSON.stringify(dataUser));
}

const Login = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    for (let user of localUser) {
        if (acc == user.acc && pass == user.pass) {
            localStorage.setItem("idUser", user.id);
            alert('Đăng nhập thành công');
            window.location.href = 'signup.html';
            return;
        }
    }
    alert('Đăng nhập thất bại');
}