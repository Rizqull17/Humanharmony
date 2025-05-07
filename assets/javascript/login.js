import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue, query, equalTo, orderByChild } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const auth = getAuth(app);
const db=getDatabase();
const btnLogin = document.getElementById("button-login");
function resetPassword(email) {
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Email reset password berhasil dikirim
    console.log('Email reset password berhasil dikirim');
  })
  .catch((error) => {
    // Terjadi kesalahan saat mengirim email reset password
    console.error(error);
  });
}
btnLogin.addEventListener("click", () => {
  const emailLogin = document.getElementById("email-login").value;
  const passwordLogin = document.getElementById("password-login").value;

  const email = emailLogin;
  const password = passwordLogin;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onValue(ref(db, `users/${user.uid}`), (snapshot) => {
        const data = snapshot.val();
        if (data.role == "Siswa") {
          Swal.fire({
            icon: "success",
            title: "Berhasil Login",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK"
      
            //closeOnConfirm: false -  doesn't exist
          }).then((result) => {
            if (result.isConfirmed) {
          document.location.href = "../pages/materi_1/materi_1-1.html";
            }
          })
        }
        if (data.role == "Guru") {
          Swal.fire({
            icon: "success",
            title: "Berhasil Login",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK"
      
            //closeOnConfirm: false -  doesn't exist
          }).then((result) => {
            if (result.isConfirmed) {
              document.location.href = "../pages/halaman_guru/dashboard-guru.html";
            }
          })
        }
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/invalid-email") {
        Swal.fire({
          icon: "warning",
          title: "Email tidak sesuai!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
          //closeOnConfirm: false -  doesn't exist
        })
      }
      if (errorCode == "auth/internal-error") {
        Swal.fire({
          icon: "warning",
          title: "Masukan password!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
          //closeOnConfirm: false -  doesn't exist
        })
      }
      if (errorCode == "auth/invalid-login-credentials") {
        Swal.fire({
          icon: "error",
          title: "Password salah!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
          //closeOnConfirm: false -  doesn't exist
        })
      }
      if (errorCode == "auth/user-not-found") {
        Swal.fire({
          icon: "warning",
          title: "Email belum terdaftar!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
          //closeOnConfirm: false -  doesn't exist
        })
      }
    });
    
});