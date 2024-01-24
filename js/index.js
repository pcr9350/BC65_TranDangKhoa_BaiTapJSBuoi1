/* --------------------------- BÀI TẬP 1 ---------------------------- */
/* 1. ĐẦU VÀO: 
+ Tiền lương một ngày: 100.000 vnđ
+ Số ngày làm
+ Tiền lương nhận được */

/* 2. XỬ LÝ 
 + CÔNG THỨC TÍNH TIỀN LƯƠNG = SỐ NGÀY LÀM * LƯƠNG MỘT NGÀY */

var luongNgay = 100000;
var ngayLamViec = 12;
var tienLuong = luongNgay * ngayLamViec;
tienLuong = tienLuong.toLocaleString('vi', {style : 'currency', currency : 'VND'});

// 3. XUẤT DỮ LIỆU 
console.log("1. Tiền Lương: ", tienLuong);

/* --------------------------- BÀI TẬP 2 ---------------------------- */
/* 1. ĐẦU VÀO:
+ 5 SỐ THỰC: number1, number2, number3, number4, number5
+ SỐ TRUNG BÌNH CỦA NĂM SỐ THỰC

2. XỬ LÝ:
+ CÔNG THỨC TÍNH SỐ TRUNG BÌNH = TỔNG 5 SỐ THỰC / 5 
*/
var number1 = 56;
var number2 = 61;
var number3 = 8;
var number4 = 36;
var number5 = 77;

var soTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;

// 3. XUẤT DỮ LIỆU: 
console.log("2. Số trung bình của 5 số thực: ", soTrungBinh);

/* --------------------------- BÀI TẬP 3 ---------------------------- */
/* 1. ĐẦU VÀO:
+ TỈ GIÁ USD: 23.500 VNĐ
+ NHẬP VÔ SỐ TIỀN USD: soTienUsd
+ Số tiền VNĐ qui đổi được

2. XỬ LÝ:
+ CÔNG THỨC TÍNH TIỀN VNĐ = SỐ TIỀN USD * TỈ GIÁ USD
*/
var tiGiaUsd = 23500;
var soTienUsd = 564;
var soTienViet = soTienUsd * tiGiaUsd;
soTienViet = soTienViet.toLocaleString('vi', {style : 'currency', currency : 'VND'});

// 3. XUẤT DỮ LIỆU 
console.log("3. Số tiền Việt qui đổi: ", soTienViet);

/* --------------------------- BÀI TẬP 4 ---------------------------- */
/* 1. ĐẦU VÀO:
+ CHIỀU RỘNG HÌNH CHỮ NHẬT
+ CHIỀU DÀI HÌNH CHỮ NHẬT
+ CHU VI HÌNH CHỮ NHẬT
+ DIỆN TÍCH HÌNH CHỮ NHẬT

2. XỬ LÝ:
CÔNG THỨC TÍNH CHU VI HÌNH CHỮ NHẬT = (CHIỀU RỘNG + CHIỀU DÀI) * 2
CÔNG THỨC TÍNH DIỆN TÍCH HÌNH CHỮ NHẬT = CHIỀU RỘNG * CHIỀU DÀI
*/
var chieuRong = 6;
var chieuDai = 44;
var chuViHinhChuNhat = (chieuRong + chieuDai) * 2;
var dienTichHinhChuNhat = chieuRong * chieuDai;

// 3. XUẤT DỮ LIỆU:
console.log("4. Chu vi hình chữ nhật: ", chuViHinhChuNhat);
console.log("Diện tích hình chữ nhật: ", dienTichHinhChuNhat);

/* --------------------------- BÀI TẬP 5 ---------------------------- */
/* 1. ĐẦU VÀO:
+ SỐ CÓ 2 KÍ SỐ : n
+ KÍ SỐ HÀNG CHỤC CỦA SỐ VỪA NHẬP: kiSoHangChuc
+ KÍ SỐ HÀNG ĐƠN VỊ CỦA SỐ VỪA NHẬP: kiSoHangDonVi
+ TỔNG 2 KÍ SỐ CỦA SỐ VỪA NHẬP: tongHaiKiSo

2. XỬ LÝ:
CÔNG THỨC TÍNH KÍ SỐ HÀNG CHỤC CỦA SỐ VỪA NHẬP = Math.floor(n / 10)
CÔNG THỨC TÍNH KÍ SỐ HÀNG ĐƠN VỊ CỦA SỐ VỪA NHẬP = n % 10
CÔNG THỨC TÍNH TỔNG HAI KÍ SỐ = kiSoHangChuc + kiSoHangDonVi
*/
var n = 49;
var kiSoHangChuc = Math.floor(n / 10);
var kiSoHangDonVi = n % 10;
var tongHaiKiSo = kiSoHangChuc + kiSoHangDonVi;

// 3. XUẤT DỮ LIỆU:
console.log("5. Tổng hai kí số: ", tongHaiKiSo);


