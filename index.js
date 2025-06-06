 

//Defining input variable
const input = require('readline-sync');
console.log("This is a calculator, Add your first number, Operator sign, and your second number.");


// defining what happens when NaN for num1
let num1Input = input.question("Enter your first number: ");
let num1 = parseFloat(num1Input);

// Defining num1 NaN message
if (isNaN(num1)){
    console.log("You didnt enter a number in the first spot hommie, you gotta add spice to cook with a number if you want a real eqation.");
    process.exit(1)
}

// Get the Operator
let sign = input.question("+,-, *, /?: ");

// Defining num2 NaN possibilty.
let num2Input = input.question("Enter your second number: ");
let num2 = parseFloat(num2Input);

if (isNaN(num2)){
    console.log("AYO, Your sexond number isnt right big daw, you gotta put a valid number.");
    process.exit(1)
}


// Doing the math here--
if (sign == "+") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if(sign == '-') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (sign == "*") {
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
} else if (sign == "/") {
    if (num2 == 0){
        console.log("You know how dividing works right?")
    }else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
    }
} else {
    console.log("invalid operator, try using a math sign next time instead of that garbage.")
}


/*console.log("Start");
throw new Error("This is a test error.");
console.log("end")
console.log("End"); */

/* THIS IS A COMMENT */