
function showSignup() {
    document.getElementById('form-container').innerHTML = `

        <h2>Đăng ký</h2>
        <input type="text" id="signup-username" placeholder="Tên người dùng">
        <input type="email" id="signup-email" placeholder="Email">
        <input type="password" id="signup-password" placeholder="Mật khẩu">
        <button onclick="signup()">Đăng ký</button>
        <a href="javascript:showLogin()">Đã có tài khoản? Đăng nhập</a>
    `;
}

function showLogin() {
    document.getElementById('form-container').innerHTML = `
        <h2>Đăng nhập</h2>
        <input type="text" id="login-username" placeholder="Tên người dùng hoặc email">
        <input type="password" id="login-password" placeholder="Mật khẩu">
        <button onclick="login()">Đăng nhập</button>
        <a href="javascript:showSignup()">Chưa có tài khoản? Đăng ký</a>
    `;
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Lấy thông tin người dùng từ local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html'; // Chuyển hướng đến trang index.html
    } else {
        alert('Tên người dùng hoặc mật khẩu không đúng!');
    }
}

function signup() {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (username && email && password) {
        // Lưu thông tin người dùng vào local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Đăng ký thành công!');
        showLogin();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}
document.getElementById("closeBtn").addEventListener("click", function() {
    // Ẩn form
    document.getElementById("form-container").style.display = "none";
    // Chuyển hướng tới trang index
    window.location.href = "index.html";
});