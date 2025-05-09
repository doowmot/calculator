let firstOperand = "";
let operator = "";
let secondOperand = "";

const add = (a, b) =>  Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function appendToDisplay(valueToDisplay) {
    const calcDisplay = document.getElementById("display");
    calcDisplay.textContent += valueToDisplay;
}

function initialiseDigitButtons() {
    const digitButtons = document.querySelectorAll(".digit-button");

    for (const button of digitButtons) {
        button.addEventListener('click', function() {
            const clickedDigit = this.textContent;
            appendToDisplay(clickedDigit);

            if (operator === "") {
                firstOperand += clickedDigit;
                console.log("first number is:", firstOperand);
            }
            else if (operator !== "") {
                secondOperand += clickedDigit;
                console.log("second number is:", secondOperand);
            }            
        });
    }
}

function initialiseOperatorButtons() {
    const operatorButtons = document.querySelectorAll(".operator-button");

    for (const button of operatorButtons) {
        button.addEventListener('click', function() {
        const clickedOperator = this.textContent;
        appendToDisplay(clickedOperator);
        operator = clickedOperator;
        console.log("operator is:", operator);
        });
    }
}

function initialiseControlButtons() {
    const equalsButton = document.getElementById("equals-button");
    const clearButton = document.getElementById("clear-button");
    const calcDisplay = document.getElementById("display");

    equalsButton.addEventListener('click', function() {
        calcDisplay.textContent = "";
        const result = operate(Number(firstOperand), operator, Number(secondOperand));
        appendToDisplay(result);
        console.log("the result is:", result);
    });

    clearButton.addEventListener('click', function() {
        calcDisplay.textContent = "";
        firstOperand = "";
        operator = "";
        secondOperand = "";
    });
}

function initialiseCalculator() {
    initialiseDigitButtons();
    initialiseOperatorButtons();
    initialiseControlButtons();
}

initialiseCalculator();
