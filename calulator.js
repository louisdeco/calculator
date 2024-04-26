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

// Switch to know if computation done
let computationOver = false;

// Buttons' interaction functions
const buttonsDigit = document.querySelectorAll(".button-digit");
buttonsDigit.forEach((button) => {
    button.addEventListener("click", () => {
        if (computationOver) {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            rawItem = "";
            result.textContent = "";
            calculation.textContent = "";
            computationOver=false;
        }
        if (operator && !rawItem) {
            rawItem += button.textContent;
            result.textContent = "";
            result.textContent += button.textContent;

        }
        else {
            rawItem += button.textContent;
            result.textContent += button.textContent;
        } 
    });
});

const buttonsOperator = document.querySelectorAll(".button-operator");
buttonsOperator.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator && firstNumber && !secondNumber && !rawItem) {
            operator = button.textContent;
            calculation.textContent = calculation.textContent.replace(regexOperator, button.textContent);
            computationOver=false;
        }
        else if (operator && firstNumber && (rawItem)) {
            secondNumber = rawItem;
            rawItem="";
            operation();
            computationOver=false;
            firstNumber = result.textContent;
            operator = button.textContent;
            calculation.textContent = result.textContent + " " + operator;
        }
        else if (calculation.textContent.includes("=")) {
            firstNumber = result.textContent;
            operator = button.textContent;
            calculation.textContent = firstNumber + " " + operator;
            computationOver=false;
        }
        else if (!operator) {
            operator = button.textContent;
            firstNumber = rawItem;
            rawItem="";
            calculation.textContent = firstNumber + " " + operator;
        }
    });
});

const buttonSeparator = document.querySelector(".button-separator");
buttonSeparator.addEventListener("click", () => {
    if (!rawItem.includes(".")) {
        if (computationOver) {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            rawItem = "";
            result.textContent = "";
            calculation.textContent = "";
            computationOver=false;
        }
        if (operator && !rawItem) {
            rawItem += "0."
            result.textContent = "";
            result.textContent += "0.";

        }
        else if ((rawItem === "" || !rawItem) && !result.textContent) {
            rawItem += "0.";
            result.textContent += "0.";
        }
        else {
            rawItem += buttonSeparator.textContent;
            result.textContent += buttonSeparator.textContent;
        }
    }
})

const buttonEvaluate = document.querySelector(".button-evaluate");
buttonEvaluate.addEventListener("click", () => {
    if (firstNumber && operator) {
        secondNumber = rawItem;
        rawItem = "";
        operation();
    }
})

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    rawItem = "";
    result.textContent = "";
    calculation.textContent = "";
})

const buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", () => {
    result.textContent = "";
    rawItem = "";
})

// Calculation
function operation() {
    calculation.textContent += " " + secondNumber + " " + "=";
    computationOver = true;
    switch (operator) {
        case "+": 
            result.textContent = +parseFloat(+firstNumber + +secondNumber).toFixed(5);
            break;
        case "/":
            result.textContent = +parseFloat(+firstNumber / +secondNumber).toFixed(5);
            break;
        case "-":
            result.textContent = +parseFloat(+firstNumber - +secondNumber).toFixed(5);
            break;
        case "*":
            result.textContent = +parseFloat(+firstNumber * +secondNumber).toFixed(5);
            break;
    }
}




