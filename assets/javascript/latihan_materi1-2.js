//cek jawaban materi 1-2
let hasil12 = document.getElementById("hasil12");
let answer12_1 = document.getElementById("answer12_1");
let answer12_2 = document.getElementById("answer12_2");
let answer12_3 = document.getElementById("answer12_3");
let answer12_4 = document.getElementById("answer12_4");
let answer12_5 = document.getElementById("answer12_5");

function cekJawaban12() {
  if (answer12_1.value.toLowerCase() == "aferen") {
    answer12_1.style.border = "2px solid green";
  } else {
    answer12_1.style.border = "2px solid red";
  }

  if (answer12_2.value.toLowerCase() == "sel glial") {
    answer12_2.style.border = "2px solid green";
  } else {
    answer12_2.style.border = "2px solid red";
  }

  if (answer12_3.value.toLowerCase() == "sumsum tulang belakang") {
    answer12_3.style.border = "2px solid green";
  } else {
    answer12_3.style.border = "2px solid red";
  }

  if (answer12_4.value.toLowerCase() == "aferen") {
    answer12_4.style.border = "2px solid green";
  } else {
    answer12_4.style.border = "2px solid red";
  }

  if (answer12_5.value.toLowerCase() == "akson") {
    answer12_5.style.border = "2px solid green";
  } else {
    answer12_5.style.border = "2px solid red";
  }

  answer12_1.disabled = true;
  answer12_2.disabled = true;
  answer12_3.disabled = true;
  answer12_4.disabled = true;
  answer12_5.disabled = true;
  hasil12.hidden = false;
}

function ulangJawaban12() {
  hasil12.hidden = true;
  answer12_1.style.border = "1px solid gray";
  answer12_1.value = "";
  answer12_1.disabled = false;
  answer12_2.style.border = "1px solid gray";
  answer12_2.value = "";
  answer12_2.disabled = false;
  answer12_3.style.border = "1px solid gray";
  answer12_3.value = "";
  answer12_3.disabled = false;
  answer12_4.style.border = "1px solid gray";
  answer12_4.value = "";
  answer12_4.disabled = false;
  answer12_5.style.border = "1px solid gray";
  answer12_5.value = "";
  answer12_5.disabled = false;
}

//cek jawaban materi 1-3
let hasil13 = document.getElementById("hasil13");
let answer13_1 = document.getElementById("answer13_1");
let answer13_2 = document.getElementById("answer13_2");
let answer13_3 = document.getElementById("answer13_3");
let answer13_4 = document.getElementById("answer13_4");
let answer13_5 = document.getElementById("answer13_5");

function cekJawaban13() {
  if (answer13_1.value.toLowerCase() == "schwann") {
    answer13_1.style.border = "2px solid green";
  } else {
    answer13_1.style.border = "2px solid red";
  }

  if (answer13_2.value.toLowerCase() == "oligodendrosit") {
    answer13_2.style.border = "2px solid green";
  } else {
    answer13_2.style.border = "2px solid red";
  }

  if (answer13_3.value.toLowerCase() == "nodus ranvier") {
    answer13_3.style.border = "2px solid green";
  } else {
    answer13_3.style.border = "2px solid red";
  }

  if (answer13_4.value.toLowerCase() == "nutrisi") {
    answer13_4.style.border = "2px solid green";
  } else {
    answer13_4.style.border = "2px solid red";
  }

  if (answer13_5.value.toLowerCase() == "penghantaran impuls") {
    answer13_5.style.border = "2px solid green";
  } else {
    answer13_5.style.border = "2px solid red";
  }

  answer13_1.disabled = true;
  answer13_2.disabled = true;
  answer13_3.disabled = true;
  answer13_4.disabled = true;
  answer13_5.disabled = true;
  hasil13.hidden = false;
}

function ulangJawaban13() {
  hasil13.hidden = true;
  answer13_1.style.border = "1px solid gray";
  answer13_1.value = "-- Pilih Jawaban --";
  answer13_1.disabled = false;
  answer13_2.style.border = "1px solid gray";
  answer13_2.value = "-- Pilih Jawaban --";
  answer13_2.disabled = false;
  answer13_3.style.border = "1px solid gray";
  answer13_3.value = "-- Pilih Jawaban --";
  answer13_3.disabled = false;
  answer13_4.style.border = "1px solid gray";
  answer13_4.value = "-- Pilih Jawaban --";
  answer13_4.disabled = false;
  answer13_5.style.border = "1px solid gray";
  answer13_5.value = "-- Pilih Jawaban --";
  answer13_5.disabled = false;
}

//cek jawaban materi 1-4
let answer14_11 = document.getElementById("answer14_11");
let answer14_12 = document.getElementById("answer14_12");
let answer14_13 = document.getElementById("answer14_13");
let answer14_14 = document.getElementById("answer14_14");
let hasil14_1 = document.getElementById("hasil14_1");
let answer14_21 = document.getElementById("answer14_21");
let answer14_22 = document.getElementById("answer14_22");
let answer14_23 = document.getElementById("answer14_23");
let answer14_24 = document.getElementById("answer14_24");
let hasil14_2 = document.getElementById("hasil14_2");
let answer14_31 = document.getElementById("answer14_31");
let answer14_32 = document.getElementById("answer14_32");
let answer14_33 = document.getElementById("answer14_33");
let answer14_34 = document.getElementById("answer14_34");
let hasil14_3 = document.getElementById("hasil14_3");
let answer14_41 = document.getElementById("answer14_41");
let answer14_42 = document.getElementById("answer14_42");
let answer14_43 = document.getElementById("answer14_43");
let answer14_44 = document.getElementById("answer14_44");
let hasil14_4 = document.getElementById("hasil14_4");
let answer14_51 = document.getElementById("answer14_51");
let answer14_52 = document.getElementById("answer14_52");
let answer14_53 = document.getElementById("answer14_53");
let answer14_54 = document.getElementById("answer14_54");
let hasil14_5 = document.getElementById("hasil14_5");

function cekJawaban14() {
  if (
    answer14_11.checked == true &&
    answer14_12.checked == true &&
    answer14_13.checked == false &&
    answer14_14.checked == false
  ) {
    hasil14_1.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil14_1.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (
    answer14_21.checked == true &&
    answer14_22.checked == true &&
    answer14_23.checked == true &&
    answer14_24.checked == false
  ) {
    hasil14_2.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil14_2.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (
    answer14_31.checked == true &&
    answer14_32.checked == true &&
    answer14_33.checked == false &&
    answer14_34.checked == false
  ) {
    hasil14_3.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil14_3.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (
    answer14_41.checked == true &&
    answer14_42.checked == true &&
    answer14_43.checked == true &&
    answer14_44.checked == false
  ) {
    hasil14_4.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil14_4.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  if (
    answer14_51.checked == true &&
    answer14_52.checked == true &&
    answer14_53.checked == true &&
    answer14_54.checked == false
  ) {
    hasil14_5.innerHTML =
      "<span class='text-success'>Jawaban Benar <i class='fa fa-check-circle fs-5' aria-hidden='true'></i></span>";
  } else {
    hasil14_5.innerHTML =
      "<span class='text-danger'>Jawaban Salah <i class='fa fa-times-circle fs-5' aria-hidden='true'></i></span>";
  }

  answer14_11.disabled = true;
  answer14_12.disabled = true;
  answer14_13.disabled = true;
  answer14_14.disabled = true;
  answer14_21.disabled = true;
  answer14_22.disabled = true;
  answer14_23.disabled = true;
  answer14_24.disabled = true;
  answer14_31.disabled = true;
  answer14_32.disabled = true;
  answer14_33.disabled = true;
  answer14_34.disabled = true;
  answer14_41.disabled = true;
  answer14_42.disabled = true;
  answer14_43.disabled = true;
  answer14_44.disabled = true;
  answer14_51.disabled = true;
  answer14_52.disabled = true;
  answer14_53.disabled = true;
  answer14_54.disabled = true;
}

function ulangJawaban14() {
  answer14_11.disabled = false;
  answer14_12.disabled = false;
  answer14_13.disabled = false;
  answer14_14.disabled = false;
  answer14_21.disabled = false;
  answer14_22.disabled = false;
  answer14_23.disabled = false;
  answer14_24.disabled = false;
  answer14_31.disabled = false;
  answer14_32.disabled = false;
  answer14_33.disabled = false;
  answer14_34.disabled = false;
  answer14_41.disabled = false;
  answer14_42.disabled = false;
  answer14_43.disabled = false;
  answer14_44.disabled = false;
  answer14_51.disabled = false;
  answer14_52.disabled = false;
  answer14_53.disabled = false;
  answer14_54.disabled = false;
  answer14_11.checked = false;
  answer14_12.checked = false;
  answer14_13.checked = false;
  answer14_14.checked = false;
  answer14_21.checked = false;
  answer14_22.checked = false;
  answer14_23.checked = false;
  answer14_24.checked = false;
  answer14_31.checked = false;
  answer14_32.checked = false;
  answer14_33.checked = false;
  answer14_34.checked = false;
  answer14_41.checked = false;
  answer14_42.checked = false;
  answer14_43.checked = false;
  answer14_44.checked = false;
  answer14_51.checked = false;
  answer14_52.checked = false;
  answer14_53.checked = false;
  answer14_54.checked = false;
  hasil14_1.innerHTML = "";
  hasil14_2.innerHTML = "";
  hasil14_3.innerHTML = "";
  hasil14_4.innerHTML = "";
  hasil14_5.innerHTML = "";
}

//cek jawaban materi 1-5
let answer15_1 = document.getElementById("answer15_1");
let answer15_2 = document.getElementById("answer15_2");
let answer15_3 = document.getElementById("answer15_3");
let answer15_4 = document.getElementById("answer15_4");
let answer15_5 = document.getElementById("answer15_5");
let hasil15 = document.getElementById("hasil15");

function cekJawaban15() {
  if (answer15_1.value.toLowerCase() == "servikalis") {
    answer15_1.style.border = "3px solid green";
  } else {
    answer15_1.style.border = "3px solid red";
  }

  if (
    answer15_2.value.toLowerCase() == "abdusens" ||
    answer15_2.value.toLowerCase() == "trokhlear"
  ) {
    answer15_2.style.border = "3px solid green";
  } else {
    answer15_2.style.border = "3px solid red";
  }

  if (
    answer15_3.value.toLowerCase() == "12 pasang" ||
    answer15_3.value.toLowerCase() == "12"
  ) {
    answer15_3.style.border = "3px solid green";
  } else {
    answer15_3.style.border = "3px solid red";
  }

  if (answer15_4.value.toLowerCase() == "hipotalamus") {
    answer15_4.style.border = "3px solid green";
  } else {
    answer15_4.style.border = "3px solid red";
  }

  if (
    answer15_5.value.toLowerCase() == "31 pasang" ||
    answer15_5.value.toLowerCase() == "31"
  ) {
    answer15_5.style.border = "3px solid green";
  } else {
    answer15_5.style.border = "3px solid red";
  }

  answer15_1.disabled = true;
  answer15_2.disabled = true;
  answer15_3.disabled = true;
  answer15_4.disabled = true;
  answer15_5.disabled = true;
}

function ulangJawaban15() {
  answer15_1.style.border = "1px solid gray";
  answer15_1.value = "";
  answer15_2.style.border = "1px solid gray";
  answer15_2.value = "";
  answer15_3.style.border = "1px solid gray";
  answer15_3.value = "";
  answer15_4.style.border = "1px solid gray";
  answer15_4.value = "";
  answer15_5.style.border = "1px solid gray";
  answer15_5.value = "";
  answer15_1.disabled = false;
  answer15_2.disabled = false;
  answer15_3.disabled = false;
  answer15_4.disabled = false;
  answer15_5.disabled = false;
}
