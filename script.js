let display = document.getElementById('display');
let currentInput = '';
let lastOperator = '';
let lastNumber = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (lastNumber !== '') {
            calculate();
        }
        lastNumber = currentInput;
        lastOperator = operator;
        currentInput = '';
    }
}

function calculate() {
    if (currentInput !== '' && lastNumber !== '' && lastOperator !== '') {
        let result;
        const num1 = parseFloat(lastNumber);
        const num2 = parseFloat(currentInput);

        switch(lastOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        display.value = result;
        currentInput = result.toString();
        lastNumber = '';
        lastOperator = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    lastNumber = '';
    lastOperator = '';
}