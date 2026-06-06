function dangnhap(){

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if(email === "admin@gmail.com" && password === "123456"){
        alert("Đăng nhập thành công!");

        window.location.href = "index.html";
    }
    else{
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}