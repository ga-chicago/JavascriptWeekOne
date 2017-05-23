//1. Data Types

var pi = 3.14
	typeof pi //number

var myFullName = "David Cady Jr."
	typeof myFullName //string

var primeNumbers = [2, 3, 5, 7, 11, 13]
	typeof primeNumbers //object

var number87 = 87
	typeof number87 //number

var takingWDI = true
	typeof takingWDI //boolean

//2. Array Manipulation

var placesVisited = ["Paris", "Amsterdam", "Rome"]// Create an array. Add 3 places you have visited in your life.
	placesVisited.shift(); //Remove two of them from the front of the array.
	placesVisited.shift(); //Remove two of them from the front of the array.
	placesVisited.push("Copenhagen", "Grand Canyon", "Galapogos"); //Add 3 places that you would like to travel to.
	placesVisited.pop(); //Remove one of them from the end of the array.
	placesVisited[1] = "Japan" //Change the value of the second index to Japan.
	placesVisited[0] = "Where am I going?" //Change the first string in the array to Where am I going?
	placesVisited.push(8); //add the number 8 to the end of your array.

//3. Conditional Trials

var canYouDrink = function (age){
	if (age >= 21){
		console.log("Drink away!");
	} else console.log("your going to jail!")
}
canYouDrink(age);

//4. Fahrenheit to Celsius
var fahrenheitToCelsius = function(tempInFahrenheit) {
	var celsius = ((tempInFahrenheit - 32) * (5 / 9));

	console.log(tempInFahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.");	
}

fahrenheitToCelsius();



