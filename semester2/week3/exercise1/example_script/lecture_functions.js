function first(){
	console.log("First function");
}

first();
first();

//one parameter function - parameter is number
function second(number){
	console.log("Second function passed a value of " + number);
}

second(2);

//two parameters function - parameters are number and str
function third(number, str){
	console.log("Third function passed a number " + number + " and a string " + str);
}

let num1 = 3;
let str1 = "Three";
third(num1, str1);

//function which return a value - in this example a string value is returned.
function fourth(){
	return "Hello from fourth function";
}

let result = fourth();
console.log(result);

//function with two parameters, x and y, and it returns a number value:
//The result of adding numbers passed to the parameters x and y 
function fifth(x, y){
	return x + y;
}

let sum = fifth(10,20);
console.log(sum);
console.log(fifth(5,10));

//functions can be written in a more compact style as arrow functions
let product = (num1, num2) => {return num1 * num2;}

let mul = product(4, 5);

console.log(mul);
