const arr = ["Dublin", "Cork", "Galway"]

for (i = 0; i < 2; i++){
	const arrShift = arr.shift()
	console.log(arrShift, ' this is arrShift')
};

arr.push("Italy", "Spain", "England");

arr.pop();

arr[1] = "Japan";

arr[0] = "Where am I going?";

arr.push(8);

console.log(arr);
