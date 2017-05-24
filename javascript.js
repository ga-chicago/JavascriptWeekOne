var pi = Math.PI;
var Name = "AbdiqaniAbdulkarim";
var number = 87;
var primenumbers = [2,3,5,7];
var takingWDI = true;

var vacay = ["Seattle", "San Diego", "Toronto"];
vacay.shift();
vacay.shift();
vacay.push("Lansing", "Chicago","LA");
vacay[1] = "Japan";
vacay[0] = "Where am I going";
vacay.push(8);
var alcohol = function(age) {
  if(age >= 21) {

    console.log("you may have a drink");

  } else {

    console.log("you may not have a drink");
  }


}
var temp = function(fah){
  var x = (fah - 32 ) * 5 / 9;
  console.log(fah + " degrees Fahrenheit " + x + " degrees Celsius");
}
