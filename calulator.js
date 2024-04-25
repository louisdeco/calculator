// Global variables

// Elements of the computation
let firstNumber;
let operator;
let secondNumber;

// Element of the screen
let calculation = document.querySelector(".calculation");
let result = document.querySelector(".result");

// Raw array
let rawItem= "";

// Regex to change operator
const regexOperator = /[-+/*]/ 

// Buttons
const buttonsDigit = document.querySelectorAll(".button-digit");
buttonsDigit.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator && !rawItem) {
            rawItem += button.textContent;
            result.textContent = "";
            result.textContent += button.textContent;

        }
        else {
            rawItem += button.textContent;
            result.textContent += button.textContent
        } 
    });
});

const buttonsOperator = document.querySelectorAll(".button-operator");
buttonsOperator.forEach((button) => {
    button.addEventListener("click", () => {
        if ((operator && firstNumber) && (!secondNumber)) {
            operator = button.textContent;
            calculation.textContent = calculation.textContent.replace(regexOperator, button.textContent)
        }
        else if (!operator) {
            operator = button.textContent;
            firstNumber = rawItem;
            rawItem="";
            calculation.textContent = firstNumber + " " + operator

        }
    });
});

const buttonSeparator = document.querySelector(".button-separator");
buttonSeparator.addEventListener("click", () => {
    if (!rawItem.includes(".")) {
        rawItem += buttonSeparator.textContent;
        result.textContent += buttonSeparator.textContent;
    }
})

const buttonEvaluate = document.querySelector(".button-evaluate");
buttonEvaluate.addEventListener("click", () => {
    if (firstNumber && operator) {
        secondNumber = rawItem;
        rawItem = "";
    }
})




