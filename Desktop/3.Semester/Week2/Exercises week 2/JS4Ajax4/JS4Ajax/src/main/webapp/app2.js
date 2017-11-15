


function clickHandler() {
    var promise = fetch('PersonServlet');
    promise.then(function (response) {
        return response.json();
    }).then(function (persons) {
        var tableRowsArray = persons.map(function(p){
            
        });
    });
}



document.getElementById("btn").onclick = clickHandler;

