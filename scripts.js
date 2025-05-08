let firstNum = null
let operator = null
let secondNum = null

function add(num1, num2) {
    console.log("add function:", num1+num2)
    return num1 + num2
}

function subtract (num1, num2) {
    console.log("subtract function:", num1-num2)
    return num1 - num2
}

function multiply (num1, num2) {
    console.log("multiply function:", num1*num2)
    return num1 * num2
}

function divide (num1, num2) {
    console.log("divide function:", num1/num2)
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

function initialiseDigitButtons() {
    const digitButtons = document.querySelectorAll('.digit-button');
    console.log("list of digit buttons:", digitButtons)

    for (let i=0; i<digitButtons.length; i++) {
        digitButtons[i].addEventListener('click', function() {
            const digitValue = this.textContent;
            console.log("button pressed:", digitValue)
        });
    }
}



add(2,6)
subtract(3,4)
multiply(4,4)
divide (10,2)

initialiseDigitButtons()

