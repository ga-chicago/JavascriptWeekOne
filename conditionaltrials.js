const drinkingAge = 21

const checkID = function(drinkingAge){
	if (drinkingAge >= 21){
		console.log("Please have a drink")
	} else{
		console.log("Stop trying to break the law")
	}
}

const fahrenheit = 60

const conversion = function(fahrenheit){
	const celsius = (fahrenheit - 32) * 5/9;
	console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius");
}


//loop down from 50 when you reach 21 ask the user if they are thirsty
// print there response to the console

for(let i = 50; i >= 0; i--){
	if (i === 21){
	const thirstiness = prompt("are you thirsty?");
	console.log(thirstiness);
	}
};