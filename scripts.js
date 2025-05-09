let firstNum = null
let operator = null
let secondNum = null

function add(num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator === "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "*") {
        return multiply(firstNum, secondNum);
    } else if (operator === "/") {
        return divide(firstNum, secondNum);
    }
}

function display(valueToDisplay) {
    const calcDisplay = document.getElementById("display")
    calcDisplay.textContent += valueToDisplay
}

function initialiseDigitButtons() {
    const digitButtons = document.querySelectorAll(".digit-button");

    for (const button of digitButtons) {
        button.addEventListener('click', function() {
            const digitValue = this.textContent;
            console.log("button pressed:", digitValue);
            display(digitValue)
        });
    }
}

function initialiseOperatorButtons() {
    const operatorButtons = document.querySelectorAll(".operator-button")

    for (const button of operatorButtons) {
        button.addEventListener('click', function() {
        const operatorValue = this.textContent;
        console.log("button pressed:", operatorValue);
        display(operatorValue)
        });
    }
}

function initialiseControlButtons() {
    const equalsButton = document.getElementById("equals-button")
    const clearButton = document.getElementById("clear-button")

    equalsButton.addEventListener('click', function() {
        const equalsValue = this.textContent;
        display(equalsValue)
    });

    clearButton.addEventListener('click', function() {
        const clearValue = this.textContent;

        const calcDisplay = document.getElementById("display");
        calcDisplay.textContent = ""
    });
}

function initialiseCalculator() {
    initialiseDigitButtons()
    initialiseOperatorButtons()
    initialiseControlButtons()
}

initialiseCalculator()
