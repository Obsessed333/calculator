  const add = function (a, b) {
    return a + b;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function (array) {
    return array.reduce((product, current) => product * current)
  };

  const divide = function(array){
    return array.reduce((quotient, current) => quotient / current)
  };

let num1= 0;
let num2= 0;
let operator;

function operate(num1,operator,num2){

num1 = prompt('enter a number');
num2 = prompt('enter another number');
operator = prompt('enter an operator');
let result;

if(operator == "+"){
   result = add(+num1,+num2);
}else if(operator == "x"){
  result =  multiply([+num1,+num2]);
}else if(operator == "/"){
   result = divide([+num1,+num2]);
}else if(operator == '-'){
   result = subtract(+num1,+num2);
}

alert(result);
}

const numButtons = document.querySelectorAll('.num');
const equalButton = document.querySelector('.equal');
let display = document.querySelector('.result');
let result = 0;

numButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.textContent; 
        display = buttonValue;
    });
});
