// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  query,
  equalTo,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvtIUWlDKKLvYLAiRLqBWZPnGWD1Ra3Y",
  authDomain: "humanharmony-7ad9d.firebaseapp.com",
  databaseURL: "https://humanharmony-7ad9d-default-rtdb.firebaseio.com",
  projectId: "humanharmony-7ad9d",
  storageBucket: "humanharmony-7ad9d.firebasestorage.app",
  messagingSenderId: "314683547657",
  appId: "1:314683547657:web:21a3e72729e8f50abfd8d8",
  measurementId: "G-SKBGLZF0PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
const dbRef = ref(db);
const mulai = document.getElementById("mulai");
mulai.addEventListener("click", function () {
  const petunjuk = document.getElementById("petunjuk");
  petunjuk.hidden = true;
  const uji3 = document.getElementById("uji3");
  uji3.hidden = false;
  let showTime = document.getElementById("waktu");
  let startMinutes = 20;
  let seconds = 0;

  function countdown() {
    setTimeout(countdown, 1000);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    showTime.innerHTML = `${startMinutes} : ${seconds}`;

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      startMinutes--;
    }

    if (startMinutes < 0) {
      startMinutes = 0;
      seconds = 0;
    }

    if (startMinutes === 0 && seconds === 0) {
      const waktuHabis = document.getElementById("waktuHabis");
      waktuHabis.click();
    }
  }
  countdown();
});
onValue(ref(db, "Soal"), (snapshot) => {
  const pilihanGanda = document.querySelector(".pilihan-ganda");
  const userId = auth.currentUser.uid;
  const data = snapshot.val();
  const kkm = snapshot.val().kkm.uji3;

  for (let i = 1; i <= 10; i++) {
    const tampilanSoal = i != 1 ? "d-none" : "";
    pilihanGanda.innerHTML += `
  <div class="div-soal ${tampilanSoal}">
    <div class="card">
    <h6 class="card-header">Nomor ${i}</h6>
    <div class="card-body text-soal">${data[`Soal uji3`][`Soal Uji3-${i}`]["text-soal"]
      }</div>
    </div>
    <div class="card my-3 card-body jawaban">
    <label for="${i}a" class="label-${i}  " >
      <input class="pilihan pilihan-${i}" type="radio" id="${i}a" name="no${i}" value="a" />
      <span class="ms-3 pilihan-jawaban pilihan-jawaban-${i}">a. ${data[`Soal uji3`][`Soal Uji3-${i}`].a
      }</span>
    </label><br>
    <label for="${i}b" class="label-${i}  ">
      <input class="pilihan pilihan-${i}" type="radio" id="${i}b" name="no${i}" value="b" />
      <span class="ms-3 pilihan-jawaban pilihan-jawaban-${i}">b. ${data[`Soal uji3`][`Soal Uji3-${i}`].b
      }</span>
    </label><br>
    <label for="${i}c" class="label-${i}  ">
      <input class="pilihan pilihan-${i}" type="radio" id="${i}c" name="no${i}" value="c" />
      <span class="ms-3 pilihan-jawaban pilihan-jawaban-${i}">c. ${data[`Soal uji3`][`Soal Uji3-${i}`].c
      }</span>
    </label><br>
    <label for="${i}d" class="label-${i}  ">
      <input class="pilihan pilihan-${i}" type="radio" id="${i}d" name="no${i}" value="d" />
      <span class="ms-3 pilihan-jawaban pilihan-jawaban-${i}">d. ${data[`Soal uji3`][`Soal Uji3-${i}`].d
      }</span>
    </label>
    </div>
  </div>
`;
  }

  onValue(ref(db, `users/` + userId + `/uji3`), (snapshot) => {
    if (snapshot.val().selesai) {
      onValue(ref(db, `users/` + userId), (snapshot) => {
        const data = snapshot.val();
        const petunjuk = document.getElementById("petunjuk");
        petunjuk.hidden = true;
        const uji3 = document.getElementById("uji3");
        uji3.hidden = true;
        const hasilUji3 = document.getElementById("hasilUji3");
        hasilUji3.hidden = false;
        const nama = document.getElementById("nama");
        nama.innerHTML = `${data.nama}`;
        const kelas = document.getElementById("kelas");
        kelas.innerHTML = `${data.kelas}`;
        const jawabanBenar = document.getElementById("benar");
        const jawabanSalah = document.getElementById("salah");
        jawabanBenar.innerHTML = `${data.uji3.benar}`;
        jawabanSalah.innerHTML = `${data.uji3.salah}`;
        const nilai = document.getElementById("nilai");
        nilai.innerHTML = `${data.uji3.skor}`;
        const skor = `${data.uji3.skor}`;
        if (skor >= kkm) {
          const materinext3_1 = document.getElementById("evaluasi");
          materinext3_1.hidden = false;
        } else {
          const materinext3_1 = document.getElementById("evaluasi");
          materinext3_1.hidden = true;
        }

        evaluasi.addEventListener("click", function () {
          const skor = `${data.uji3.skor}`;
          if (skor >= kkm) {
            window.location.href = "../../pages/evaluasi/evaluasi.html";
          } else {
            Swal.fire({
              icon: "error",
              title: "Halaman Masih Terkunci, Silahkan Kembali",
              showCloseButton: true, // optional
              showConfirmButton: true, // optional
              confirmButtonColor: "#16a085",
              confirmButtonText: "iya",
            });
          }
        });
      });

      ulangi.addEventListener("click", function () {
        update(ref(db, `users/` + userId), {
          uji3: { skor: 0, benar: 0 },
        });
      });
    }
    const semuaJawabanSiswaDB = snapshot;
    if (semuaJawabanSiswaDB.val() != null) {
      semuaJawabanSiswaDB.forEach((jawabanSiswaDB) => {
        const soalKeSudahBejawab = jawabanSiswaDB.key;
        const jawabannya = jawabanSiswaDB.val().jawaban;

        const jawabanPilihanGanda = document.querySelectorAll(
          `.pilihan-${soalKeSudahBejawab}`
        );
        for (let i = 0; i < jawabanPilihanGanda.length; i++) {
          if (
            jawabanPilihanGanda[i].id == `${soalKeSudahBejawab}${jawabannya}`
          ) {
            jawabanPilihanGanda[i].checked = true;
            Soal[soalKeSudahBejawab].classList.add("active");
          }
        }
      });
    }
  });

  for (let i = 1; i <= 10; i++) {
    const labelPilihanGanda = pilihanGanda.querySelectorAll(`.label-${i}`);
    for (let j = 0; j < labelPilihanGanda.length; j++) {
      labelPilihanGanda[j].addEventListener("click", function () {
        Soal[i].classList.add("terjawab");
      });
    }
  }

  const jawabanSiswaSemua = [];
  for (let i = 1; i <= 10; i++) {
    const labelPilihanGanda = pilihanGanda.querySelectorAll(`.label-${i}`);
    let jawabanSiswa;
    for (let j = 0; j < labelPilihanGanda.length; j++) {
      labelPilihanGanda[j].addEventListener("click", () => {
        let pilihan = labelPilihanGanda[j].querySelector(`.pilihan-${i}`).value;
        jawabanSiswa = pilihan;
        jawabanSiswaSemua[i] = pilihan;

        set(ref(db, `users/` + userId + `/uji3/${i}`), {
          jawaban: pilihan,
        });
      });
    }
  }

  onValue(ref(db, "Soal/Soal uji3"), (snapshot) => {
    const ujiVal = snapshot.val();

    // get(child(dbRef, `users/`+userId+`/uji3`)).then ((jawabanSiswa) => {
    onValue(ref(db, `users/` + userId + `/uji3`), (jawabanSiswa) => {
      // if (jawabanSiswa.exists()) {
      // console.log(jawabanSiswa.val());
      const jawabanSiswaVal = jawabanSiswa.val();
      let benar = 0;
      for (let i = 1; i <= 10; i++) {
        if (jawabanSiswaVal[i] != null) {
          if (
            ujiVal[`Soal Uji3-${i}`]["jawaban-benar"] ==
            jawabanSiswaVal[i]["jawaban"]
          ) {
            benar += 1;
          }
        }
      }
      // } else {
      //   console.log("No data available");
      // }
      update(ref(db, `users/` + userId + `/uji3`), {
        skor: benar * 10,
        benar: benar,
        salah: 10 - benar,
      });
    });
  });
  let soalKe = 1;
  const Soal = document.querySelectorAll(".soal");
  const next = document.getElementById("next");
  const back = document.getElementById("back");

  for (let i = 1; i <= 10; i++) {
    Soal[i].addEventListener("click", function () {
      soalKe = i;
      gantiSoal(i);
      batasSoal();
    });
  }
  next.addEventListener("click", function () {
    if (soalKe == 10) {
      soalKe = 1;
    } else {
      soalKe++;
    }
    gantiSoal(soalKe);
    batasSoal();
  });
  back.addEventListener("click", function () {
    if (soalKe == 1) {
      soalKe = 10;
    } else {
      soalKe--;
    }
    gantiSoal(soalKe);
    batasSoal();
  });
  batasSoal();

  function batasSoal() {
    if (soalKe === 1) {
      back.hidden = true;
      next.hidden = false;
    } else if (soalKe === 10) {
      back.hidden = false;
      next.hidden = true;
    } else {
      back.hidden = false;
      next.hidden = false;
    }
  }
  //fungsi untuk ganti soal
  function gantiSoal(soalKe) {
    const divSoal = document.querySelectorAll(".div-soal");
    const Soal = document.querySelectorAll(".soal");
    for (let i = 0; i < 10; i++) {
      divSoal[i].classList.add("d-none");
      Soal[i + 1].classList.remove("terjawab");
    }
    divSoal[soalKe - 1].classList.remove("d-none");
    Soal[soalKe].classList.add("terjawab");
    console.log(soalKe);
  }

  // cek keterjawaban
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    const sudahDijawab = document.querySelectorAll(".pilihan:checked");
    Swal.fire({
      icon: "warning",
      title: "Apakah anda yakin ingin menyelesaikan Kuis?",
      //type: "warning", -  doesn't exist
      showCancelButton: true,
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "iya",
      cancelButtonColor: "#6c757d",
      cancelButtonText: "Batal",

      //closeOnConfirm: false -  doesn't exist
    }).then((result) => {
      if (result.isConfirmed) {
        if (sudahDijawab.length < 10) {
          Swal.fire(
            "Belum bisa submit",
            "Ada soal yang belum dijawab!",
            "warning"
          );
          return;
        } else {
          update(ref(db, `users/` + userId + `/uji3`), {
            selesai: true,
          });
          onValue(ref(db, `users/` + userId), (snapshot) => {
            const data = snapshot.val();
            const petunjuk = document.getElementById("petunjuk");
            petunjuk.hidden = true;
            const uji3 = document.getElementById("uji3");
            uji3.hidden = true;
            const hasilUji3 = document.getElementById("hasilUji3");
            hasilUji3.hidden = false;
            const nama = document.getElementById("nama");
            nama.innerHTML = `${data.nama}`;
            const kelas = document.getElementById("kelas");
            kelas.innerHTML = `${data.kelas}`;
            const jawabanBenar = document.getElementById("benar");
            const jawabanSalah = document.getElementById("salah");
            jawabanBenar.innerHTML = `${data.uji3.benar}`;
            jawabanSalah.innerHTML = `${data.uji3.salah}`;
            const nilai = document.getElementById("nilai");
            nilai.innerHTML = `${data.uji3.skor}`;
            const skor = `${data.uji3.skor}`;
            console.log(skor >= kkm);
            if (skor >= kkm) {
              const materinext3_1 = document.getElementById("evaluasi");
              materinext3_1.hidden = false;
            } else {
              const materinext3_1 = document.getElementById("evaluasi");
              materinext3_1.hidden = true;
            }
          });
          ulangi.addEventListener("click", function () {
            update(ref(db, `users/` + userId), {
              uji3: { skor: 0, benar: 0 },
            });
          });
        }
      }
    });
  });
  const waktuHabis = document.getElementById("waktuHabis");
  waktuHabis.addEventListener("click", function () {
    // onValue(ref(db, `users/` + userId), (snapshot) => {
    get(child(dbRef, `users/` + userId)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        const petunjuk = document.getElementById("petunjuk");
        petunjuk.hidden = true;
        const uji3 = document.getElementById("uji3");
        uji3.hidden = true;
        const hasilUji3 = document.getElementById("hasilUji3");
        hasilUji3.hidden = false;
        const nama = document.getElementById("nama");
        nama.innerHTML = `${data.nama}`;
        const kelas = document.getElementById("kelas");
        kelas.innerHTML = `${data.kelas}`;
        const jawabanBenar = document.getElementById("benar");
        const jawabanSalah = document.getElementById("salah");
        jawabanBenar.innerHTML = `${data.uji3.benar}`;
        jawabanSalah.innerHTML = `${data.uji3.salah}`;
        const nilai = document.getElementById("nilai");
        nilai.innerHTML = `${data.uji3.skor}`;
        const skor = `${data.uji3.skor}`;
        if (skor >= kkm) {
          const ulangi = document.getElementById("ulangi");
          // ulangi.hidden = false;
          update(ref(db, `users/` + userId + `/uji3`), {
            selesai: true,
          });
        } else {
          const ulangi = document.getElementById("ulangi");
          // ulangi.hidden = false;
        }
      } else {
        console.log("No data available");
      }
    });
    ulangi.addEventListener("click", function () {
      update(ref(db, `users/` + userId), {
        uji3: { skor: 0, benar: 0 },
      });
    });
  });
});
