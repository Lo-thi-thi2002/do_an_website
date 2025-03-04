document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const confirmPasswordDiv = document.getElementById('confirmPasswordDiv');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
  
    let isRegistering = false; // Trạng thái đăng ký
  
    registerButton.addEventListener('click', function() {
      if (!isRegistering) {
        // Chuyển sang chế độ đăng ký
        isRegistering = true;
        loginButton.textContent = 'Đăng ký';
        registerButton.textContent = 'Hủy';
        confirmPasswordDiv.style.display = 'block'; // Hiển thị trường xác nhận mật khẩu
      } else {
        // Hủy chế độ đăng ký
        isRegistering = false;
        loginButton.textContent = 'Đăng nhập';
        registerButton.textContent = 'Đăng ký';
        confirmPasswordDiv.style.display = 'none'; // Ẩn trường xác nhận mật khẩu
      }
    });
  
    authForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (isRegistering) {
        // Xử lý đăng ký
        const confirmPassword = confirmPasswordInput.value;
  
        if (password !== confirmPassword) {
          alert('Mật khẩu không khớp!');
          return;
        }
  
        // Lưu thông tin người dùng vào localStorage
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
  
        // Chuyển sang chế độ đăng nhập
        isRegistering = false;
        loginButton.textContent = 'Đăng nhập';
        registerButton.textContent = 'Đăng ký';
        confirmPasswordDiv.style.display = 'none';
  
        alert('Đăng ký thành công! Vui lòng đăng nhập.');
  
      } else {
        // Xử lý đăng nhập
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const storedPassword = users[username];
  
        if (storedPassword && storedPassword === password) {
          // Đăng nhập thành công
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', username);
          window.location.href = 'index.html';
        } else {
          // Đăng nhập thất bại
          alert('Tên đăng nhập hoặc mật khẩu không đúng.');
        }
      }
    });
  
    // Ẩn/hiện mật khẩu
    togglePassword.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.innerHTML = '&#128064;';
      } else {
        passwordInput.type = 'password';
        togglePassword.innerHTML = '&#128065;';
      }
    });
  
    // Ẩn/hiện mật khẩu xác nhận
    toggleConfirmPassword.addEventListener('click', function() {
      if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleConfirmPassword.innerHTML = '&#128064;';
      } else {
        confirmPasswordInput.type = 'password';
        toggleConfirmPassword.innerHTML = '&#128065;';
      }
    });
  });
//   nút đóng form
document.getElementById("closeBtn").addEventListener("click", function() {
    // Ẩn form
    document.getElementById("form-container").style.display = "none";
    // Chuyển hướng tới trang index
    window.location.href = "index.html";
});