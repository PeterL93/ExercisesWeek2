typeof n1 === "number";
typeof callback === "function";

function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}



var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

var mul = function (n1, n2) {
    return n1 * n2
};

var div = function (n1, n2) {
    return n1 / n2
}

console.log(add(1, 2)) // 3
console.log(add) // Funktionsnavn
console.log(add(1, 2, 3)) // 3, da den kun tager imod 2 variabler.
console.log(add(1)); // NaN(not a number) kun én variable
console.log(cb(3, 3, add)); // 3+3 = 6
console.log(cb(4, 3, sub)); // 4-3 = 1
console.log(cb(1, 2, mul)); // 1*2 = 2
console.log(cb(1, 2, div));

try {
    console.log(cb(3, 3, add()));
} catch (e) {
    console.log(e.name + " " + "Der er opstået en fejl");
}


console.log(cb(3, "hh", add)); // strings bliver lagt sammen = 3hh


var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];


var filterNames = names.filter(function (name) {
    return name.length <= 3
});

filterNames.forEach(function (element) {
    console.log(element);
});

var upperCase = filterNames.map(function (upperCase2) {
    return upperCase2.toUpperCase();
});

upperCase.forEach(function (element2) {
    console.log(element2);
});

names.forEach(function (element) {
    return console.log("<ul><li>" + element + "</li></ul>");
});

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var filterCars = cars.filter(function (car) {
    return car.id < 2000, car.make = "volvo", car.price > 5000;
});

function getCar(id, make, price) {
    var carId = [car.id, car.make, car.price].join(" ");
    return carId;
}


console.log(filterCars);

var sqlCars = cars.map(function (sqlCar) {
    return sqlCar.id, sqlCar.year, sqlCar.make, sqlCar.model, sqlCar.price;
})

function carsSQL(carSQL = id, year, make, model, price) {
    var carSQL = "INSERT INTO cars" + [car.id, car.year, car.make, car.model, car.price](" ");
    return carSQL;
};

sqlCars.forEach(function (element) {
    console.log(element);
});


var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this //Ano function
    }.bind(this), 2000);
}
Person("Kurt Wonnegut");
console.log("I'm global: " + name);

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: " + name);  //What’s different ?

var greeter = function () {
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);

var tv = { type: "Samsung", size: "55 inches", model: "UHD", colour: "black" };

for (prop in tv) {
    console.log(prop, tv[prop]);
}
delete tv.size;
for (prop in tv) {
    console.log(prop, tv[prop]);
}
tv.size = "55 Inches";
for(prop in tv){
    console.log(prop, tv[prop]);
}
