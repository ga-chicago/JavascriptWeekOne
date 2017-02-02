console.log("Window is working");


//data types
var numPi = 3.14; //typeof "number"

var fullName = 'Chris Swormstedt'; // typeof "string"

var primeList = [2, 3, 5, 7]; // typeof "object"

var num = 87; // typeof "number"

var wdiStudent = true; // typeof "boolean"

// Array Manipulation

var cityArray = ["Barcelona", "Zurich", "San Deigo"];

cityArray.shift("Barcelona");
cityArray.shift();
cityArray.unshift("Seattle", "Tokyo", "Sydney");
/*cityArray.unshift("Tokyo");
cityArray.unshift("Sydnee");*/
cityArray.pop();
cityArray[2] = "Japan";
cityArray[0] = "Where am I going?";
cityArray.push(8);

// Conditional Trials

var age = 18;


if (age >= 21){
	console.log('Cheers!');
} 
else if(age < 21){
	console.log('Go home!');
}
