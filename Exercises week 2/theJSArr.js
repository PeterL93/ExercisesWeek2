var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

var all = boys.concat(girls);

var allStr = all.join();

girls.push("Lone", "Gitte");
boys.push("Kurt", "Hans")

boys.pop();
girls.shift();

all.splice("Ole","Janne");

all.reverse();

all.sort();

var res = allStr.toUpperCase();

var nameRes = all.filter();


console.log(all);

