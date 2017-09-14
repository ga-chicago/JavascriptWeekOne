//1
const counting = () => {
for (i = 1; i <= 10; i++) {
	for (Z = 1; Z <= 10; Z++) {
		console.log(i * Z);
	};
};
};

//2
const assignGrade = (grade) => {
if (grade < 60)			{console.log("For " + grade + " you get an F.")}
else if (grade < 70)	{console.log("For " + grade + " you get a D.")}
else if (grade < 80)	{console.log("For " + grade + " you get a C.")}
else if (grade < 90)	{console.log("For " + grade + " you get a B.")}
else 					{console.log("For " + grade + " you get an A.")}
};

//3
const tellFortune = (job, partner, city, children) => {
console.log("You will become a " + job + "in " + city + " and marry " + partner + ". You will have " + children + " children.")
};

//4
const sortArray = [2, 1, 3, 5, 6, 73, 7, 9,  3, 565, 879, 98];

const sortingFunction = (sort_this) => {
const sorted = sort_this.sort(function(a, b){return a - b});
console.log(sorted[1], sorted[sorted.length - 2]);
};

//5

const letterCounter = (String, Letter) => {
const countingArray = Array.from(String);
const filteredArray = countingArray.filter((value, index) => {
  return value === Letter;
});
return filteredArray.length
};x

//6
const sortingFunction = (one, two, three) => {
const bigThree = [one, two, three];
const sorted = bigThree.sort();
return sorted[sorted.length - 1]
};

//7

const flip = (Number) => {
const flipped = Array.from(Number.toString());
const sorted = flipped.reverse();
return parseInt(sorted.join(""));
}