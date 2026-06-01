const danhSachDuLieuTour = [
    {
        ten: "Hồ Hoàn Kiếm",
        mien: "bac",
        nhanMien: "Miền Bắc",
        diaDiem: "Hà Nội",
        gia: 1500000,
        giaHienThi: "1.500.000 VNĐ",
        thoiGian: "1-ngay",
        thoiGianHienThi: "1 ngày",
        soKhach: "10+ khách",
        anh: "../images/tour/hohoankiem.jpg",
        link: "tour-ho-hoan-kiem.html",
        moTa: "Dạo quanh Hồ Gươm, phố cổ Hà Nội, đền Ngọc Sơn và cảm nhận nét đẹp cổ kính giữa thủ đô.",
        dacTrung: ["Phố cổ", "Văn hóa", "Check-in"],
        dichVu: ["an-uong", "huong-dan-vien", "xe-dua-don"],
        tuKhoa: "ho hoan kiem ha noi pho co den ngoc son"
    },
    {
        ten: "Vịnh Hạ Long",
        mien: "bac",
        nhanMien: "Miền Bắc",
        diaDiem: "Quảng Ninh",
        gia: 4800000,
        giaHienThi: "4.800.000 VNĐ",
        thoiGian: "2n1d",
        thoiGianHienThi: "2 ngày 1 đêm",
        soKhach: "15+ khách",
        anh: "../images/tour/halong.jpg",
        link: "tour-vinh-ha-long.html",
        moTa: "Du ngoạn trên vịnh, ngắm núi đá vôi, hang động kỳ vĩ và cảnh sắc biển đảo nổi tiếng.",
        dacTrung: ["Du thuyền", "Biển đảo", "Hang động"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "vinh ha long quang ninh du thuyen hang dong bien dao"
    },
    {
        ten: "Sa Pa",
        mien: "bac",
        nhanMien: "Miền Bắc",
        diaDiem: "Lào Cai",
        gia: 5200000,
        giaHienThi: "5.200.000 VNĐ",
        thoiGian: "3n2d",
        thoiGianHienThi: "3 ngày 2 đêm",
        soKhach: "12+ khách",
        anh: "../images/tour/sapa.jpg",
        link: "tour-sa-pa.html",
        moTa: "Khám phá ruộng bậc thang, bản làng vùng cao, khí hậu mát lạnh và núi rừng Tây Bắc.",
        dacTrung: ["Núi rừng", "Bản làng", "Săn mây"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "sa pa lao cai nui rung san may ruong bac thang"
    },
    {
        ten: "Tràng An",
        mien: "bac",
        nhanMien: "Miền Bắc",
        diaDiem: "Ninh Bình",
        gia: 1800000,
        giaHienThi: "1.800.000 VNĐ",
        thoiGian: "1-ngay",
        thoiGianHienThi: "1 ngày",
        soKhach: "10+ khách",
        anh: "../images/tour/trangan.jpg",
        link: "tour-trang-an.html",
        moTa: "Ngồi thuyền len qua hang động, ngắm non nước hữu tình và vẻ đẹp yên bình của cố đô.",
        dacTrung: ["Đi thuyền", "Hang động", "Non nước"],
        dichVu: ["an-uong", "huong-dan-vien", "xe-dua-don"],
        tuKhoa: "trang an ninh binh non nuoc hang dong di thuyen"
    },
    {
        ten: "Sầm Sơn",
        mien: "trung",
        nhanMien: "Miền Trung",
        diaDiem: "Thanh Hóa",
        gia: 3200000,
        giaHienThi: "3.200.000 VNĐ",
        thoiGian: "2n1d",
        thoiGianHienThi: "2 ngày 1 đêm",
        soKhach: "15+ khách",
        anh: "../images/tour/samson.jpg",
        link: "tour-sam-son.html",
        moTa: "Tận hưởng biển xanh, bãi cát dài, hải sản tươi ngon và không khí nghỉ dưỡng sôi động.",
        dacTrung: ["Biển", "Hải sản", "Nghỉ dưỡng"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "sam son thanh hoa bien hai san nghi duong"
    },
    {
        ten: "Cố đô Huế",
        mien: "trung",
        nhanMien: "Miền Trung",
        diaDiem: "Thừa Thiên Huế",
        gia: 4500000,
        giaHienThi: "4.500.000 VNĐ",
        thoiGian: "3n2d",
        thoiGianHienThi: "3 ngày 2 đêm",
        soKhach: "10+ khách",
        anh: "../images/tour/hue.jpg",
        link: "tour-co-do-hue.html",
        moTa: "Tham quan Đại Nội, chùa Thiên Mụ, lăng vua Nguyễn và khám phá văn hóa cung đình.",
        dacTrung: ["Di sản", "Cung đình", "Lịch sử"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "co do hue dai noi chua thien mu lang tam"
    },
    {
        ten: "Phố cổ Hội An",
        mien: "trung",
        nhanMien: "Miền Trung",
        diaDiem: "Quảng Nam",
        gia: 3800000,
        giaHienThi: "3.800.000 VNĐ",
        thoiGian: "2n1d",
        thoiGianHienThi: "2 ngày 1 đêm",
        soKhach: "12+ khách",
        anh: "../images/tour/hoian.jpg",
        link: "tour-hoi-an.html",
        moTa: "Dạo bước trong phố cổ, ngắm đèn lồng, thưởng thức ẩm thực và nét đẹp hoài cổ bên sông Hoài.",
        dacTrung: ["Đèn lồng", "Phố cổ", "Ẩm thực"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san"],
        tuKhoa: "pho co hoi an quang nam den long am thuc song hoai"
    },
    {
        ten: "Bà Nà Hills",
        mien: "trung",
        nhanMien: "Miền Trung",
        diaDiem: "Đà Nẵng",
        gia: 5600000,
        giaHienThi: "5.600.000 VNĐ",
        thoiGian: "2n1d",
        thoiGianHienThi: "2 ngày 1 đêm",
        soKhach: "15+ khách",
        anh: "../images/tour/banahills.jpg",
        link: "tour-ba-na-hills.html",
        moTa: "Khám phá Cầu Vàng, làng Pháp, cáp treo và không gian nghỉ dưỡng nổi bật trên đỉnh núi.",
        dacTrung: ["Cầu Vàng", "Cáp treo", "Làng Pháp"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "ba na hills da nang cau vang cap treo lang phap"
    },
    {
        ten: "Đà Lạt",
        mien: "nam",
        nhanMien: "Miền Nam",
        diaDiem: "Lâm Đồng",
        gia: 4900000,
        giaHienThi: "4.900.000 VNĐ",
        thoiGian: "3n2d",
        thoiGianHienThi: "3 ngày 2 đêm",
        soKhach: "12+ khách",
        anh: "../images/tour/dalat.jpg",
        link: "tour-da-lat.html",
        moTa: "Khám phá thành phố ngàn hoa, đồi thông, khí hậu se lạnh và những điểm check-in lãng mạn.",
        dacTrung: ["Ngàn hoa", "Đồi thông", "Se lạnh"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "da lat lam dong ngan hoa doi thong ho xuan huong"
    },
    {
        ten: "Phú Quốc",
        mien: "nam",
        nhanMien: "Miền Nam",
        diaDiem: "Kiên Giang",
        gia: 6800000,
        giaHienThi: "6.800.000 VNĐ",
        thoiGian: "4n3d",
        thoiGianHienThi: "4 ngày 3 đêm",
        soKhach: "10+ khách",
        anh: "../images/tour/phuquoc.jpg",
        link: "tour-phu-quoc.html",
        moTa: "Nghỉ dưỡng tại đảo ngọc, tắm biển, khám phá chợ đêm, cáp treo và các khu vui chơi nổi tiếng.",
        dacTrung: ["Đảo ngọc", "Tắm biển", "Resort"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "phu quoc kien giang dao ngoc bien resort"
    },
    {
        ten: "Chợ nổi Cái Răng",
        mien: "nam",
        nhanMien: "Miền Nam",
        diaDiem: "Cần Thơ",
        gia: 3500000,
        giaHienThi: "3.500.000 VNĐ",
        thoiGian: "2n1d",
        thoiGianHienThi: "2 ngày 1 đêm",
        soKhach: "15+ khách",
        anh: "../images/tour/chonoicairang.jpg",
        link: "tour-cho-noi-cai-rang.html",
        moTa: "Trải nghiệm văn hóa sông nước miền Tây, đi thuyền tham quan chợ nổi và thưởng thức đặc sản.",
        dacTrung: ["Sông nước", "Chợ nổi", "Đặc sản"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "cho noi cai rang can tho mien tay song nuoc"
    },
    {
        ten: "Mũi Né",
        mien: "nam",
        nhanMien: "Miền Nam",
        diaDiem: "Bình Thuận",
        gia: 4200000,
        giaHienThi: "4.200.000 VNĐ",
        thoiGian: "3n2d",
        thoiGianHienThi: "3 ngày 2 đêm",
        soKhach: "12+ khách",
        anh: "../images/tour/muine.jpg",
        link: "tour-mui-ne.html",
        moTa: "Khám phá đồi cát bay, biển xanh, làng chài và khung cảnh nắng gió đặc trưng của miền biển.",
        dacTrung: ["Đồi cát", "Biển xanh", "Làng chài"],
        dichVu: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
        tuKhoa: "mui ne binh thuan doi cat bay bien lang chai"
    }
];

const danhSachTour = document.getElementById("danhSachTour");
const timKiemTour = document.getElementById("timKiemTour");
const tatCaCheckbox = document.querySelectorAll("input[type='checkbox']");
const soTour = document.getElementById("soTour");
const khongCoTour = document.getElementById("khongCoTour");
const xoaLoc = document.getElementById("xoaLoc");
const sapXepTour = document.getElementById("sapXepTour");

let danhSachDangDung = [...danhSachDuLieuTour];

function taoTheTour(tour) {
    return `
        <a href="${tour.link}" class="the-tour"
           data-mien="${tour.mien}"
           data-gia="${tour.gia}"
           data-thoi-gian="${tour.thoiGian}"
           data-dich-vu="${tour.dichVu.join(",")}"
           data-ten="${tour.tuKhoa}">

            <div class="anh-tour">
                <img src="${tour.anh}" alt="Tour ${tour.ten}">
                <span class="nhan-tour mien-${tour.mien}">${tour.nhanMien}</span>
                <i class="fa-regular fa-heart tim-tour"></i>
            </div>

            <div class="noi-dung-the-tour">
                <div class="vi-tri-tour">
                    <i class="fa-solid fa-location-dot"></i>
                    ${tour.diaDiem}
                </div>

                <h3>${tour.ten}</h3>

                <p>${tour.moTa}</p>

                <div class="dac-trung-tour">
                    ${tour.dacTrung.map(item => `<span>${item}</span>`).join("")}
                </div>

                <div class="thong-tin-ngan">
                    <span><i class="fa-regular fa-clock"></i> ${tour.thoiGianHienThi}</span>
                    <span><i class="fa-solid fa-user-group"></i> ${tour.soKhach}</span>
                </div>

                <div class="gia-tour">
                    <strong>${tour.giaHienThi}</strong>
                    <button type="button">Xem chi tiết</button>
                </div>
            </div>
        </a>
    `;
}

function hienThiTour(danhSach) {
    danhSachTour.innerHTML = danhSach.map(taoTheTour).join("");
}

function layGiaTriDaChon(className) {
    return Array.from(document.querySelectorAll("." + className + ":checked"))
        .map(checkbox => checkbox.value);
}

function kiemTraGia(giaTour, danhSachGiaDaChon) {
    if (danhSachGiaDaChon.length === 0) {
        return true;
    }

    return danhSachGiaDaChon.some(mucGia => {
        if (mucGia === "duoi-3") {
            return giaTour < 3000000;
        }

        if (mucGia === "3-5") {
            return giaTour >= 3000000 && giaTour <= 5000000;
        }

        if (mucGia === "tren-5") {
            return giaTour > 5000000;
        }

        return true;
    });
}

function locTour() {
    const tuKhoa = timKiemTour.value.toLowerCase().trim();

    const mienDaChon = layGiaTriDaChon("loc-mien");
    const giaDaChon = layGiaTriDaChon("loc-gia");
    const thoiGianDaChon = layGiaTriDaChon("loc-thoi-gian");
    const dichVuDaChon = layGiaTriDaChon("loc-dich-vu");

    const ketQua = danhSachDangDung.filter(tour => {
        const dungTuKhoa =
            tour.ten.toLowerCase().includes(tuKhoa) ||
            tour.diaDiem.toLowerCase().includes(tuKhoa) ||
            tour.tuKhoa.toLowerCase().includes(tuKhoa);

        const dungMien =
            mienDaChon.length === 0 ||
            mienDaChon.includes(tour.mien);

        const dungGia =
            kiemTraGia(tour.gia, giaDaChon);

        const dungThoiGian =
            thoiGianDaChon.length === 0 ||
            thoiGianDaChon.includes(tour.thoiGian);

        const dungDichVu =
            dichVuDaChon.length === 0 ||
            dichVuDaChon.every(dichVu => tour.dichVu.includes(dichVu));

        return dungTuKhoa && dungMien && dungGia && dungThoiGian && dungDichVu;
    });

    hienThiTour(ketQua);
    soTour.textContent = ketQua.length;

    if (ketQua.length === 0) {
        khongCoTour.style.display = "block";
    } else {
        khongCoTour.style.display = "none";
    }
}

function sapXepDanhSachTour() {
    const kieuSapXep = sapXepTour.value;

    danhSachDangDung = [...danhSachDuLieuTour];

    if (kieuSapXep === "gia-thap-cao") {
        danhSachDangDung.sort((a, b) => a.gia - b.gia);
    }

    if (kieuSapXep === "gia-cao-thap") {
        danhSachDangDung.sort((a, b) => b.gia - a.gia);
    }

    locTour();
}

timKiemTour.addEventListener("input", locTour);

tatCaCheckbox.forEach(checkbox => {
    checkbox.addEventListener("change", locTour);
});

sapXepTour.addEventListener("change", sapXepDanhSachTour);

xoaLoc.addEventListener("click", function () {
    timKiemTour.value = "";

    tatCaCheckbox.forEach(checkbox => {
        checkbox.checked = false;
    });

    sapXepTour.value = "mac-dinh";
    danhSachDangDung = [...danhSachDuLieuTour];

    locTour();
});

hienThiTour(danhSachDuLieuTour);
locTour();