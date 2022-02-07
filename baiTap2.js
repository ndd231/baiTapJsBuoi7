var numberArr = [];

function locSoDuong(numberArr) {
  var soDuongArr = numberArr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr.length;
}

function tinhTongMang() {
  var txtNhapSo = document.querySelector("#nhapSoTuNhien").value * 1;
  numberArr.push(txtNhapSo);
  var inRaSoDuong = locSoDuong(numberArr);
  //   for (var i = 0; i < numberArr.length; i++) {
  //     if (txtNhapSo > 0) {
  //       tinhTongSoDuong += txtNhapSo;
  //     }
  //   }
  document.getElementById("xuatKetQua").innerHTML =
    "Số dương của mảng là: " + inRaSoDuong;
}
