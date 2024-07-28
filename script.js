let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let displayValue = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.value;

        if (buttonText === 'C') {
            displayValue = '';
            operator = '';
            firstNumber = '';
            secondNumber = '';
            display.value = displayValue;
        } else if (buttonText === '=' && operator !== '') {
            secondNumber = displayValue;
            let result = calculate(firstNumber, operator, secondNumber);
            displayValue = result;
            operator = '';
            firstNumber = '';
            secondNumber = '';
            display.value = displayValue;
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '/' || buttonText === '*') {
            firstNumber = displayValue;
            operator = buttonText;
            displayValue = '';
            display.value = displayValue;
        } else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    });
});

function calculate(num1, operator, num2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
    }

    return result;
}