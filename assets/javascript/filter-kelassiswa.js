// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue, query, equalTo, orderByChild,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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
const db = getDatabase();
const auth = getAuth(app);
const btnTambahkelas = document.getElementById("tomboltambahkelas");
onValue(ref(db, "kelas/"), (snapshot) => {
  const editkelas = document.getElementById("editKelas");
  // editkelas.innerHTML = `<option value="" selected="selected">-Pilih Kelas-</option>`;
  const filterkelas = document.getElementById("categoryFilter");
  filterkelas.innerHTML = `<option value="" selected="selected">Show All</option>`;
  const kelas = snapshot;
  kelas.forEach(kls => {
  const kelasVal = kls.val();
                                
  let kelas1 = `
  <option value="${kelasVal.class}">${kelasVal.class}</option>
  `;
                    
  filterkelas.innerHTML += kelas1;
  editkelas.innerHTML += kelas1;
  })
  

})
