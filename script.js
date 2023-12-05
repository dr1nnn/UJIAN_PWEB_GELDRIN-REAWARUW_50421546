var editingRow = null;

function addTicket() {
    var category = document.getElementById("ticketCategory").value;
    var price = document.getElementById("ticketPrice").value;

    var table = document.getElementById("ticketList");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = category;
    cell2.innerHTML = price;
    cell3.innerHTML = '<button onclick="editTicket(this)">Edit</button>' +
                      '<button onclick="deleteTicket(this)">Hapus</button>';
}

function editTicket(btn) {
    var row = btn.parentNode.parentNode;
    editingRow = row;

    var category = row.cells[0].innerHTML;
    var price = row.cells[1].innerHTML;

    document.getElementById("ticketCategory").value = category;
    document.getElementById("ticketPrice").value = price;
}

function saveTicket() {
    if (editingRow) {
        var category = document.getElementById("ticketCategory").value;
        var price = document.getElementById("ticketPrice").value;

        editingRow.cells[0].innerHTML = category;
        editingRow.cells[1].innerHTML = price;

        editingRow = null;
    }
}

function deleteTicket(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
