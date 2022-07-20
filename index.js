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

//add event handlers
