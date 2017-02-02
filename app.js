var Pie = 3.14

var myName = "Katelyn Fenchel"

var prime = [1,3,5,7];

if(prime[0] === 1){
	console.log("this is a prime number")
}

var x = 87

var Class = true

var places = ["California", "Texas", "New York"];

//adding three new places 

 places.push("Colorado", "New Mexico", "Florida");
 
// deleted the last  in the array

 places.pop();

// changing value to Japan from second one
places[1] = "Japan"

//adding 8 to the end
places.push(8)


//Create a logical block that detects if a user is able to purchase alcohol.
var userAge = 21

var canYouDrink = function(age){
	if (age >= 21){
		console.log("Yes you may have a drink!");
	}
	else{
		console.log("You would be breaking the law if you did!");
	}
};

canYouDrink(userAge);

