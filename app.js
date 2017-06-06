var pi = 3.14 //number
var name = 'aaron sato' //string
var primenumbers = 3 //number
var number = 87 //number
var WDI = 'yes' //string

var visited = ['Hawaii', 'New York', 'Arizona']
var first =visited.shift();
var second = visited.shift();
visited.push('Alaska', 'Greece', 'Italy')
visited.pop(3)
visited.splice(1, 1, 'Japan')
visited.splice(0, 1, 'Where am I going')
visited.push(8)

var drinkingAge = function(age) {
	if(age >= 21){
		console.log('Have a drink')
	}
	else{
		console.log('Drinking is illegal')
	}
};

var temperature = function(f){
	var fTemp = f;
	var fToC = (fTemp-32) * (.5556);
	var message = fTemp + ' degrees Farenheit is ' + fToC 
	+ ' degrees Celsius';
	console.log(message);
}