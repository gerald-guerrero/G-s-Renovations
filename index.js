var invoice;
var invoiceValues;

document.onkeyup = function(){setUp()};

function setUp() {
	recordForm();

	if (Validate()){
		AddRow(document.getElementById("table").rows.length);
	}
}

function recordForm(){
	invoice = new Array();
	invoice = document.getElementsByName("row");
	invoiceValues = new Array(invoice.length);
	
	var i = 0;
	for (i = 0; i < invoice.length; i++){
		invoiceValues[i] = invoice[i].value;
	}
}

function Validate() {
	var row = 0;
	var rowMax = invoice.length / 7;
	var column = 0;

	for (row = 0; row < rowMax; row++){
		for (column = 0; column < 7; column++){
			if (invoiceValues[column + (row * 7)].length == 0 && column != 2) {
				return false;
			}
		}
	}
	return true;
}

function AddRow() {
	var table = document.getElementById("table");
	var rowNumber = table.rows.length;
	var row = table.insertRow(rowNumber);
	row.insertCell(0).innerHTML = '<p name="rowNumber">' + rowNumber;
	row.insertCell(1).innerHTML = '<input type="text" name ="row" value ="" placeholder="empty">';		// Service
	row.insertCell(2).innerHTML = '<input type="text" name ="row" value ="" placeholder="empty">';		// Item
	row.insertCell(3).innerHTML = '<input type="text" name ="row" value ="" placeholder="optional">';	// Description
	row.insertCell(4).innerHTML = "$" + '<input type="number" name ="row" value ="" placeholder="0.00">' + " " + '<input type="text" name ="row" value ="" placeholder="Unit">';	// Rate
	row.insertCell(5).innerHTML = '<input type="number" name ="row" value ="" placeholder="0">';		//Qty
	row.insertCell(6).innerHTML = "$" +'<input type="number" name ="row" value ="" placeholder="0.00">';		// Price

	var buttons = row.insertCell(7);
	buttons.innerHTML = '<input type="button" value="delete" onclick=deleteRow(this)>' + '<p> \n' + '<input type="button" value="add" onclick=AddRow(this.parentNode.parentNode.parentNode.rowIndex)>';
	recordForm();
	reNumber();
}

function debug(rowNumber){
	console.log(rowNumber);
}

function deleteRow(row){
	row.parentNode.parentNode.remove();
	recordForm();
	reNumber();
}

function reNumber(){
	var rowNumbers = document.getElementsByName("rowNumber");
	var i;
	for (i = 0; i < rowNumbers.length; i++){
		rowNumbers[i].innerHTML = (i + 2);
	}
}