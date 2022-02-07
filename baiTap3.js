var numberArr = [];

function tinhTongMang() {
  var numEl = document.querySelector("#nhapSoTuNhien").value * 1;
  numberArr.push(numEl);
  console.log(numberArr);
  var min = numberArr[0];
  for (var i = 1; i < numberArr.length; i++) {
    if (min > numberArr[i]) {
      min = numberArr[i];
      console.log(min);
    }
  }
  document.getElementById("xuatKetQua").innerHTML = "Số nhỏ nhất là: " + min;
}
