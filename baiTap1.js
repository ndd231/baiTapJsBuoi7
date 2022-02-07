var numberArr = [];
var tinhTongSoDuong = 0;

function tinhTongMang() {
  var txtNhapSo = document.querySelector("#nhapSoTuNhien").value * 1;
  numberArr.push(txtNhapSo);
  console.log(numberArr);
  if (txtNhapSo > 0) {
    tinhTongSoDuong += txtNhapSo;
  }

  document.getElementById("xuatKetQua").innerHTML =
    "Tổng các số dương của mảng là: " + tinhTongSoDuong;
}
