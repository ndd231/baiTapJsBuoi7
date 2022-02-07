var numberArr = [];

function laySoChan(numberArr) {
  var soChan = numberArr.filter(function (item) {
    return item % 2 == 0;
  });
  console.log(soChan);
  return soChan;
}

function tinhTongMang() {
  var number = document.querySelector("#nhapSoTuNhien").value * 1;
  numberArr.push(number);
  console.log(numberArr);
  if ((soChanEl = laySoChan(numberArr))) {
    console.log(soChanEl);
    document.querySelector("#xuatKetQua").innerHTML =
      "Số chẵn cuối cùng trong mảng là: " + soChanEl[soChanEl.length - 1];
  } else {
    document.querySelector("#xuatKetQua").innerHTML = "-1";
  }
}
