let result = 0;
let operation = "";
let displayWindow = 0;
let temp = [];

function appendOp(num) {
  displayWindow = displayWindow + num;
  display1.value = displayWindow;
}

function sign(id) {
  console.log(displayWindow);
  temp.push(Number(displayWindow));
  operation = document.getElementById(id).getAttribute("operation");
  temp.push(operation);
  display1.value = displayWindow;
  displayWindow = "";
  console.log(temp);
}

function equal() {
  temp.push(Number(displayWindow));
  console.log(temp);
  result = temp[0];

  for (i = 1; i < temp.length; i += 2) {
    let signOp = temp[i];
    let numOp = temp[i + 1];
    console.log(numOp);

    if (signOp === "+") {
      result += numOp;
    } else if (signOp === "-") {
      result -= numOp;
    } else if (signOp === "×") {
      result *= numOp;
    } else if (signOp === "÷") {
      result /= numOp;
    }
  }
  console.log(result);
  display1.value = displayWindow;
  display2.value = Number(result);
  temp = [];
  displayWindow = "";
}

function clearScreen() {
  displayWindow = "";
  display1.value = displayWindow;
  display2.value = 0;

  temp = [];
}
