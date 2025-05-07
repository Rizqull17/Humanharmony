// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue, query, equalTo, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvtIUWlDKKLvYLAiRLqBWZPnGWD1Ra3Y",
  authDomain: "humanharmony-7ad9d.firebaseapp.com",
  databaseURL: "https://humanharmony-7ad9d-default-rtdb.firebaseio.com",
  projectId: "humanharmony-7ad9d",
  storageBucket: "humanharmony-7ad9d.firebasestorage.app",
  messagingSenderId: "314683547657",
  appId: "1:314683547657:web:21a3e72729e8f50abfd8d8",
  measurementId: "G-SKBGLZF0PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  const navbarNav = document.querySelector(".navbar-nav");
  if (user) {
    navbarNav.innerHTML = `
    <li class="nav-item me-3">
    <a class="nav-link" href="../../index.html">Beranda</a>
    </li>
    <li class="nav-item me-3">
      <a class="nav-link" href="../../tentang.html">Tentang</a>
    </li>
    <li class="nav-item me-3">
      <button class="nav-link green" style="border: none;" id="button-keluar">Logout</button>
    </li>
    `;
    const btnKeluar = document.getElementById("button-keluar");
    btnKeluar.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          Swal.fire({
            icon: "warning",
            title: "Apakah anda yakin ingin keluar?",
            //type: "warning", -  doesn't exist
            showCancelButton: true,
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "Iya",
            cancelButtonColor: "#d33",
            cancelButtonText: "Batal",

            //closeOnConfirm: false -  doesn't exist
          }).then((result) => {
            if (result.isConfirmed) {
              document.location.href = "../../index.html";
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    });
  }
});