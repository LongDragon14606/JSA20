let account = JSON.parse(localStorage.getItem("user")) 
let signup_login = document.querySelector(".Signup_login") 
if (account) {
    signup_login.innerHTML = `
    <h4>${account.tk}</h4>
    <button onclick="logout()" class="logout">Đăng Xuất</button>  
    `
} else {
    signup_login.innerHTML = `
    <li><a href="SignUp.html"><h4>Đăng Kí</h4></a></li>
    <li><a href="LogIn.html"><h4>Đăng Nhập</h4></a></li>
    `
}

const logout = () => {
    let check = window.confirm('Bạn muốn đăng xuất chứ ?')
    if (check) {
        localStorage.removeItem("user")
        window.location.href = 'Login.html'
    }
}

