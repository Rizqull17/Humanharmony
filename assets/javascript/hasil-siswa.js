var db = firebase.database();
var dbRef = db.ref('users');
$("document").ready(function () {

 var tabelData= $("#tabelHasil").DataTable({
    "searching": true,
    columnDefs: [
      {
          searchable: false,
          orderable: false,
          targets: 0,
      },
      
  ],
  order: [[1, 'asc']],

  buttons: [  
      {
          extend: 'excelHtml5',
          text: '<i class="fa fa-table" aria-hidden="true"></i> Excel',
          className:"btn btn-outline-dark",
          titleAttr: 'Excel'
      },
      {
          extend: 'pdfHtml5',
          text: '<i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF',
          className:"btn btn-outline-dark",
          titleAttr: 'PDF'
      },
      {
          extend: 'print',
          text: '<i class="fa fa-print" aria-hidden="true"></i>Print',
          className:"btn btn-outline-dark",
          titleAttr: 'Print'
      }

  ]
    
  });
  tabelData.on('order.dt search.dt', function () {
    let i = 1;

    tabelData.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
        this.data(i++);
    });
}).draw();
  
  //Get a reference to the new datatable
  var table = $('#tabelHasil').DataTable();

  //Take the category filter drop down and append it to the datatables_filter div. 
  //You can use this same idea to move the filter anywhere withing the datatable that you want.
  $("#tabelHasil_filter.dataTables_filter").append($("#categoryFilter"));
  
  //Get the column index for the Category column to be used in the method below ($.fn.dataTable.ext.search.push)
  //This tells datatables what column to filter on when a user selects a value from the dropdown.
  //It's important that the text used here (Category) is the same for used in the header of the column to filter
  var categoryIndex = 0;
  $("#tabelHasil th").each(function (i) {
    if ($($(this)).html() == "Kelas") {
      kelasIndex = i; return false;
    }
  });

  //Use the built in datatables API to filter the existing rows by the Category column
  $.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
      var selectedItem = $('#categoryFilter').val()
      var kelas = data[kelasIndex];
      if (selectedItem === "" || kelas.includes(selectedItem)) {
        return true;
      }
      return false;
    }
  );


  //Set the change event for the Category Filter dropdown to redraw the datatable each time
  //a user selects a new filter.
  $("#categoryFilter").change(function (e) {
    table.draw();
  });

  table.draw();
  dbRef.on('child_added',users=> {
     if(users.child("role").val()=="Siswa"){
    var dataSet = [
      "",
      users.child("nama").val(),
      users.child("kelas").val(),
      users.child("uji1/skor").val(),
      users.child("uji2/skor").val(),
      users.child("uji3/skor").val(),
      users.child("uji4/skor").val(),
      users.child("uji5/skor").val(),
      users.child("ujiAkhir/skor").val(),
      
    ];   
    // console.log(users.val());  
    
   
    tabelData.rows.add([dataSet]).draw();
  }
  });
table.buttons().container().appendTo($('#printbar'));

});
