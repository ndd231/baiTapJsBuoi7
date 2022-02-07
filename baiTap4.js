var numberArr = [];

function locSoDuong(numberArr) {
  var soDuongArr = numberArr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr;
}

function tinhTongMang() {
  var numEl = document.querySelector("#nhapSoTuNhien").value * 1;
  numberArr.push(numEl);
  console.log(numberArr);
  var soDuongArrEl = locSoDuong(numberArr);
  var min = soDuongArrEl[0];
  for (var i = 1; i < soDuongArrEl.length; i++) {
    if (min > soDuongArrEl[i]) {
      min = soDuongArrEl[i];
      console.log(min);
    }
  }
  document.getElementById("xuatKetQua").innerHTML =
    "Số dương nhỏ nhất là: " + min;
}
