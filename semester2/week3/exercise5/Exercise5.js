let choice = 1;

while (choice == 1) {
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    let operation = prompt("Enter a number from 1 to 4" +
        "    1. For Addition " +
        "2. for Subtraction " +
        "3. for Multiplication " +
        "4. for Division "
    );
    console.log(num1 + " " + num2 + " " + operation);
	let result = arithmetic(num1, num2, operation);
    alert("result = " + result);
	console.log("result = " + result);

    choice = prompt("Carry out another calculation? Enter 1 for yes, 2 for no")
}

function arithmetic(num1, num2, operation) {
    if(operation == 1) {
        return Number(num1) + Number(num2);
    }else if(operation == 2) {
        return Number(num1) - Number(num2);
    }else if(operation == 3) {
        return Number(num1) * Number(num2);
    }else if(operation == 4) {
        return Number(num1) / Number(num2);
    }
}