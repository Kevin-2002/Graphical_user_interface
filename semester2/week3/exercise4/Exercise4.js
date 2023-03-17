for (let i = 1; i <= 10; i++) {
    let calc = cube(i);
    document.write("The cube of " + i + " is " + calc + "<br>");
}

function square(number) {
    return number*number;
}

function cube(number) {
    return square(number)*number;
}