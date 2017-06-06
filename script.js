// 1. Data Types 

var pi = Math.PI; //number
var fullName = "Alexandra Alday"; //string
var primeList = [2, 3, 5, 7, 11, 13, 17, 19]; //object
var number = 87; //number
var currentWdiStudent = true; //boolean



// 2. Array Manipulation

var array = ["Grand Canyon", "Big Sur", "Disney World"] //create array
for(var i =0; i < 2; i++) {  //remove two from the front of the array
 	array.shift(); 
 }
array.push("Big Four Ice Caves", "Pompeii", "Hadrians Wall"); //add three places to visit
array.pop(); //remove one from the end of array
array[1] = "Japan"; //change value of second index to Japan
array[0] = "Where am I going?"; //change first string to where am i going?
array.push(8); //add 8 to end of array



// 3. Conditional Trials

var purchase = parseInt(window.prompt("What is your age, again?")); //gather age
if (purchase >= 21){
	console.log('Go ahead and enjoy some alcholic libations!') //give user go ahead if legal to drink
} 
else {
	console.log('Sorry, you may not drink. Dont be a turd and break the law!') //warn the user they are breaking the law
}



// 4. Farenheit to Celsius 

var fahrenheit = parseInt(window.prompt("What temperature in Fahrenheit should we convert to Celsius?")); //gather temperature
function convertToCelsius(integer) {       // convert this temp to celsius
	var celsius = (fahrenheit - 32) * 0.5556
	console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.")
}
convertToCelsius(fahrenheit);   //display celsius to user


