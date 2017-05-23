// 1. Data Types

// Create the following variables and in a comment after the variable, state the type that it is. If you are unsure of the type, use the function `typeof` to find it out. Note that some types may not be what you expect...

// * The number that represents *pi*.

var pi = Math.PI; // number



// * Your full name.

var fullName = "Jackson Petrie Tenclay" // string



// * A list of prime numbers.

var listOfPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] // object



// * The number 87

var x = 87 // number



// * If you are taking WDI or not.

var amITakingWDI = true // boolean




// 2. Array Manipulation

// * Create an array.
// * Add 3 places you have visited in your life.
// * Remove two of them from the front of the array.
// * Add 3 places that you would like to travel to.
// * Remove one of them from the end of the array.
// * Change the value of the second index to Japan.
// * Change the first string in the array to Where am I going?
// * add the number 8 to the end of your array.

var places = ["US", "Canada", "Spain"]; // create array and add 3 places

places.shift();
places.shift(); // remove first two values

places.push("The Netherlands", "Honduras", "New Zealand"); // add 3 places

places.pop(); // remove one from the end

places[1] = "Japan"; // change second item to Japan

places[0] = "Where am I going?" // change first string

places.push(8); // add the number 8 to the end



// 2. Conditional Trials

// * Create a function that detects if a user is able to purchase alcohol.
// * If so, `console.log` out that they may have a drink.
// * Else, warn them via `console.log` to not break the law.

var canIDrink = function(age) {
	if (age >= 21) {
		console.log("Go ahead");
	} else {
		console.log("You shouldn't have a drink");
	};
};



// 3.

// Create a function that take an integer (in Fahrenheit) and convert the temperature to Celsius.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius"

var convertToCelsius = function(degreesF) {
	var degreesC = (degreesF - 32) * 5 / 9;
	console.log(degreesF + " degrees Fahrenheit is " + degreesC + " degrees Celsius");
};



// Remember you can test all of these in the javascript console in the browser!

// 1.  `git add .`
// 2.  `git commit -m "a message"`
// 3.  `git push origin master`


