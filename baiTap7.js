var numArr = [];

function tinhTongMang() {
  var txtNumber = document.querySelector("#nhapSoTuNhien").value * 1;
  numArr.push(txtNumber);
  console.log(numArr);
  numArr.sort(function (a, b) {
    return a - b;
  });
  document.querySelector("#xuatKetQua").innerHTML = numArr;
}
