// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  update,
  onValue,
  query,
  equalTo,
  orderByChild,
  set,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const auth = getAuth(app);
onValue(ref(db, "users/"), (snapshot) => {
  const users = snapshot;
  onValue(ref(db, "kelas/"), (snapshot) => {
    var i = 1;
    var kelaskey = [];
    const datakelas = document.getElementById("tbody1");
    const btnTambahkelas = document.getElementById("tomboltambahkelas");
    const kelas = snapshot;
    datakelas.innerHTML = ""; // kosongkan datakelas terlebih dahulu
    kelas.forEach((kls) => {
      const kelasVal = kls.val();

      let kelas1 = `
            <tr><td class="ps-4">${i}</td><td>${kelasVal.class}</td><td>${kelasVal.token}</td><td class="text-center"><button type="button"  class="me-2 edit btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modaleditkelas" data-id="${kls.key}">Edit</button><button type="button"  class="hapus btn btn-danger btn-sm" data-id="${kls.key}">Hapus</button></td></tr>
        `;

      datakelas.innerHTML += kelas1;

      kelaskey.push(kls.key);
      i++;
    });

    const editBtn = document.querySelectorAll(".edit");
    const hapusBtn = document.querySelectorAll(".hapus");
    const simpanedit = document.getElementById("tomboleditkelas");

    editBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        onValue(ref(db, `kelas/` + id), (snapshot) => {
          const data = snapshot.val();
          document.getElementById("editkelas").value = data.class;
          document.getElementById("editToken").value = data.token;
          simpanedit.addEventListener("click", () => {
            var inputKelas = document.querySelector("#editkelas").value;
            var inputToken = document.querySelector("#editToken").value;
            //edit kelas siswa
            users.forEach((user) => {
              const siswa = user.val();
              if (siswa.role == "Siswa" && siswa.kelas == data.class) {
                update(ref(db, "users/" + user.key), {
                  kelas: inputKelas,
                })
                  .then(() => {
                    console.log("data berhasil diedit!");
                  })
                  .catch((error) => {
                    console.log("data gagal diedit!");
                  });
              }
            });
            //edit data kelas
            remove(ref(db, "kelas" + data.class));
            update(ref(db, `kelas/` + inputKelas), {
              class: inputKelas,
              token: inputToken,
            })
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Kelas berhasil diupdate",
                  //type: "warning", -  doesn't exist
                  showCloseButton: true, // optional
                  showConfirmButton: true, // optional
                  confirmButtonColor: "#16a085",
                  confirmButtonText: "OK",

                  //closeOnConfirm: false -  doesn't exist
                });
                // alert("Kelas berhasil diupdate!");
                $("#modaleditkelas").modal("hide");
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "kelas gagal diupdate",
                  //type: "warning", -  doesn't exist
                  showCloseButton: true, // optional
                  showConfirmButton: true, // optional
                  confirmButtonColor: "#16a085",
                  confirmButtonText: "OK",

                  //closeOnConfirm: false -  doesn't exist
                });
                // alert("Kelas gagal diupdate!");
              });
          });
        });
      });
    });
    hapusBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idhapus = btn.getAttribute("data-id");
        var dbRef = firebase.database();
        Swal.fire({
          title: "Apakah kamu yakin?",
          text:
            "Menghapus kelas " +
            idhapus +
            " akan menghapus seluruh data siswa didalamnnya.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yakin, hapus kelas!",
          cancelButtonText: "Batalkan",
        }).then((result) => {
          if (result.isConfirmed) {
            users.forEach((user) => {
              const siswa = user.val();
              if (siswa.role == "Siswa" && siswa.kelas == idhapus) {
                dbRef
                  .ref("users/" + user.key)
                  .remove()
                  .then(() => {
                    console.log("data berhasil dihapus!");
                  })
                  .catch((error) => {
                    console.log("data gagal dihapus!");
                  });
              }
            });
            dbRef
              .ref("kelas/" + idhapus)
              .remove()
              .then(() => {
                Swal.fire("Terhapus!", "Data berhasil dihapus!", "success");
              })
              .catch((error) => {
                Swal.fire(
                  "Error!",
                  "Terjadi kesalahan saat menghapus data: " + error,
                  "error"
                );
              });
          }
        });
      });
    });
    // console.log(kelaskey);
    btnTambahkelas.addEventListener("click", () => {
      const tambahkelas = document.getElementById("tambahkelas").value;
      const tambahToken = document.getElementById("tambahToken").value;
      if (tambahkelas == "") {
        Swal.fire({
          icon: "warning",
          title: "Masukan kelas yang ingin ditambahkan!",
          //type: "warning", -  doesn't exist
          showCloseButton: true, // optional
          showConfirmButton: true, // optional
          confirmButtonColor: "#16a085",
          confirmButtonText: "OK",

          //closeOnConfirm: false -  doesn't exist
        });
        // alert("Kelas yang ingin ditambahkan belum dimasukan!");
        return;
      }
      set(ref(db, "kelas/" + tambahkelas), {
        class: tambahkelas,
        token: tambahToken,
      })
        .then(() => {
          $("#tambahkelas").val("");
          Swal.fire({
            icon: "success",
            title: "Kelas berhasil ditambahkan",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK",
  
            //closeOnConfirm: false -  doesn't exist
          });
          // alert("Kelas berhasil ditambahkan!");
          $("#modaltambahkelas").modal("hide");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Kelas gagal ditambahkan",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK",
  
            //closeOnConfirm: false -  doesn't exist
          });
          // alert("Kelas gagal ditambahkan!");
        });
    });
  });
});
