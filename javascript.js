function add(a, b) {
  let result= a + b;
  return Math.round(result * 100) / 100;
}

function subtract(a, b) {
  let result = a - b;
  return Math.round(result * 100) / 100;
}

function multiply(a, b) {
  let result= a * b;
  return Math.round(result * 100) / 100;

}

function divide(a, b) {
  if (b === 0) {
      return "ERROR";
  }
  let result= a / b;
  return Math.round(result * 100) / 100;
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
  previousValue = 0;
  previousOperation = null;
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
