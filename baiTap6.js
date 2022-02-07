var numArr = [];

function tinhTongMang() {
  var txtNumber = document.querySelector("#nhapSoTuNhien").value * 1;
  var txtViTriDoi1 = document.querySelector("#nhapSoTuNhien1").value * 1;
  var txtViTriDoi2 = document.querySelector("#nhapSoTuNhien2").value * 1;
  numArr.push(txtNumber);
  console.log(numArr);
  numArr[txtViTriDoi1] =
    numArr[txtViTriDoi2] + ((numArr[txtViTriDoi2] = numArr[txtViTriDoi1]), 0);
  console.log(numArr[txtViTriDoi1]);
  console.log(numArr[txtViTriDoi2]);
}
