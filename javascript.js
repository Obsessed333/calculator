function calculate(firstNumber, operator, secondNumber) {

	firstNumber = Number(firstNumber);
	secondNumber = Number(secondNumber);

    if (operator === 'plus' || operator === '+') return firstNumber + secondNumber;
    if (operator === 'minus' || operator === '-') return firstNumber - secondNumber;
    if (operator === 'multiply' || operator === 'x') return firstNumber * secondNumber;
    if (operator === 'divide' || operator === '/') return firstNumber / secondNumber;
    
}



const numButtons = document.querySelectorAll('.num');
const equalButton = document.querySelector('.equal');
const operationButton = document.querySelectorAll('.operation');
let display = document.querySelector('.result');
let secondDisplay = document.querySelector('.storedValue');
let result = [];

numButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.textContent; 
        display.value += buttonValue;
    });
});


operationButton.forEach(button => {
  button.addEventListener('click', function() {
      const buttonValue = this.textContent; 
      const previousValue = display.value;
      result.push(previousValue);
      secondDisplay.value = secondDisplay.value + display.value + buttonValue;
      display.value = '';
  });
});
equalButton.addEventListener('click', function(){

  const previousValue = display.value;
  result.push(previousValue);
  secondDisplay.value = secondDisplay.value + display.value;
  if(secondDisplay.value.includes("+")){
    for (let i = result.length - 2; i < result.length; i++) {
      
      display.value = +result[i] + +result[i-1]
  }
  secondDisplay.value ='';
  }
  if(secondDisplay.value.includes("x")){
    for (let i = result.length - 2; i < result.length; i++) {
      
      display.value = +result[i] * +result[i-1]
      secondDisplay.value ='';
  }
  }
  if(secondDisplay.value.includes("-")){
    for (let i = result.length - 2; i < result.length; i++) {
      
      display.value = +result[i-1] - +result[i]
      secondDisplay.value ='';
  }
  }
  if(secondDisplay.value.includes("/")){
    for (let i = result.length - 2; i < result.length; i++) {
      
      display.value = +result[i-1] / +result[i]
      secondDisplay.value ='';
  }
  }
});
