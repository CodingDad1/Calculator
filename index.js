// Calculator Math
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }


    //functions


    // clear a single number
    clear() {
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined
    }
    // deletes a single number
    delete(){

    }
    //adds number to operation screen (when a number is clicked it will show up like real calculator)
    appendNumber(number){
        this.currentOperand = number

    }
    // + - * /
    chooseOperation(operation){

    }
    // takes both numbers computes what needs to be displayed into a single number
    compute(){

    }
    // displaying what was computed
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }

}




// Telling JS To select these things based on the data type in the HTML file index.html
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// variables functionality^^

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})















//Defining input variable
//const input = require('readline-sync');
//console.log("This is a calculator, Add your first number, Operator sign, and your second number.");


// defining what happens when NaN for num1
//let num1Input = input.question("Enter your first number: ");
//let num1 = parseFloat(num1Input);

// Defining num1 NaN message
//if (isNaN(num1)){
    //console.log("You didnt enter a number in the first spot hommie, you gotta add spice to cook with a number if you want a real eqation.");
    //process.exit(1)
//}

// Get the Operator
//let sign = input.question("+,-, *, /?: ");

// Defining num2 NaN possibilty.
//let num2Input = input.question("Enter your second number: ");
//let num2 = parseFloat(num2Input);

//if (isNaN(num2)){
    //console.log("AYO, Your sexond number isnt right big daw, you gotta put a valid number.");
    //process.exit(1)
//}


// Doing the math here--
//if (sign == "+") {
    //console.log(`${num1} + ${num2} = ${num1 + num2}`);
//{ else if(sign == '-') {
    //console.log(`${num1} - ${num2} = ${num1 - num2}`);
//} else if (sign == "*") {
    //console.log(`${num1} * ${num2} = ${num1 * num2}`)
//} else if (sign == "/") {
    //if (num2 == 0){
        //console.log("You know how dividing works right?")
    //}else {
        //console.log(`${num1} / ${num2} = ${num1 / num2}`)
    //}
//} else {
    //console.log("invalid operator, try using a math sign next time instead of that garbage.")
//}


/*console.log("Start");
throw new Error("This is a test error.");
console.log("end")
console.log("End"); */

/* THIS IS A COMMENT */