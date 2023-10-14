let result = 0;
let operation = "";
let displayWindow = "";
let temp = [];

function appendOp(num) {
  displayWindow = displayWindow + num;
  display.value = displayWindow;
}

function sign(id) {
  operation = document.getElementById(id).getAttribute("operation");
  temp.push(Number(displayWindow));
  displayWindow = "";
  console.log(temp);
}

function equal() {
  temp.push(Number(displayWindow));
  console.log(temp);
  result = temp[0];
  for (i = 1; i < temp.length; i++) {
    if (operation == "+") {
      result += temp[i];
    } else if (operation == "-") {
      result -= temp[i];
    }
  }
  console.log(result);
  display.value = result;
  temp = [];
  displayWindow = "";
}

function clearScreen() {
  displayWindow = "";
  display.value = displayWindow;
  temp = [];
}
