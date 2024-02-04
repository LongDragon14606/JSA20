const signUp = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    let email = document.querySelector('.email').value;
    if (acc == '' || pass == '' || email == '') {
        alert('vui lòng nhập đầy đủ thông tin')
    } else {
        let userNew = {
            tk:acc,
            password:pass,
            Email:email,
            role:2
        }
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userNew)
        })
        window.location.href = `MainWeb.html`
    }
}