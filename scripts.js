let firstNum = ""
let operator = ""
let secondNum = ""

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
            display(digitValue)

            if (operator == "") {
                firstNum += digitValue
                console.log("first number is:", firstNum)
            }
            else if (operator != "") {
                secondNum += digitValue
                console.log("second number is:", secondNum)
            }            
        });
    }
}

function initialiseOperatorButtons() {
    const operatorButtons = document.querySelectorAll(".operator-button")

    for (const button of operatorButtons) {
        button.addEventListener('click', function() {
        const operatorValue = this.textContent;
        display(operatorValue)
        operator = operatorValue
        console.log("operator is:", operator)
        });
    }
}

function initialiseControlButtons() {
    const equalsButton = document.getElementById("equals-button")
    const clearButton = document.getElementById("clear-button")
    const calcDisplay = document.getElementById("display");

    equalsButton.addEventListener('click', function() {
        calcDisplay.textContent = ""
        const result = operate(parseInt(firstNum), operator, parseInt(secondNum))
        display(result)
        console.log("the result is:", result)
    });

    clearButton.addEventListener('click', function() {
        calcDisplay.textContent = ""
        firstNum = ""
        operator = ""
        secondNum = ""
    });
}

function initialiseCalculator() {
    initialiseDigitButtons()
    initialiseOperatorButtons()
    initialiseControlButtons()
}

initialiseCalculator()
