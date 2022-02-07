var numArr = [];
var soDuong = [];
var soAm = [];

function tinhTongMang() {
  var txtNumber = document.getElementById("nhapSoTuNhien").value * 1;
  numArr.push(txtNumber);
  console.log(numArr);
  var ketQua = "";
  if (txtNumber >= 0) {
    soDuong.push(txtNumber);
    console.log(soDuong);
  } else {
    soAm.push(txtNumber);
    console.log(soAm);
  }
  if (soDuong.length > soAm.length) {
    ketQua = "Số lượng số dương nhiều hơn số lượng số âm";
  } else if (soDuong.length == soAm.length) {
    ketQua = "Số lượng số dương bằng số lượng số âm";
  } else {
    ketQua = "Số lượng số âm nhiều hơn số lượng số dương";
  }
  document.querySelector("#xuatKetQua").innerHTML = ketQua;
}
