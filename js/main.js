function timKiemTour(){
    let diaDiem = document.querySelector(
        '.hop-tim-kiem input[type="text"]'
    ).value;

    if(diaDiem.trim() === ""){
        alert("Vui lòng nhập điểm đến!");
        return;
    }

    alert("Đang tìm tour đến: " + diaDiem);
}

document.getElementById("btnTimKiem")
        .addEventListener("click", timKiemTour);