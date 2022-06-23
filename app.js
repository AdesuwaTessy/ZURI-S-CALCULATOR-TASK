let operand1 = prompt("Enter first number:");
let operators = prompt("Enter operator: +,-,/,*,%");
let operand2 = prompt("Enter second number:");
  
operand1 = parseFloat(operand1);
operand2 = parseFloat(operand2);

let result = 0;

if (operators === '+'){
    result = operand1 + operand2;
    alert(result)
} else if (operators === '-'){
    result = operand1 - operand2;
    alert(result)
} else if (operators === '*'){
    result = operand1 * operand2;
    alert(result)
} else if (operators === '/'){
    result = operand1 / operand2;
    alert(result)
} else if (operators === '**'){
    result = operand1 ** operand2;
    alert(result)
} else if (operators === '%'){
    result = operand1 % operand2;
    alert(result)
} else if (operators != '+,-,*,/,%'){
    error = 'Error! You have not selected an operator.';
    alert(error)
}