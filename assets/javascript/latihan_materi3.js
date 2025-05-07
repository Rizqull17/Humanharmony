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

//cek jawaban materi 3-1
let hasil31 = document.getElementById("hasil31");
let answer31_1 = document.getElementById("drop1");
let answer31_2 = document.getElementById("drop2");
let answer31_3 = document.getElementById("drop3");
let answer31_4 = document.getElementById("drop4");
let answer31_5 = document.getElementById("drop5");

function cekJawaban31() {
  if (answer31_1.innerText == "Endokrinologi") {
    answer31_1.style.border = "2px solid green";
  } else {
    answer31_1.style.border = "2px solid red";
  }

  if (answer31_2.innerText == "Hipofisis") {
    answer31_2.style.border = "2px solid green";
  } else {
    answer31_2.style.border = "2px solid red";
  }

  if (answer31_3.innerText == "Neuroendokrin") {
    answer31_3.style.border = "2px solid green";
  } else {
    answer31_3.style.border = "2px solid red";
  }

  if (answer31_4.innerText == "Hormon") {
    answer31_4.style.border = "2px solid green";
  } else {
    answer31_4.style.border = "2px solid red";
  }

  if (answer31_5.innerText == "Jantung") {
    answer31_5.style.border = "2px solid green";
  } else {
    answer31_5.style.border = "2px solid red";
  }

  answer31_1.disabled = true;
  answer31_2.disabled = true;
  answer31_3.disabled = true;
  answer31_4.disabled = true;
  answer31_5.disabled = true;
  hasil31.hidden = false;
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

function ulangJawaban31() {
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
  hasil31.hidden = true;
  answer31_1.style.border = "1px solid gray";
  answer31_1.innerHTML = "";
  answer31_1.disabled = false;
  answer31_2.style.border = "1px solid gray";
  answer31_2.innerHTML = "";
  answer31_2.disabled = false;
  answer31_3.style.border = "1px solid gray";
  answer31_3.innerHTML = "";
  answer31_3.disabled = false;
  answer31_4.style.border = "1px solid gray";
  answer31_4.innerHTML = "";
  answer31_4.disabled = false;
  answer31_5.style.border = "1px solid gray";
  answer31_5.innerHTML = "";
  answer31_5.disabled = false;

}
