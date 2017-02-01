var pi = 3.1415;
var name = "Reuben Matthew Ayres";

var primes = [];

function isPrime(n) {
	//i know there's a more efficient way to write this, where only half as many calculations are required, maybe by running a divisible by 2 testcase first, but i'm not taking the time to write this now.
	for(var i = n-1; i > 1; i--) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var a = 1;
var idx = 0;
do {
	if(isPrime(a)) {
		primes[idx] = a;
		idx++;
	}
	a++;
} while (primes.length < 30) 
console.log ('first 30 primes: ' +  primes);

var num = 87;

var taking_WDI = true;

var countries = ["France", "Germany", "Italy"];
countries.shift();
countries.shift();
countries.push("Japan");
countries.push("The Republic of Georgia");
countries.push("Brazil");
countries.pop();
//SECOND VVALUE ALREADY JAPAN!WHAT!I DIDN'T EVEN DO THAT ON PURPOSE!
countries[1] = "J A P A N";
countries[0] = "Where am I going?";
countries.pop(8);


var age = 19;


function oldEnough(b) {
	if(b >= 21) {
		console.log(b + " is all good. have a BEER ON ME!");
	} else {
		console.log(b + " IS TOO YOUNG DON'T BREAK THE LAW MF! ATF AND CPD AND FBI AND SBI AND SHERIFF JIM HOPPER ARE ON THEIR WAY!");
	}	
}
for(var i = 18; i < 50; i++) {
	oldEnough(i);
}