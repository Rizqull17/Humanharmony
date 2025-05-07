var db = firebase.database();
var dbRef = db.ref("users");
$("document").ready(function () {
  var tabelData = $("#tabelSiswa").DataTable({
    searching: true,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: 0,
      },
    ],
    order: [[1, "asc"]],
  });
  tabelData
    .on("order.dt search.dt", function () {
      let i = 1;

      tabelData
        .cells(null, 0, { search: "applied", order: "applied" })
        .every(function (cell) {
          this.data(i++);
        });
    })
    .draw();
  var editdata;
  //Get a reference to the new datatable
  var table = $("#tabelSiswa").DataTable();

  //Take the category filter drop down and append it to the datatables_filter div.
  //You can use this same idea to move the filter anywhere withing the datatable that you want.
  $("#tabelSiswa_filter.dataTables_filter").append($("#categoryFilter"));

  //Get the column index for the Category column to be used in the method below ($.fn.dataTable.ext.search.push)
  //This tells datatables what column to filter on when a user selects a value from the dropdown.
  //It's important that the text used here (Category) is the same for used in the header of the column to filter
  var categoryIndex = 0;
  $("#tabelSiswa th").each(function (i) {
    if ($($(this)).html() == "Kelas") {
      kelasIndex = i;
      return false;
    }
  });

  //Use the built in datatables API to filter the existing rows by the Category column
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var selectedItem = $("#categoryFilter").val();
    var kelas = data[kelasIndex];
    if (selectedItem === "" || kelas.includes(selectedItem)) {
      return true;
    }
    return false;
  });

  //Set the change event for the Category Filter dropdown to redraw the datatable each time
  //a user selects a new filter.
  $("#categoryFilter").change(function (e) {
    table.draw();
  });
  let i = 1;

  table.draw();
  dbRef.on("child_added", (users) => {
    if (users.child("role").val() == "Siswa") {
      var childKey = users.key;
      var dataSet = [
        "",
        users.child("nis").val(),
        users.child("nama").val(),
        users.child("kelas").val(),
        users.child("email").val(),
        `<input id='pass${i}' type="password" value="` +
          users.child("password").val() +
          `" style="background: none;border: none;width:150px;"readonly><button type="button" id="button${i}" class="btn btn-secondary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i></button>`,
        `<div class="text-center"><button type="button"  data-id=` +
          childKey +
          ` class="edit btn btn-primary btn-sm"data-bs-toggle="modal" data-bs-target="#modaleditsiswa">Edit</button><button type="button" data-id=` +
          childKey +
          ` class="delete btn btn-danger btn-sm ms-2">Hapus</button></div>`,
      ];

      tabelData.rows.add([dataSet]).draw();
      i++;

      // console.log(i);
    }
  });
  //hapus data data
  $("#tabelSiswa").on("click", ".delete", function () {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus data!",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        var id = $(this).data("id");
        database.ref("users/" + id).remove();
        tabelData.row($(this).parents("tr")).remove().draw();
        Swal.fire("Terhapus!", "Data berhasil dihapus!", "success");
      }
    });
  });
  //edit data siswa
  $("#tabelSiswa").on("click", ".edit", function () {
    var uid = $(this).data("id");
    console.log(uid);
    var editdata = table.row($(this).parents("tr"));
    var data = editdata.data();
    var nis = data[1];
    var nama = data[2];
    var kelas = data[3];
    var email = data[4];
    var pass = data[5];

    $("#edit-nis").val(nis);
    $("#edit-nama").val(nama);
    $("#edit-email").val(email);
    $("#editKelas").val(kelas);

    $("#btn-editsiswa")
      .off()
      .on("click", function () {
        console.log("ini", uid);
        var inputnis = $("#edit-nis").val();
        var inputNama = $("#edit-nama").val();
        var pilihKelas = $("#editKelas").val();

        if (inputnis == "") {
          Swal.fire({
            icon: "warning",
            title: "Masukan NIS!",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK",

            //closeOnConfirm: false -  doesn't exist
          });
          // alert("NIS belum dimasukan!");
          return;
        }

        if (inputNama == "") {
          Swal.fire({
            icon: "warning",
            title: "Masukan nama!",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK",

            //closeOnConfirm: false -  doesn't exist
          });
          // alert("Nama belum dimasukan!");
          return;
        }

        if (pilihKelas == "") {
          Swal.fire({
            icon: "warning",
            title: "Masukan Email!",
            //type: "warning", -  doesn't exist
            showCloseButton: true, // optional
            showConfirmButton: true, // optional
            confirmButtonColor: "#16a085",
            confirmButtonText: "OK",

            //closeOnConfirm: false -  doesn't exist
          });
          // alert("Kelas belum dipilih!");
          return;
        }

        dbRef
          .child(uid)
          .update({
            nis: inputnis,
            nama: inputNama,
            kelas: pilihKelas,
          })
          .then(() => {
            $("#tabelSiswa").DataTable().clear().draw();
            dbRef.on("child_added", (users) => {
              if (users.child("role").val() == "Siswa") {
                var childKey = users.key;
                var dataSet = [
                  "",
                  users.child("nis").val(),
                  users.child("nama").val(),
                  users.child("kelas").val(),
                  users.child("email").val(),
                  `<input id='pass${i}' type="password" value="` +
                    users.child("password").val() +
                    `" style="background: none;border: none;width:150px;"readonly><button type="button" id="button${i}" class="btn btn-secondary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i></button>`,
                  `<div class="text-center"><button type="button"  data-id=` +
                    childKey +
                    ` class="edit btn btn-primary btn-sm"data-bs-toggle="modal" data-bs-target="#modaleditsiswa">Edit</button><button type="button" data-id=` +
                    childKey +
                    ` class="delete btn btn-danger btn-sm ms-2">Hapus</button></div>`,
                ];
                tabelData.rows.add([dataSet]).draw();
                i++;
              }
            });
            Swal.fire({
              icon: "success",
              title: "Data berhasil diperbaharui",
              //type: "warning", -  doesn't exist
              showCloseButton: true, // optional
              showConfirmButton: true, // optional
              confirmButtonColor: "#16a085",
              confirmButtonText: "OK",

              //closeOnConfirm: false -  doesn't exist
            });
            // alert("Data berhasil diperbaharui!");
            $("#modaleditsiswa").modal("hide");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "gagal diperbaharui!",
              //type: "warning", -  doesn't exist
              showCloseButton: true, // optional
              showConfirmButton: true, // optional
              confirmButtonColor: "#16a085",
              confirmButtonText: "OK",

              //closeOnConfirm: false -  doesn't exist
            });
            // alert("Data gagal diperbaharui!");
          });
      });
  });

  table.draw(false);
  //tipe password dan teks
  tabelData.on("draw", function () {
    for (let j = 0; j <= i; j++) {
      $("#tabelSiswa").on("click", `#button${j}`, function () {
        const x = document.getElementById(`pass${j}`);
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      });
    }
  });
  tabelData.on("draw", function () {
    for (let j = 0; j < i; j++) {
      $("#tabelSiswa").on("click", `#button${j}`, function () {
        const x = document.getElementById(`pass${j}`);
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      });
    }
  });
});
// function myFunction() {
//   var x = document.getElementById("pass");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
