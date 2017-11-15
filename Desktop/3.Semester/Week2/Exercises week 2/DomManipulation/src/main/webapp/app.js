


var y = document.getElementsByTagName("div").length;
for (var i = 0; i < 3; i++) {
    document.getElementsByTagName("div")[i].style.backgroundColor = "red";
}


function clickHandler() {
    var changeColour = document.getElementById("et").style.backgroundColor = "red";
    var changeColour = document.getElementById("to").style.backgroundColor = "white";
    var changeColour = document.getElementById("tre").style.backgroundColor = "blue";
}

document.getElementById("btn").onclick = clickHandler;
