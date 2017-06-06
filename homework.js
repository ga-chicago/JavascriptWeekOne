var pi = 3.14; //"number"

var fullName = "David Gardner"; //string

var prime = 11; //number

var number = 87; //number

var wdi = "yes"; //string


//array
var arrayNew = [];
//add 3 places to array
arrayNew.push ("New York", "San Francisco", "San Diego");

//remove 2 from the front
arrayNew.shift ("New York");
arrayNew.shift ("San Francisco");

//add 3 places like to travel to

arrayNew.push ("Rio", "Chicago", "England");

//remove one of them at the end of the array
arrayNew.pop();

//change value of second index to Japan
arrayNew[1] = "Japan";

//Change the first string in the array to Where am I going?
arrayNew[0] = "Where am I going?";

//add the number 8 to the end of your array
arrayNew.push (8);

//proper age to purchase 
var question = parseInt(window.prompt('How old are you?'));

if(question <=21){
	console.log('drink water')
}

else {
	console.log('drink water too')

}
//function to convert f into c F-32 * .55 = celcius

var temp = function(x) {
  console.log(x - 32 * .55)
};



