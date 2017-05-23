var pi = Math.PI; //number
var fullName = 'Lane Sailer'; //string
var primeNumbers = [3, 5, 7, 11]; //object
var eightySeven = 87; //number
var wdiTruth = true; //boolean

var anArray = [];
anArray.push("Ohio");
anArray.push("Florida");
anArray.push("Minnesota");
anArray.shift();
anArray.shift();
anArray.push("Kansas");
anArray.push("Maryland");
anArray.push("California");
anArray.pop();
anArray[1] = "Japan";
anArray[0] = "Where am I going?";
anArray.push(8);

function buyAlcohol(age) {
	if (age < 21) {
		console.log("don't even think about it");
	} else {
		console.log("go ahead");
	}
}