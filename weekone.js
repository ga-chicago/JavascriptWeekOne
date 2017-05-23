3.14; //number
"Payne Richards"; // string
[1, 2, 3, 5, 7]; // object
87 //number
true //boolean

var places = ['Seattle', 'San Francisco', 'New York'];
places.shift();
places.shift();
places.push("London");
places.push("paris");
places.pop();
places[1] = "Japan";
places[0] = "where am i going?";
places.push(8);

var booze = function(age){
	if(age >= 21){
		console.log("Have a drink!");
	} else {
		console.log("that is illegal. do not consume.");
	}
}
booze(22)

var tempConvert = function(tempF){
	var tempC = (((tempF - 32) * 5) / 9);
	return tempF + " degrees Farenheit is " + tempC + " degrees Celsius"
}