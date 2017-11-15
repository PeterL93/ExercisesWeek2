
function makeRow(data) {
    return "<tr><td>" + data + "</td></tr>";
}

var filterValue = "";

function filterCb(data) {
    if (filterValue === "") {
        return true;
    }
    return Number(data) < Number(filterValue);
}

function clickHandler() {
    var numbersAsStr = document.getElementById("ta").value;
    var numbersAsArr = numbersAsStr.split(" ");
    filterValue = document.getElementById("filter").value;
    var filteredArr = numbersAsArr.filter(filterCb);
    var rowArray = filteredArr.map(makeRow);
    var rowStr = rowArray.join(" ");
    document.getElementById("tbody").innerHTML = rowStr;


}

document.getElementById("btn").onclick = clickHandler;
document.getElementById("filter").onkeyup = clickHandler;