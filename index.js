function evaluateString(string) {
  stringSplit = string.split(" ");

  switch (stringSplit[1]) {
    case "+":
      return +stringSplit[0] + +stringSplit[2];
    case "-":
      return +stringSplit[0] - +stringSplit[2];
    case "*":
      return +stringSplit[0] * +stringSplit[2];
    case "x":
      return +stringSplit[0] * +stringSplit[2];
    case "/":
      return (+stringSplit[0] / +stringSplit[2]).toFixed(3);
  }
}

const buttons = document.querySelectorAll(".button");
console.log(buttons);
let total = 0;
// initialize screen text
let screen = document.querySelector(".screen");
screen.innerText = total.toString();
let screenString = "";

function updateScreen(x) {
  x.addEventListener("click", (e) => {
    screenString += e.target.attributes["data-value"].value;
    screen.innerText = screenString.toString();
  });
}

buttons.forEach((button) => updateScreen(button));
