function resetPassword(){

    let email =
        document.getElementById("email").value;

    let newPassword =
        document.getElementById("newPassword").value;

    let user =
        localStorage.getItem(email);

    if(user === null){

        alert("Email không tồn tại");

        return;
    }

    user = JSON.parse(user);

    user.password = newPassword;

    localStorage.setItem(
        email,
        JSON.stringify(user)
    );

    alert("Đổi mật khẩu thành công");

    window.location.href = "login.html";
}