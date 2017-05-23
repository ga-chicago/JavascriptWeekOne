//Function that detects if user is of age.
//Enter ofAge(age) <-- and insert your age where you see 'age'

var ofAge = function (age) {
    if (age >= 21) {
        console.log("You are of age! Please hand me your keys and delete SnapChat.");
    } else {
        console.log("You are too green! Please go find a movie to watch or move to Germany to proceed.");
    };
};

// Converts Fahrenheit to Celsius.
//Enter convertDegreesFToC(fahrenheit) <--- enter current degrees fahrenheit where you see "fahrenheit"

var convertDegreesFToC = function (fahrenheit) {
    var celsius = ((fahrenheit - 32) * (5/9));
    return celsius
    console.log(fahrenheit + " degrees fahrenheit is " + celsius + " degrees Celsius.");
}
