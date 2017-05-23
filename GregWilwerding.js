var pi = Math.PI;
//number
var me = "Greg Wilwerding";
//string 
var primeNumbers = [2, 3, 5, 7, 11, 13];
//object
var eightySeven = 87;
//number
var wdiEnrolled = true;
//boolean

var vacations = ["New York", "San Francisco", "Miami"];
vacations.unshift();
vacations.unshift();
vacations.push("Cuba", "Amsterdam", "Montreal");
vacations.pop();
vacations[1] = "Japan";
vacations[0] = "Where am I going?";

var legal = function(age) {
	if (age >= 21) {
		console.log("Have a drink!");
	} else {
		console.log("Don't break the law.");
	}
}

var temp = function(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5/9);
	console.log(fahrenheit + " degrees Fahrenheit is " 
		+ celsius + " degrees Celsius.");
}