
var numberPi = Math.numberPi;
//"undefined"
var myName = "Benn Myers";
//"string"
var primeNumber = [1, 3, 5, 7, 11];
//"object"
var num87 = 87;
//"number"
var WDI = true;
//boolean


//Here's our array of places I've visited
var placesVisited = ["Denver", "Roswell", "Roatan"];
//Now we remove the first two
placesVisited.splice(0, 2);
//Now we add three places I'd like to travel to
placesVisited.splice(1, 0, "Paris", "Vietnam", "Japan");
//Let's drop the last one
placesVisited.pop();
//now we change the first item of the array to where are we going
placesVisited[0] = "Where am I going?";
//add the number 8
placesVisited.push(8);


//Drinking age checking function
var cardHard = function(age) {
	if (age >= 21) {
		console.log("Have a drink!")
	}
		else {
			console.log("Do you know what they do to kids like you in prison?")
		};
	};

//Temp conversion function
var tempConversion = function(temperture) {
	return temperture + " degrees Fahrenheit is " + ((temperture - 32) / 1.8) + " degrees Celsius"
;}