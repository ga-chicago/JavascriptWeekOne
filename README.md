# JavascriptWeekOne
Control flow, boolean, variables dataTypes

#### 1. Data Types

Create the following variables and in a comment after the variable, state the type that it is. If you are unsure of the type, use the function `typeof` to find it out. Note that some types may not be what you expect...

* The number that represents *pi*.
var pie = 3.1415927;  //number

* Your full name.
var name = "Terry Lippincott";  //string

* A list of prime numbers.
var prim = [1, 3, 5, 7, 11];  //object

* The number 87
var num = 87;  //number

* If you are taking WDI or not.
var takingWDI = true;  //boolean

#### 2. Array Manipulation

* Create an array.
* Add 3 places you have visited in your life.
* Remove two of them from the front of the array.
* Add 3 places that you would like to travel to.
* Remove one of them from the end of the array.
* Change the value of the second index to Japan.
* Change the first string in the array to Where am I going?
* add the number 8 to the end of your array.

var places = [];
places[0] = "Paris";
places[1] = "Brazil";
places[2] = "Hawaii";

places.shift();
places.shift();

places.push("Alaska", "Puerto Rico", "Australia");

places.pop();

places[2] = "Japan";

places[0] = "Where am I going?";

places.push(8);


#### 2. Conditional Trials

* Create a logical block that detects if a user is able to purchase alcohol.
* If so, `console.log` out that they may have a drink.
* Else, warn them via `console.log` to not break the law.

var age = prompt("What's your age?");

if (age >= 21) {
    console.log("Congratulations! You may have a drink.");
}
else {
    console.log("Careful, don't break the law.");
}

Remember you can test all of these in the javascript console in the browser!

1.  `git add .`
2.  `git commit -m "a message"`
3.  `git push origin master`

Go to your github fork, and make a pull request!

