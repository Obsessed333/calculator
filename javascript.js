function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return "Error: Division by zero";
  }
  return a / b;
}

function solveOperation(operation,a, b){

if(operation =='+'){

  return add(a,b);
}else if(operation == '-'){

  return subtract(a,b);
}else if(operation == '/'){

  return divide(a,b);
}else if(operation =='x'){
  return multiply(a,b);
}else{
  return 'invalid operation';
}

}




const numButtons = document.querySelectorAll('.num');
const equalButton = document.querySelector('.equal');
const operationButton = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.clear');
let display = document.querySelector('.result');
let secondDisplay = document.querySelector('.storedValue');
let result = [];
let previousValue = 0;
let previousOperation = null;

numButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.textContent; 
        display.value += buttonValue;
    });
});

clearButton.addEventListener('click', function(){

  display.value = '';
  secondDisplay.value ='';
  result =[];
});

operationButton.forEach(button => {
  button.addEventListener('click', function() {
      const currentOperation = this.textContent.trim();
      if (previousOperation !== null) {
        previousValue = solveOperation(previousOperation, previousValue, +display.value);
        display.value = previousValue;
    } else {
        previousValue = +display.value;
    }

    display.value = "";
    secondDisplay.value = previousValue;
    previousOperation = currentOperation;
    
});
  });


equalButton.addEventListener('click', function(){

  
  secondDisplay.value = solveOperation(previousOperation, previousValue, +display.value);
});
