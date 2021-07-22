var columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field:'price', sortable:  true, filter: true },
];
  
var rowData = [
    { make: 'Toyota', model: 'Celica', price:35000 },
    { make: 'Ford', model:'Mondeo', price:32000 },
    { make: 'Porsche', model:'Boxter', price: 72000 }
]; 

var gridOptions= {
    columnDefs: columnDefs,
    rowData: rowData
};

var eGridDiv = document.querySelector('#myGrid');

new agGrid.Grid(eGridDiv, gridOptions);

agGrid.simpleHttpRequest({
    url: 'https://www.ag-grid.com/example-assets/row-data.json'
})
    .then(function (data) {
        gridOptions.api.setRowData(data);
    })
    
function getSelectedRows () {
    var sele
}