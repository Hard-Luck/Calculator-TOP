// Works
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "x":
      return num1 * num2;
    case "/":
      return (num1 / num2).toFixed(3);
  }
}

// All information of the calculator
const calculatorDefaults = {
  onScreen: "",
  operator: "",
  savedNumber: 0,
  numberIsMemory: false,
};

// Debug - Shows in all states in console
let calculator = {
  onScreen: "",
  operator: "",
  savedNumber: 0,
  numberIsMemory: false,
};

function answer() {
  if (calculator.savedNumber !== 0 && screen.innerText !== 0) {
    screen.innerText = calculate(
      calculator.savedNumber,
      +screen.innerText,
      calculator.operator
    );
    calculator.numberIsMemory = false;
  }
}

// Debug - Works
function inputNumber(num) {
  // updates screen with data from button clicks "data-digit" property
  num.addEventListener("click", (e) => {
    screen.innerText = calculator.onScreen +=
      e.target.attributes["data-digit"].value;
  });
}

// This is hacked together
function inputOperator(operator) {
  // updates screen with data from button clicks "data-digit" property
  operator.addEventListener("click", (e) => {
    let operation = e.target.attributes["data-digit"].value;
    if (calculator.numberIsMemory === false) {
      calculator.savedNumber = +screen.innerText;
      screen.innerText = 0;
      calculator.onScreen = "";
      calculator.numberIsMemory = true;
    } else if (calculator.numberIsMemory === true) {
      calculator.savedNumber = calculate(
        calculator.savedNumber,
        +screen.innerText,
        operation
      );
      calculator.onScreen = screen.innerText = calculator.savedNumber;
      calculator.numberIsMemory = false;
    }

    calculator.operator = e.target.attributes["data-digit"].value;
  });
}

function clearCalculator() {
  screen.innerText = "0";
  calculator = calculatorDefaults;
}

// Nodelist of all the digits and event listeners for when clicked - Debug: Works
const buttons = document.querySelectorAll(".digit");
buttons.forEach((button) => inputNumber(button));

//Nodelist of all the operators and event listeners for when clicked
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => inputOperator(operator));

const equals = document.querySelector(".equals");
equals.addEventListener("click", answer);

// Clear the screen - Debug: Works
let clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);

// initialize screen text - Debug: Works
let screen = document.querySelector(".screen");
screen.innerText = "0";
