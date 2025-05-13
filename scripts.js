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

function clearDisplay() {
    const calcDisplay = document.getElementById("display");
    calcDisplay.textContent = "";
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
    appendToDisplay(Number(result.toFixed(5)));
    console.log("the result is:", result);

    firstOperand = result;
    operator = "";
    secondOperand = "";
}

function initialiseEqualsButton() {
    const equalsButton = document.getElementById("equals-button");

    equalsButton.addEventListener('click', function() {
        clearDisplay();
        handleEqualsInput();
    });
}

function handleClearInput() {
    firstOperand = "";
    operator = "";
    secondOperand = "";
}

function initialiseClearButton() {
    const clearButton = document.getElementById("clear-button");

    clearButton.addEventListener('click', function() {
        clearDisplay();
        handleClearInput();
    });
}

function initialiseCalculator() {
    initialiseDigitButtons();
    initialiseOperatorButtons();
    initialiseEqualsButton();
    initialiseClearButton();
}

initialiseCalculator();
