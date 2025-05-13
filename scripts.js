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

function handleDigitInput(digit) {
    appendToDisplay(digit);

    if (operator === "") {
        firstOperand += digit;
        console.log("first number is:", firstOperand);
    } else if (operator !== "") {
        secondOperand += digit;
        console.log("second number is:", secondOperand);
    }     
}

function initialiseDigitButtons() {
    const digitButtons = document.querySelectorAll(".digit-button");

    for (const button of digitButtons) {
        button.addEventListener('click', function() {
            const clickedDigit = this.textContent;        
            handleDigitInput(clickedDigit);
        });
    }
}

function handleOperatorInput(clickedOperator) {
    appendToDisplay(clickedOperator);
    console.log("operator is:", clickedOperator);
    operator = clickedOperator;
}

function initialiseOperatorButtons() {
    const operatorButtons = document.querySelectorAll(".operator-button");

    for (const button of operatorButtons) {
        button.addEventListener('click', function() {
        const clickedOperator = this.textContent;
        handleOperatorInput(clickedOperator)
        });
    }
}

function handleEqualsInput() {
    const result = operate(Number(firstOperand), operator, Number(secondOperand));
    appendToDisplay(result)
    console.log("the result is:", result);
}

function initialiseEqualsButton() {
    const equalsButton = document.getElementById("equals-button");
    const calcDisplay = document.getElementById("display");

    equalsButton.addEventListener('click', function() {
        calcDisplay.textContent = "";
        handleEqualsInput()
    });
}

function initialiseControlButtons() {
    const clearButton = document.getElementById("clear-button");
    const calcDisplay = document.getElementById("display");

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
    initialiseEqualsButton();
}

initialiseCalculator();
