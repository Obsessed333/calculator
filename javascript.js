  const add = function (array) {
    return array.reduce((result, current) => result + current)
  };
  
  const subtract = function (array) {
    return array.reduce((result, current) => result - current)
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
const minusButton =document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const addButton = document.querySelector('.plus');
let display = document.querySelector('.result');
let result = 0;
let numbers = [];

numButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.textContent; 
        display.value += buttonValue;
    });
});

multiplyButton.addEventListener('click', function(){

    let newNumber = display.value;
    numbers.push(newNumber);
    display.value ='';
    console.log(multiply(numbers));
});

divideButton.addEventListener('click', function(){

    let newNumber = display.value;
    numbers.push(newNumber);
    display.value ='';
    console.log(divide(numbers));
});

addButton.addEventListener('click', function(){

    let newNumber = display.value;
    numbers.push(newNumber);
    display.value ='';
    console.log(add(numbers));
});

minusButton.addEventListener('click', function(){

    let newNumber = display.value;
    numbers.push(newNumber);
    display.value ='';
    console.log(subtract(numbers));
});