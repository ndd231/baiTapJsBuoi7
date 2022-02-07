var numArr = [];

function kiemTra(n) {
  var check = true;
  if (n < 2) {
    check = false;
  } else if (n == 2) {
    check = true;
  } else if (n % 2 == 0) {
    check = false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        check = false;
        break;
      }
    }
  }
  return check;
}

function tinhTongMang() {
  var txtNumber = document.getElementById("nhapSoTuNhien").value * 1;
  numArr.push(txtNumber);
  console.log(numArr);
  var ketQua = "";
  for (var i = 0; i < numArr.length; i++) {
    if (kiemTra(txtNumber)) {
      ketQua = "Số nguyên tố đầu tiên là: " + txtNumber;
    } else {
      ketQua = -1;
    }
  }
  document.getElementById("xuatKetQua").innerHTML = ketQua;
}
