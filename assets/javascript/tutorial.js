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

onValue(ref(db, "Soal"), (snapshot) => {
  const userId = auth.currentUser.uid;
  const data = snapshot.val();
  const kkm = snapshot.val().kkm.uji1;
  const kkm2 = snapshot.val().kkm.uji2;
  const kkm3 = snapshot.val().kkm.uji3;

  onValue(ref(db, `users/` + userId), (snapshot) => {
    const data = snapshot.val();
    const skorujk1 = `${data.uji1.skor}`;
    const skorujk2 = `${data.uji2.skor}`;
    const skorujk3 = `${data.uji3.skor}`;
    const iconm2 = document.getElementById("iconm2");
    const iconm2_11 = document.getElementById('iconm2_11');
    const iconm2_1 = document.getElementById("iconm2_1");
    const iconm2_2 = document.getElementById("iconm2_2");
    const iconm2_3 = document.getElementById("iconm2_3");
    const iconm2_4 = document.getElementById("iconm2_4");
    const iconm2_5 = document.getElementById("iconm2_5");
    const iconm2_6 = document.getElementById("iconm2_6");
    const iconm3 = document.getElementById("iconm3");
    const iconm3_11 = document.getElementById('iconm3_11');
    const iconm3_1 = document.getElementById("iconm3_1");
    const iconm3_2 = document.getElementById("iconm3_2");
    const iconevaluasi = document.getElementById("iconevaluasi");
    if (skorujk1 >= kkm) {
      iconm2.classList.remove("fa-lock");
      iconm2_11.classList.remove("fa-lock");
      iconm2_1.classList.remove("fa-lock");
      iconm2_2.classList.remove("fa-lock");
      iconm2_3.classList.remove("fa-lock");
      iconm2_4.classList.remove("fa-lock");
      iconm2_5.classList.remove("fa-lock");
      iconm2_6.classList.remove("fa-lock");
    } else {
      iconm2.classList.add("fa-lock");
      iconm2_11.classList.add("fa-lock");
      iconm2_1.classList.add("fa-lock");
      iconm2_2.classList.add("fa-lock");
      iconm2_3.classList.add("fa-lock");
      iconm2_4.classList.add("fa-lock");
      iconm2_5.classList.add("fa-lock");
      iconm2_6.classList.add("fa-lock");
    }

    if (skorujk2 >= kkm) {
      iconm3.classList.remove("fa-lock");
      iconm3_11.classList.remove("fa-lock");
      iconm3_1.classList.remove("fa-lock");
      iconm3_2.classList.remove("fa-lock");
    } else {
      iconm3.classList.add("fa-lock");
      iconm3_11.classList.add("fa-lock");
      iconm3_1.classList.add("fa-lock");
      iconm3_2.classList.add("fa-lock");
    }

    if (skorujk3 >= kkm) {
      iconevaluasi.classList.remove("fa-lock");
    } else {
      iconevaluasi.classList.add("fa-lock");
    }

    materinext2_11.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-0.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext2_1.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-1.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext2_2.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-2.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext2_3.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-3.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext2_4.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-4.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext2_5.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/materi_2-5.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    ujikompetensi2.addEventListener("click", function () {
      const skor = `${data.uji1.skor}`;
      if (skor >= kkm) {
        window.location.href = "../../pages/materi_2/uji-kompetensi2.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext3_11.addEventListener("click", function () {
      const skor = `${data.uji2.skor}`;
      if (skor >= kkm2) {
        window.location.href = "../../pages/materi_3/materi_3-0.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    materinext3_1.addEventListener("click", function () {
      const skor = `${data.uji2.skor}`;
      if (skor >= kkm2) {
        window.location.href = "../../pages/materi_3/materi_3-1.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    ujikompetensi3.addEventListener("click", function () {
      const skor = `${data.uji2.skor}`;
      if (skor >= kkm2) {
        window.location.href = "../../pages/materi_3/uji-kompetensi3.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });

    evaluasi.addEventListener("click", function () {
      const skor = `${data.uji3.skor}`;
      if (skor >= kkm3) {
        window.location.href = "../../pages/evaluasi/evaluasi.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Halaman masih terkunci, silakan kembali",
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",
        });
      }
    });
  });
});
