// 1. Data Types
var pi = Math.PI; // number
var myName = "Annie Wiedner"; // string
var primeNum = [2, 3, 5, 7]; // object
var num = 87; // number
var takingWDI = true; // boolean


// 2. Array Manipulation
arr = [];
arr.unshift("Los Angeles", "New York", "Denver");
arr.splice(0, 2);
arr.unshift("Paris", "Tokyo", "London");
arr.pop();
arr[2] = "Japan";
arr[0] = "Where am I going?";
arr.push(8);


// 3. Conditional Trials
var purchaseAlcohol = function(age) {
	if (age >= 21) {
		console.log("You may have a drink.");
	}
	else {
		console.log("Do not break the law.");
	}
}

var fahrenheitToCelsius = function(fahrenheit) {
	var celsius = (fahrenheit - 32) * 5/9;
	console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius");
}