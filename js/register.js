document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let agree = document.getElementById("agree").checked;

    if(fullname === "" || email === "" || phone === "" || password === ""){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if(password !== confirmPassword){
        alert("Mật khẩu không khớp");
        return;
    }

    if(!agree){
        alert("Vui lòng đồng ý điều khoản");
        return;
    }

    let user = {
        fullname,
        email,
        phone,
        password
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Đăng ký thành công");

    window.location.href = "login.html";
});