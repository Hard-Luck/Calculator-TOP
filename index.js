const numbers = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");

const calculator = {
  storedNumber: 0,
  secondNumber: 0,
  operator: "",
};

// Works
function calculate() {
  switch (calculator.operator) {
    case "":
      break;
    case "+":
      screen.innerText = +calculator.storedNumber + +calculator.secondNumber;
      break;
    case "-":
      screen.innerText = +calculator.storedNumber - +calculator.secondNumber;
      break;
    case "*":
      screen.innerText = +calculator.storedNumber * +calculator.secondNumber;
      break;
    case "x":
      screen.innerText = +calculator.storedNumber * +calculator.secondNumber;
      break;
    case "/":
      screen.innerText = (
        +calculator.storedNumber / +calculator.secondNumber
      ).toFixed(3);
      break;
  }
}

function clearCalculator() {
  calculator.storedNumber = 0;
  calculator.operator = "";
  calculator.secondNumber = 0;
}

function clearScreen() {
  screen.innerText = "";
}

function updateScreen(input) {
  if (screen.innerText === "0") {
    screen.innerText = input;
  } else {
    screen.innerText += input;
  }
}

// Adds number to screen.innerText
function addNumber(element, val) {
  element.addEventListener("click", (e) => {
    updateScreen(e.target.attributes[val].value);
  });
}

function operation(op, val) {
  op.addEventListener("click", (e) => {
    answer();
    calculator.operator = e.target.attributes[val].value;
    calculator.storedNumber = screen.innerText;
    clearScreen();
  });
}

function answer() {
  if (calculator.operator !== "") {
    calculator.secondNumber = screen.innerText;
    calculate();
    clearCalculator();
    calculator.storedNumber = screen.innerText;
  }
}

numbers.forEach((number) => addNumber(number, "data-digit"));
operators.forEach((operator) => operation(operator, "data-digit"));

// calculated the result using calculate and then clears the storage and sets new storedNumber
equals.addEventListener("click", answer);

clear.addEventListener("click", () => {
  clearScreen();
  clearCalculator();
});
