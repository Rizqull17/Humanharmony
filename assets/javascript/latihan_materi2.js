function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//cek jawaban materi 2-1
let hasil21 = document.getElementById("hasil21");
let answer21_1 = document.getElementById("drop1");
let answer21_2 = document.getElementById("drop2");
let answer21_3 = document.getElementById("drop3");
let answer21_4 = document.getElementById("drop4");
let answer21_5 = document.getElementById("drop5");

function cekJawaban21() {
  if (answer21_1.innerText == "Ujung saraf bebas") {
    answer21_1.style.border = "2px solid green";
  } else {
    answer21_1.style.border = "2px solid red";
  }

  if (answer21_2.innerText == "Korpuskulus Meissner") {
    answer21_2.style.border = "2px solid green";
  } else {
    answer21_2.style.border = "2px solid red";
  }

  if (answer21_3.innerText == "Ujung saraf Ruffini") {
    answer21_3.style.border = "2px solid green";
  } else {
    answer21_3.style.border = "2px solid red";
  }

  if (answer21_4.innerText == "Ujung bungkul Krause") {
    answer21_4.style.border = "2px solid green";
  } else {
    answer21_4.style.border = "2px solid red";
  }

  if (answer21_5.innerText == "Korpuskulus Pacini") {
    answer21_5.style.border = "2px solid green";
  } else {
    answer21_5.style.border = "2px solid red";
  }

  answer21_1.disabled = true;
  answer21_2.disabled = true;
  answer21_3.disabled = true;
  answer21_4.disabled = true;
  answer21_5.disabled = true;
  hasil21.hidden = false;


  // if (valueanswer2 == "tidak") {
  //   hasil21.innerHTML =
  //     "Jawaban Benar <i class='fa fa-check fs-5' aria-hidden='true'></i>";
  //   hasil21.style.color = "green";
  //   answer2_ya.disabled = true;
  //   answer2_tidak.disabled = true;
  //   komentar.hidden = false;
  // } else {
  //   hasil21.innerHTML =
  //     "Jawaban Salah <i class='fa fa-times fs-5' aria-hidden='true'></i>";
  //   hasil21.style.color = "red";
  //   answer2_ya.disabled = true;
  //   answer2_tidak.disabled = true;
  //   komentar.hidden = false;
  // }
}
var container1 = document.getElementById("dd1");
var container2 = document.getElementById("dd2");
var container3 = document.getElementById("dd3");
var container4 = document.getElementById("dd4");
var container5 = document.getElementById("dd5");
var datadrag1;
var datadrag2;
var datadrag3;
var datadrag4;
var datadrag5;

function ulangJawaban21() {
  var container1 = document.getElementById("dd1");
  container1.innerHTML = datadrag1;
  var container2 = document.getElementById("dd2");
  container2.innerHTML = datadrag2;
  var container3 = document.getElementById("dd3");
  container3.innerHTML = datadrag3;
  var container4 = document.getElementById("dd4");
  container4.innerHTML = datadrag4;
  var container5 = document.getElementById("dd5");
  container5.innerHTML = datadrag5;
  hasil21.hidden = true;
  answer21_1.style.border = "1px solid gray";
  answer21_1.innerHTML = "";
  answer21_1.disabled = false;
  answer21_2.style.border = "1px solid gray";
  answer21_2.innerHTML = "";
  answer21_2.disabled = false;
  answer21_3.style.border = "1px solid gray";
  answer21_3.innerHTML = "";
  answer21_3.disabled = false;
  answer21_4.style.border = "1px solid gray";
  answer21_4.innerHTML = "";
  answer21_4.disabled = false;
  answer21_5.style.border = "1px solid gray";
  answer21_5.innerHTML = "";
  answer21_5.disabled = false;

}



//cek jawaban materi 2-2
let answer22_11 = document.getElementById("answer22_11");
let answer22_12 = document.getElementById("answer22_12");
let answer22_13 = document.getElementById("answer22_13");
let answer22_14 = document.getElementById("answer22_14");
let answer22_15 = document.getElementById("answer22_15");
let hasil22_1 = document.getElementById("hasil22_1");
let answer22_21 = document.getElementById("answer22_21");
let answer22_22 = document.getElementById("answer22_22");
let answer22_23 = document.getElementById("answer22_23");
let answer22_24 = document.getElementById("answer22_24");
let hasil22_2 = document.getElementById("hasil22_2");
let answer22_31 = document.getElementById("answer22_31");
let answer22_32 = document.getElementById("answer22_32");
let answer22_33 = document.getElementById("answer22_33");
let answer22_34 = document.getElementById("answer22_34");
let hasil22_3 = document.getElementById("hasil22_3");
let answer22_41 = document.getElementById("answer22_41");
let answer22_42 = document.getElementById("answer22_42");
let answer22_43 = document.getElementById("answer22_43");
let answer22_44 = document.getElementById("answer22_44");
let hasil22_4 = document.getElementById("hasil22_4");
let answer22_51 = document.getElementById("answer22_51");
let answer22_52 = document.getElementById("answer22_52");
let answer22_53 = document.getElementById("answer22_53");
let answer22_54 = document.getElementById("answer22_54");
let hasil22_5 = document.getElementById("hasil22_5");

function cekJawaban22() {
  if (answer22_11.checked == true && answer22_12.checked == true && answer22_13.checked == true && answer22_14.checked == true && answer22_15.checked == true) {
    hasil22_1.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil22_1.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (answer22_21.checked == true && answer22_22.checked == true && answer22_23.checked == true && answer22_24.checked == false) {
    hasil22_2.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil22_2.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (answer22_31.checked == true && answer22_32.checked == true && answer22_33.checked == true && answer22_34.checked == false) {
    hasil22_3.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil22_3.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (answer22_41.checked == true && answer22_42.checked == true && answer22_43.checked == true && answer22_44.checked == false) {
    hasil22_4.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil22_4.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (answer22_51.checked == true && answer22_52.checked == true && answer22_53.checked == true && answer22_54.checked == false) {
    hasil22_5.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil22_5.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  answer22_11.disabled = true;
  answer22_12.disabled = true;
  answer22_13.disabled = true;
  answer22_14.disabled = true;
  answer22_15.disabled = true;
  answer22_21.disabled = true;
  answer22_22.disabled = true;
  answer22_23.disabled = true;
  answer22_24.disabled = true;
  answer22_31.disabled = true;
  answer22_32.disabled = true;
  answer22_33.disabled = true;
  answer22_34.disabled = true;
  answer22_41.disabled = true;
  answer22_42.disabled = true;
  answer22_43.disabled = true;
  answer22_44.disabled = true;
  answer22_51.disabled = true;
  answer22_52.disabled = true;
  answer22_53.disabled = true;
  answer22_54.disabled = true;
}

function ulangJawaban22() {
  answer22_11.disabled = false;
  answer22_12.disabled = false;
  answer22_13.disabled = false;
  answer22_14.disabled = false;
  answer22_15.disabled = false;
  answer22_21.disabled = false;
  answer22_22.disabled = false;
  answer22_23.disabled = false;
  answer22_24.disabled = false;
  answer22_31.disabled = false;
  answer22_32.disabled = false;
  answer22_33.disabled = false;
  answer22_34.disabled = false;
  answer22_41.disabled = false;
  answer22_42.disabled = false;
  answer22_43.disabled = false;
  answer22_44.disabled = false;
  answer22_51.disabled = false;
  answer22_52.disabled = false;
  answer22_53.disabled = false;
  answer22_54.disabled = false;
  answer22_11.checked = false;
  answer22_12.checked = false;
  answer22_13.checked = false;
  answer22_14.checked = false;
  answer22_15.checked = false;
  answer22_21.checked = false;
  answer22_22.checked = false;
  answer22_23.checked = false;
  answer22_24.checked = false;
  answer22_31.checked = false;
  answer22_32.checked = false;
  answer22_33.checked = false;
  answer22_34.checked = false;
  answer22_41.checked = false;
  answer22_42.checked = false;
  answer22_43.checked = false;
  answer22_44.checked = false;
  answer22_51.checked = false;
  answer22_52.checked = false;
  answer22_53.checked = false;
  answer22_54.checked = false;
  hasil22_1.innerHTML = "";
  hasil22_2.innerHTML = "";
  hasil22_3.innerHTML = "";
  hasil22_4.innerHTML = "";
  hasil22_5.innerHTML = "";
}

//cek jawaban materi 2-3
let hasil23 = document.getElementById("hasil23");
let answer23_1 = document.getElementById("answer23_1");
let answer23_2 = document.getElementById("answer23_2");
let answer23_3 = document.getElementById("answer23_3");
let answer23_4 = document.getElementById("answer23_4");
let answer23_5 = document.getElementById("answer23_5");

function cekJawaban23() {
  if (answer23_1.value == "10-100 juta") {
    answer23_1.style.border = "2px solid green";
  } else {
    answer23_1.style.border = "2px solid red";
  }

  if (answer23_2.value == "Silia") {
    answer23_2.style.border = "2px solid green";
  } else {
    answer23_2.style.border = "2px solid red";
  }

  if (answer23_3.value == "Sel pendukung") {
    answer23_3.style.border = "2px solid green";
  } else {
    answer23_3.style.border = "2px solid red";
  }

  if (answer23_4.value == "Regenerasi") {
    answer23_4.style.border = "2px solid green";
  } else {
    answer23_4.style.border = "2px solid red";
  }

  if (answer23_5.value == "Lendir") {
    answer23_5.style.border = "2px solid green";
  } else {
    answer23_5.style.border = "2px solid red";
  }

  answer23_1.disabled = true;
  answer23_2.disabled = true;
  answer23_3.disabled = true;
  answer23_4.disabled = true;
  answer23_5.disabled = true;
  hasil23.hidden = false;
}

function ulangJawaban23() {
  hasil23.hidden = true;
  answer23_1.style.border = "1px solid gray";
  answer23_1.value = "-- Pilih Jawaban --";
  answer23_1.disabled = false;
  answer23_2.style.border = "1px solid gray";
  answer23_2.value = "-- Pilih Jawaban --";
  answer23_2.disabled = false;
  answer23_3.style.border = "1px solid gray";
  answer23_3.value = "-- Pilih Jawaban --";
  answer23_3.disabled = false;
  answer23_4.style.border = "1px solid gray";
  answer23_4.value = "-- Pilih Jawaban --";
  answer23_4.disabled = false;
  answer23_5.style.border = "1px solid gray";
  answer23_5.value = "-- Pilih Jawaban --";
  answer23_5.disabled = false;
}

//cek jawaban materi 2-4
let hasil24 = document.getElementById("hasil24");
let answer24_1 = document.getElementById("drop1");
let answer24_2 = document.getElementById("drop2");
let answer24_3 = document.getElementById("drop3");
let answer24_4 = document.getElementById("drop4");
let answer24_5 = document.getElementById("drop5");

function cekJawaban24() {
  if (answer24_1.innerText == "Lapisan fibrosa") {
    answer24_1.style.border = "2px solid green";
  } else {
    answer24_1.style.border = "2px solid red";
  }

  if (answer24_2.innerText == "Iris") {
    answer24_2.style.border = "2px solid green";
  } else {
    answer24_2.style.border = "2px solid red";
  }

  if (answer24_3.innerText == "Bintik kuning") {
    answer24_3.style.border = "2px solid green";
  } else {
    answer24_3.style.border = "2px solid red";
  }

  if (answer24_4.innerText == "Bintik buta") {
    answer24_4.style.border = "2px solid green";
  } else {
    answer24_4.style.border = "2px solid red";
  }

  if (answer24_5.innerText == "Sel kerucut") {
    answer24_5.style.border = "2px solid green";
  } else {
    answer24_5.style.border = "2px solid red";
  }

  answer24_1.disabled = true;
  answer24_2.disabled = true;
  answer24_3.disabled = true;
  answer24_4.disabled = true;
  answer24_5.disabled = true;
  hasil24.hidden = false;


  // if (valueanswer2 == "tidak") {
  //   hasil24.innerHTML =
  //     "Jawaban Benar <i class='fa fa-check fs-5' aria-hidden='true'></i>";
  //   hasil24.style.color = "green";
  //   answer2_ya.disabled = true;
  //   answer2_tidak.disabled = true;
  //   komentar.hidden = false;
  // } else {
  //   hasil24.innerHTML =
  //     "Jawaban Salah <i class='fa fa-times fs-5' aria-hidden='true'></i>";
  //   hasil24.style.color = "red";
  //   answer2_ya.disabled = true;
  //   answer2_tidak.disabled = true;
  //   komentar.hidden = false;
  // }
}

function ulangJawaban24() {
  var container1 = document.getElementById("dd1");
  container1.innerHTML = datadrag1;
  var container2 = document.getElementById("dd2");
  container2.innerHTML = datadrag2;
  var container3 = document.getElementById("dd3");
  container3.innerHTML = datadrag3;
  var container4 = document.getElementById("dd4");
  container4.innerHTML = datadrag4;
  var container5 = document.getElementById("dd5");
  container5.innerHTML = datadrag5;
  hasil24.hidden = true;
  answer24_1.style.border = "1px solid gray";
  answer24_1.innerHTML = "";
  answer24_1.disabled = false;
  answer24_2.style.border = "1px solid gray";
  answer24_2.innerHTML = "";
  answer24_2.disabled = false;
  answer24_3.style.border = "1px solid gray";
  answer24_3.innerHTML = "";
  answer24_3.disabled = false;
  answer24_4.style.border = "1px solid gray";
  answer24_4.innerHTML = "";
  answer24_4.disabled = false;
  answer24_5.style.border = "1px solid gray";
  answer24_5.innerHTML = "";
  answer24_5.disabled = false;

}

//cek jawaban materi 2-5
let answer25_1 = document.getElementById("answer25_1");
let answer25_2 = document.getElementById("answer25_2");
let answer25_3 = document.getElementById("answer25_3");
let answer25_4 = document.getElementById("answer25_4");
let answer25_5 = document.getElementById("answer25_5");
let hasil25 = document.getElementById("hasil25");

function cekJawaban25() {
  if (
    answer25_1.value.toLowerCase() == "tuba eustachius"
  ) {
    answer25_1.style.border = "3px solid green";
  } else {
    answer25_1.style.border = "3px solid red";
  }

  if (answer25_2.value.toLowerCase() == "organ corti") {
    answer25_2.style.border = "3px solid green";
  } else {
    answer25_2.style.border = "3px solid red";
  }

  if (answer25_3.value.toLowerCase() == "skala media") {
    answer25_3.style.border = "3px solid green";
  } else {
    answer25_3.style.border = "3px solid red";
  }

  if (answer25_4.value.toLowerCase() == "labirin") {
    answer25_4.style.border = "3px solid green";
  } else {
    answer25_4.style.border = "3px solid red";
  }

  if (answer25_5.value.toLowerCase() == "perilimfe") {
    answer25_5.style.border = "3px solid green";
  } else {
    answer25_5.style.border = "3px solid red";
  }

  answer25_1.disabled = true;
  answer25_2.disabled = true;
  answer25_3.disabled = true;
  answer25_4.disabled = true;
  answer25_5.disabled = true;
}

function ulangJawaban25() {
  answer25_1.style.border = "1px solid gray";
  answer25_1.value = "";
  answer25_2.style.border = "1px solid gray";
  answer25_2.value = "";
  answer25_3.style.border = "1px solid gray";
  answer25_3.value = "";
  answer25_4.style.border = "1px solid gray";
  answer25_4.value = "";
  answer25_5.style.border = "1px solid gray";
  answer25_5.value = "";
  answer25_1.disabled = false;
  answer25_2.disabled = false;
  answer25_3.disabled = false;
  answer25_4.disabled = false;
  answer25_5.disabled = false;
}


// function cekJawaban() {
//   let answer1 = document.getElementById("answer1").value;
//   if (answer1 == "//") {
//     document.getElementById("answer1").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer1").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }

//   let answer2 = document.getElementById("answer2").value;
//   if (answer2 == "/*") {
//     document.getElementById("answer2").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer2").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }

//   let answer3 = document.getElementById("answer3").value;
//   if (answer3 == "*/") {
//     document.getElementById("answer3").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer3").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }

//   let answer4 = document.getElementById("answer4").value;
//   if (answer4 == "std::cout") {
//     document.getElementById("answer4").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer4").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }

//   let answer5 = document.getElementById("answer5").value;
//   if (answer5 == "using namespace std;") {
//     document.getElementById("answer5").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer5").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }

//   let answer6 = document.getElementById("answer6").value;
//   if (answer6 == "cout") {
//     document.getElementById("answer6").style.border = "2px solid green";
//   } else {
//     document.getElementById("answer6").style.border = "2px solid red";
//     Swal.fire("Mohon Maaf!", "Jawaban Anda Masih ada yang Salah!", "error");
//   }
//   const jawaban = document.querySelectorAll(".jawab");
//   if (jawaban[0].value == "//") {
//     if (jawaban[1].value == "/*") {
//       if (jawaban[2].value == "*/") {
//         if (jawaban[3].value == "std::cout") {
//           if (jawaban[4].value == "using namespace std;") {
//             if (jawaban[5].value == "cout") {
//               Swal.fire("Selamat!", "Jawaban Anda Benar Semua!", "success");
//             }
//           }
//         }
//       }
//     }
//   }
// }
// function ulangJawaban() {
//   document.getElementById("answer1").style.border = "1px solid gray";
//   document.getElementById("answer1").value = "";
//   document.getElementById("answer2").style.border = "1px solid gray";
//   document.getElementById("answer2").value = "";
//   document.getElementById("answer3").style.border = "1px solid gray";
//   document.getElementById("answer3").value = "";
//   document.getElementById("answer4").style.border = "1px solid gray";
//   document.getElementById("answer4").value = "";
//   document.getElementById("answer5").style.border = "1px solid gray";
//   document.getElementById("answer5").value = "";
//   document.getElementById("answer6").style.border = "1px solid gray";
//   document.getElementById("answer6").value = "";
// }
