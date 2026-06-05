document.addEventListener("DOMContentLoaded", function () {

  const tours = [
    {
      ten: "Hồ Hoàn Kiếm",
      mien: "bac",
      diaDiem: "Hà Nội",
      gia: 1500000,
      giaText: "1.500.000 VNĐ",
      tg: "1-ngay",
      tgText: "1 ngày",
      khach: "10+",
      anh: "../images/hohoankiem/hohoankiem.jpg",
      link: "hohoankiem.html",
      moTa: "Dạo quanh Hồ Gươm, phố cổ Hà Nội, đền Ngọc Sơn.",
      tags: ["Phố cổ", "Văn hóa", "Check-in"],
      dv: ["an-uong", "huong-dan-vien", "xe-dua-don"],
      kw: "ho hoan kiem ha noi pho co"
    },

    {
      ten: "Vịnh Hạ Long",
      mien: "bac",
      diaDiem: "Quảng Ninh",
      gia: 4800000,
      giaText: "4.800.000 VNĐ",
      tg: "2n1d",
      tgText: "2N1Đ",
      khach: "15+",
      anh: "../images/halong/halong.jpg",
      link: "halong.html",
      moTa: "Du ngoạn trên vịnh, ngắm núi đá vôi và hang động kỳ vĩ.",
      tags: ["Du thuyền", "Biển đảo", "Hang động"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "vinh ha long quang ninh du thuyen hang dong"
    },

    {
      ten: "Sa Pa",
      mien: "bac",
      diaDiem: "Lào Cai",
      gia: 5200000,
      giaText: "5.200.000 VNĐ",
      tg: "3n2d",
      tgText: "3N2Đ",
      khach: "12+",
      anh: "../images/sapa/sapa.jpg",
      link: "sapa.html",
      moTa: "Khám phá ruộng bậc thang, bản làng và núi rừng Tây Bắc.",
      tags: ["Núi rừng", "Bản làng", "Săn mây"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "sa pa lao cai nui rung san may"
    },

    {
      ten: "Tràng An",
      mien: "bac",
      diaDiem: "Ninh Bình",
      gia: 1800000,
      giaText: "1.800.000 VNĐ",
      tg: "1-ngay",
      tgText: "1 ngày",
      khach: "10+",
      anh: "../images/trangan/trangan.jpg",
      link: "trangan.html",
      moTa: "Ngồi thuyền qua hang động, ngắm non nước hữu tình.",
      tags: ["Đi thuyền", "Hang động", "Non nước"],
      dv: ["an-uong", "huong-dan-vien", "xe-dua-don"],
      kw: "trang an ninh binh non nuoc hang dong"
    },

    {
      ten: "Sầm Sơn",
      mien: "trung",
      diaDiem: "Thanh Hóa",
      gia: 3200000,
      giaText: "3.200.000 VNĐ",
      tg: "2n1d",
      tgText: "2N1Đ",
      khach: "15+",
      anh: "../images/samson/samson.jpg",
      link: "samson.html",
      moTa: "Biển xanh, bãi cát dài, hải sản tươi.",
      tags: ["Biển", "Hải sản", "Nghỉ dưỡng"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "sam son thanh hoa bien hai san"
    },

    {
      ten: "Cố đô Huế",
      mien: "trung",
      diaDiem: "Thừa Thiên Huế",
      gia: 4500000,
      giaText: "4.500.000 VNĐ",
      tg: "3n2d",
      tgText: "3N2Đ",
      khach: "10+",
      anh: "../images/codohue/codohue.jpg",
      link: "tourcodohue.html",
      moTa: "Đại Nội, chùa Thiên Mụ và lăng vua Nguyễn.",
      tags: ["Di sản", "Cung đình", "Lịch sử"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "co do hue dai noi chua thien mu lang"
    },

    {
      ten: "Phố cổ Hội An",
      mien: "trung",
      diaDiem: "Quảng Nam",
      gia: 3800000,
      giaText: "3.800.000 VNĐ",
      tg: "2n1d",
      tgText: "2N1Đ",
      khach: "12+",
      anh: "../images/hoian/hoian.jpg",
      link: "hoian.html",
      moTa: "Phố cổ, đèn lồng và ẩm thực bên sông Hoài.",
      tags: ["Đèn lồng", "Phố cổ", "Ẩm thực"],
      dv: ["an-uong", "huong-dan-vien", "khach-san"],
      kw: "pho co hoi an quang nam den long"
    },

    {
      ten: "Bà Nà Hills",
      mien: "trung",
      diaDiem: "Đà Nẵng",
      gia: 5600000,
      giaText: "5.600.000 VNĐ",
      tg: "2n1d",
      tgText: "2N1Đ",
      khach: "15+",
      anh: "../images/banahills/banahills.jpg",
      link: "banahills.html",
      moTa: "Cầu Vàng, làng Pháp và cáp treo trên núi.",
      tags: ["Cầu Vàng", "Cáp treo", "Làng Pháp"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "ba na hills da nang cau vang cap treo"
    },

    {
      ten: "Đà Lạt",
      mien: "nam",
      diaDiem: "Lâm Đồng",
      gia: 4900000,
      giaText: "4.900.000 VNĐ",
      tg: "3n2d",
      tgText: "3N2Đ",
      khach: "12+",
      anh: "../images/dalat/dalat.jpg",
      link: "dalat.html",
      moTa: "Thành phố ngàn hoa, đồi thông và không khí se lạnh.",
      tags: ["Ngàn hoa", "Đồi thông", "Se lạnh"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "da lat lam dong ngan hoa doi thong"
    },

    {
      ten: "Phú Quốc",
      mien: "nam",
      diaDiem: "Kiên Giang",
      gia: 6800000,
      giaText: "6.800.000 VNĐ",
      tg: "4n3d",
      tgText: "4N3Đ",
      khach: "10+",
      anh: "../images/phuquoc/phuquoc.jpg",
      link: "tourphuquoc.html",
      moTa: "Đảo ngọc, tắm biển, chợ đêm và resort.",
      tags: ["Đảo ngọc", "Tắm biển", "Resort"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "phu quoc kien giang dao ngoc bien resort"
    },

    {
      ten: "Chợ nổi Cái Răng",
      mien: "nam",
      diaDiem: "Cần Thơ",
      gia: 3500000,
      giaText: "3.500.000 VNĐ",
      tg: "2n1d",
      tgText: "2N1Đ",
      khach: "15+",
      anh: "../images/chonoicairang/chonoicairang.jpg",
      link: "chonoicairang.html",
      moTa: "Sông nước miền Tây, chợ nổi và đặc sản.",
      tags: ["Sông nước", "Chợ nổi", "Đặc sản"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "cho noi cai rang can tho mien tay"
    },

    {
      ten: "Mũi Né",
      mien: "nam",
      diaDiem: "Bình Thuận",
      gia: 4200000,
      giaText: "4.200.000 VNĐ",
      tg: "3n2d",
      tgText: "3N2Đ",
      khach: "12+",
      anh: "../images/muine/muine.jpg",
      link: "muine.html",
      moTa: "Đồi cát bay, biển xanh và làng chài.",
      tags: ["Đồi cát", "Biển xanh", "Làng chài"],
      dv: ["an-uong", "huong-dan-vien", "khach-san", "xe-dua-don"],
      kw: "mui ne binh thuan doi cat bien lang chai"
    }
  ];

  const danhSach = document.getElementById("danhSach");
  const soTour = document.getElementById("soTour");
  const empty = document.getElementById("empty");
  const timKiem = document.getElementById("timKiem");
  const sapXep = document.getElementById("sapXep");
  const xoaLoc = document.getElementById("xoaLoc");

  function layCheckbox(className) {
    let arr = [];
    let list = document.querySelectorAll("." + className + ":checked");

    list.forEach(function (item) {
      arr.push(item.value);
    });

    return arr;
  }

  function kiemTraGia(gia, locGia) {
    if (locGia.length == 0) {
      return true;
    }

    if (locGia.includes("duoi-3") && gia < 3000000) {
      return true;
    }

    if (locGia.includes("3-5") && gia >= 3000000 && gia <= 5000000) {
      return true;
    }

    if (locGia.includes("tren-5") && gia > 5000000) {
      return true;
    }

    return false;
  }

  function taoTheTour(tour) {
    let tagHtml = "";

    tour.tags.forEach(function (tag) {
      tagHtml += `<span>${tag}</span>`;
    });

    let mienText = "Nam";

    if (tour.mien == "bac") {
      mienText = "Bắc";
    }

    if (tour.mien == "trung") {
      mienText = "Trung";
    }

    return `
      <a href="${tour.link}" class="card">
        <div class="card-img">
          <img src="${tour.anh}" alt="${tour.ten}">
          <span class="badge ${tour.mien}">Miền ${mienText}</span>
        </div>

        <div class="card-body">
          <div class="location">
            <i class="fa-solid fa-location-dot"></i> ${tour.diaDiem}
          </div>

          <h3>${tour.ten}</h3>
          <p>${tour.moTa}</p>

          <div class="tags">
            ${tagHtml}
          </div>

          <div class="meta">
            <span><i class="fa-regular fa-clock"></i> ${tour.tgText}</span>
            <span><i class="fa-solid fa-user-group"></i> ${tour.khach} khách</span>
          </div>

          <div class="price">
            <strong>${tour.giaText}</strong>
            <button type="button">Xem chi tiết</button>
          </div>
        </div>
      </a>
    `;
  }

  function hienThi(ds) {
    danhSach.innerHTML = "";

    ds.forEach(function (tour) {
      danhSach.innerHTML += taoTheTour(tour);
    });

    soTour.innerText = ds.length;

    if (ds.length == 0) {
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
    }
  }

  function locTour() {
    let tuKhoa = timKiem.value.toLowerCase().trim();

    let locMien = layCheckbox("loc-mien");
    let locGia = layCheckbox("loc-gia");
    let locTg = layCheckbox("loc-tg");
    let locDv = layCheckbox("loc-dv");

    let ketQua = tours.filter(function (tour) {
      let dungTen = tour.ten.toLowerCase().includes(tuKhoa);
      let dungDiaDiem = tour.diaDiem.toLowerCase().includes(tuKhoa);
      let dungTuKhoa = tour.kw.toLowerCase().includes(tuKhoa);

      let dungSearch = tuKhoa == "" || dungTen || dungDiaDiem || dungTuKhoa;
      let dungMien = locMien.length == 0 || locMien.includes(tour.mien);
      let dungGia = kiemTraGia(tour.gia, locGia);
      let dungTg = locTg.length == 0 || locTg.includes(tour.tg);

      let dungDv = true;

      locDv.forEach(function (dv) {
        if (!tour.dv.includes(dv)) {
          dungDv = false;
        }
      });

      return dungSearch && dungMien && dungGia && dungTg && dungDv;
    });

    if (sapXep.value == "gia-thap-cao") {
      ketQua.sort(function (a, b) {
        return a.gia - b.gia;
      });
    }

    if (sapXep.value == "gia-cao-thap") {
      ketQua.sort(function (a, b) {
        return b.gia - a.gia;
      });
    }

    hienThi(ketQua);
  }

  timKiem.addEventListener("input", locTour);
  sapXep.addEventListener("change", locTour);

  document.querySelectorAll("input[type='checkbox']").forEach(function (item) {
    item.addEventListener("change", locTour);
  });

  xoaLoc.addEventListener("click", function () {
    timKiem.value = "";
    sapXep.value = "mac-dinh";

    document.querySelectorAll("input[type='checkbox']").forEach(function (item) {
      item.checked = false;
    });

    locTour();
  });

  hienThi(tours);
});