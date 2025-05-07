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
onValue(ref(db, "Soal/kkm"), (snapshot) => {
  const data = snapshot.val();
  const uji1 = document.getElementById("uji1");
  uji1.innerHTML = `${data[`uji1`]}`;
  const uji2 = document.getElementById("uji2");
  uji2.innerHTML = `${data[`uji2`]}`;
  const uji3 = document.getElementById("uji3");
  uji3.innerHTML = `${data[`uji3`]}`;
  const ujiAkhir = document.getElementById("ujiAkhir");
  ujiAkhir.innerHTML = `${data[`ujiAkhir`]}`;
  const kkmuji1 = document.getElementById("kkmuji1");
  kkmuji1.innerHTML = `
        <input type="number" class="form-control" id="aturkkmuji1" value="${
          data[`uji1`]
        }" >
        <label for="aturkkm1">KKM Uji Kompetensi 1</label>`;
  const aturkkm1 = document.getElementById("button-aturkkm1");
  aturkkm1.addEventListener("click", () => {
    const aturkkmuji1 = document.getElementById("aturkkmuji1").valueAsNumber;
    update(ref(db, `Soal/kkm`), {
      uji1: aturkkmuji1,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "KKM berhasil diubah!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
        $("#aturkkm1").modal("hide");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "KKM gagal diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
      });
  });

  const kkmuji2 = document.getElementById("kkmuji2");
  kkmuji2.innerHTML = `
        <input type="number" class="form-control" id="aturkkmuji2" value="${
          data[`uji2`]
        }" >
        <label for="aturkkm2">KKM Uji Kompetensi 2</label>`;
  const aturkkm2 = document.getElementById("button-aturkkm2");
  aturkkm2.addEventListener("click", () => {
    const aturkkmuji2 = document.getElementById("aturkkmuji2").valueAsNumber;
    update(ref(db, `Soal/kkm`), {
      uji2: aturkkmuji2,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "KKM berhasil diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
        // alert("KKM Uji diubah!");
        $("#aturkkm2").modal("hide");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "KKM gagal diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
      });
  });

  const kkmuji3 = document.getElementById("kkmuji3");
  kkmuji3.innerHTML = `
        <input type="number" class="form-control" id="aturkkmuji3" value="${
          data[`uji3`]
        }" >
        <label for="aturkkm3">KKM Uji Kompetensi 3</label>`;
  const aturkkm3 = document.getElementById("button-aturkkm3");
  aturkkm3.addEventListener("click", () => {
    const aturkkmuji3 = document.getElementById("aturkkmuji3").valueAsNumber;
    update(ref(db, `Soal/kkm`), {
      uji3: aturkkmuji3,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "KKM Berhasil diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
        // alert("KKM berhasil diubah!");
        $("#aturkkm3").modal("hide");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "KKM gagal diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
      });
  });

  const kkmujiAkhir = document.getElementById("kkmujiAkhir");
  kkmujiAkhir.innerHTML = `
        <input type="number" class="form-control" id="aturkkmujiAkhir" value="${
          data[`ujiAkhir`]
        }" >
        <label for="aturkkmAkhir">KKM Uji Kompetensi Akhir</label>`;
  const aturkkmAkhir = document.getElementById("button-aturkkmAkhir");
  aturkkmAkhir.addEventListener("click", () => {
    const aturkkmujiAkhir =
      document.getElementById("aturkkmujiAkhir").valueAsNumber;
    update(ref(db, `Soal/kkm`), {
      ujiAkhir: aturkkmujiAkhir,
    })
      .then(() => {
        alert("KKM berhasil diubah!");
        $("#aturkkmAkhir").modal("hide");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "KKM gagal diubah",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
      });
  });
});
