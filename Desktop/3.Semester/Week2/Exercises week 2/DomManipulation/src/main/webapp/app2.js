function clickHandler(event) {
    document.getElementById("outher").onclick = function (event) {
        console.log(("You've clicked") + (" ") + event.target.id);
        document.getElementById("Par").innerHTML = ("Hi from: " + event.target.id);
    };
}
;

document.getElementById("outher").onclick = clickHandler;




var UL = ["Peter", "Jens", "casper"];

var ul = UL.map(function (UL1) {
    return document.getElementById("Par").innerHTML = ("<td><tr>" + UL1 +"</tr></td>");
});

ul.forEach(function (e) {
   return document.getElementById("Par").innerHTML = ("<td><tr>" + ul +"</tr></td>");
});

