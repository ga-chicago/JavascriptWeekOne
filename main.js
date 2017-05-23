var pi = Math.PI; //number
var fullName = "Julian Craigwell-Graham"; //string
var primeNumbers = [2, 3, 5, 7]; //object
var num = 87; //number
var WDI = true; //boolean

var newArray = ["Cape Town", "Barbados", "Kigali"];
newArray.shift();
newArray.shift();

newArray.push("Italy", "London");

newArray.pop();

newArray[0] = "Where am I going?";

newArray.push(8);


var validateAge = function(age){

	if(age >= 21){

		console.log("You may have a drink");
	}else{

		console.log("Do not break the law!");
	}
}

var converTemp = function(temp){

	var x = (5/9) * (temp-32);

	console.log(temp + " degrees Fahrenheit is " + x + " degrees Celsius");
}