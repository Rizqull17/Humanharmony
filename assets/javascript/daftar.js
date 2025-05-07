import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onChildChanged, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const db = getDatabase(app);
const auth = getAuth(app);
const btnDaftar = document.getElementById("button-daftar");
const cekInputKosong = (value) => {
  if ((value = "")) {
    return `Wajib di isi!`;
  }
};
onValue(ref(db, "kelas/"), (snapshot) => {
  const pilihkelas = document.getElementById("pilihKelas");
  pilihkelas.innerHTML = `<option value="" selected="selected">-Pilih Kelas-</option>`;
  const kelas = snapshot;
  kelas.forEach(kls => {
  const kelasVal = kls.val();
                                
  let kelas1 = `
  <option value="${kelasVal.class}">${kelasVal.class}</option>
  `;
                    
  pilihkelas.innerHTML += kelas1;
  })
})
const berhasilDaftar = () => {
  Swal.fire({
    icon: "success",
    title: "Daftar Berhasil",
    //type: "warning", -  doesn't exist
    showCloseButton: true, // optional
    showConfirmButton: true, // optional
    confirmButtonColor: "#16a085",
    confirmButtonText: "OK"

    //closeOnConfirm: false -  doesn't exist
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = "../materi_1-1.html";
    }
  })
};

btnDaftar.addEventListener("click", () => {
  const inputnis = document.getElementById("inputnis").value;
  const inputNama = document.getElementById("inputNama").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPassword = document.getElementById("inputPassword").value;
  const token=document.getElementById("inputToken").value;
  const pilihKelas = document.getElementById("pilihKelas").value;

  if (inputnis == "") {
    Swal.fire({
      icon: "warning",
      title: "Masukan NIS anda",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Nama belum dimasukan!");
    return;
  }

  if (inputNama == "") {
    Swal.fire({
      icon: "warning",
      title: "Masukan Nama anda!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Nama belum dimasukan!");
    return;
  }

  if (inputEmail == "") {
    Swal.fire({
      icon: "warning",
      title: "Masukan Email anda!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Email belum dimasukan!");
    return;
  }

  if (inputPassword == "") {
    Swal.fire({
      icon: "warning",
      title: "Masukan Password anda!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Password belum dimasukan!");
    return;
  }
  if (inputToken == "") {
    Swal.fire({
      icon: "error",
      title: "Masukan Token kelas!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Token belum dimasukan!");
    return;
  }

  if (pilihKelas == "") {
    Swal.fire({
      icon: "warning",
      title: "Pilih Kelas anda!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"
  
      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Kelas belum dipilih!");
    return;
  }
  onValue(ref(db,"kelas/"+pilihKelas),(snapshot)=>{
    const dbtoken=snapshot.val().token;
    if(dbtoken==token){
    
  const email = inputEmail;
  const password = inputPassword;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(db, `users/${user.uid}`), {
        nis: inputnis,
        nama: inputNama,
        email: inputEmail,        
        password: inputPassword,
        kelas: pilihKelas,
        role:"Siswa",
        uji1:{skor:0,benar:0},
        uji2:{skor:0,benar:0},
        uji3:{skor:0,benar:0},
        uji4:{skor:0,benar:0},
        uji5:{skor:0,benar:0},
        ujiAkhir:{skor:0,benar:0},
        
      });
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "User berhasil dibuat",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
    
          //closeOnConfirm: false -  doesn't exist
        }).then((result) => {
          if (result.isConfirmed) {
            document.location.href = "pages/materi_1/materi_1-1.html";
          }
        })
        // alert("User berhasil dibuat");
        // document.location.href = "pages/materi_1/materi_1-1.html";
        // // document.location.href = "index.html";
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/invalid-email") {
        Swal.fire({
          icon: "warning",
          title: "Format email tidak sesuai!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
    
          //closeOnConfirm: false -  doesn't exist
        })
        // alert("Format email tidak sesuai!");
      }
      if (errorCode == "auth/weak-password") {
        Swal.fire({
          icon: "warning",
          title: "Password minimal 6 karakter!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
    
          //closeOnConfirm: false -  doesn't exist
        })
        // alert("Password minimal 6 karakter!");
      }
      if (errorCode == "auth/email-already-in-use") {
        Swal.fire({
          icon: "warning",
          title: "Email telah digunakan!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK"
    
          //closeOnConfirm: false -  doesn't exist
        })
        // alert("Email telah digunakan!");
      }
    });
  } 
  else{
    Swal.fire({
      icon: "warning",
      title: "Token yang anda masukan salah!",
      //type: "warning", -  doesn't exist
      showCloseButton: true, // optional
      showConfirmButton: true, // optional
      confirmButtonColor: "#16a085",
      confirmButtonText: "OK"

      //closeOnConfirm: false -  doesn't exist
    })
    // alert("Token yang anda masukan salah!");
  }
});
});