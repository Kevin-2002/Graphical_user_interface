function function1() {
	document.write("Hello from function1<br>");
}

function function2() {
	document.write("Hello from function2 <br>");
}

function function3(number) {
	document.write("You passed me, function3, a value of: " + number + "<br>");
}

function function4(number, word) {
	document.write("You passed me, function4, values of: " + number + " and " + word + "<br>")
}

function function5(number1, number2, number3) {
	document.write("You passed me, function5, values of: " + number1 + ", " + number2 + " and " + number3 + "<br>")
}

function function6(first, last) {
	document.write("You passed me, function6, the name: " + first + " " + last + "<br>")
}

function function7(number) {
	return number;
}

function function8(first, last) {
	return first + " " + last;
}

function1();

function2();

function3(4);

function4(10, "ten");

function5(10, 20, 30);

function6("Kevin", "McShane");
//reuse function 6
function6(prompt("first name?"), prompt("last name?"));

let number = function7(1000);
//display return value
document.write("function7 returned a value of " + number + " to me" + "<br>")

let full = function8("Kevin", "McShane");
//display return
document.write(full + "<br>")

let function9 = (num1, num2, num3) => {return num1 + num2 + num3;}
let sum = function9(4, 6, 10)
document.write(sum);