//Write a for loop that will iterate from 0 to 10. 
//For each iteration of the for loop, it will multiply the number by 9 
//and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for
// every multiplier from 1 to 10 (100 results total).

var max = 10;

for(i=0; i <= max; i++) {
	console.log([i] * 9)
};


//Write a function named assignGrade that: takes 1 argument, 
//a number score(examle: 89 returns B). returns a grade for the score, 
//either "A", "B", "C", "D", or "F". Call that function for a few different 
//scores and log the result to make sure it works.

var assignGrade = function(grade) {

	if(grade > 94) {
			console.log("You got an A")
} else if(grade >= 82 && grade < 94) { //grade needs to be on both sides of the &&
			console.log("You got a B")

} else if(grade >= 75 && grade < 81) {
			console.log("You got a C")

} else if(grade >= 65 && grade < 74) {
			console.log("You got a D")

} else {
			console.log("F")
}
}; 

//Check the results of assignGrade function from the previous exercise for every value from 60 to 100 -
// so your log should show "For 89, you got a B. For 90, you got an A.", etc.


//Write a function named tellFortune that:
//Takes 4 arguments: number of children, partner's name, geographic location, job title.

var tellFortune = function(children, partner, geographic, job) {
	console.log("You will be a", [job], "in", [geographic], "and married to", [partner], "with", [children], "kids")

};

//Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.


//Write a JavaScript function which will take an array of numbers stored and find the 
//second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] 
//Expected Output : 2,4

var newArray = [1, 2, 3, 4, 5];

function numbers() {

	for(i=0; i < newArray.length; i++) {
		if(newArray[i] === 4) {
			console.log(newArray[i])
		} else if(newArray[i] === 2) {
			console.log(newArray[i])
		}
	}
};



//Write a JavaScript function that accepts two
//arguments, a string and a letter and the
// function will count the number of 
// occurrences of the specified letter within the string. 
//Sample arguments : 'Listen to the river sing sweet songs, 'o' Expected output : 1

function wordGame(string, letter) {
	var phrase = console.log(string)

};


//Write a JavaScript function that accept a list of country names as input
 //and returns the longest country name as output. Go to the editor Sample function : 
 //LongestCountryName(["Australia", "Germany", "United States of America"]) Expected 
 //output : "United States of America"

 function wordGame(country, city) {
	var phrase = console.log(country)

};


//Write a JavaScript function that reverse a number. 
//Example x = 32243; Expected Output : 34223

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));
