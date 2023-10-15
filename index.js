let result = 0;
let operation = "";
let displayWindow = "";
let temp = [];

function appendOp(num) {
  displayWindow = displayWindow + num;
  display1.value = displayWindow;
}

function sqrRt(num) {
  result = Number(displayWindow);
  if (result < 0) {
    display2.value = "Error";
    alert("Enter positive number!");
  } else {
    display2.value = parseFloat(Math.sqrt(result)).toFixed("12");
  }

  console.log(display2.value);
  displayWindow = num + displayWindow;
  display1.value = displayWindow;
  displayWindow = "";
  temp = [];
}

function percentage() {
  temp.push(Number(displayWindow));
  console.log(temp);
  result = temp[0] * temp[2] * 0.01;
  display2.value = result;
  display1.value = displayWindow;
  displayWindow = "";
  temp = [];
}

function sign(id) {
  console.log(displayWindow);
  temp.push(Number(displayWindow));
  operation = document.getElementById(id).getAttribute("operation");
  if (operation === "%") {
    temp.push("×");
    temp.push(0.01);
  } else {
    temp.push(operation);
  }

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
  if (result > 999999999999) {
    display2.value = parseFloat(result).toExponential("10");
  } else if (!Number.isInteger(result)) {
    display2.value = parseFloat(result).toFixed("12");
  } else {
    display2.value = result;
  }

  temp = [];
  displayWindow = "";
}

function clearScreen() {
  displayWindow = "";
  display1.value = displayWindow;
  display2.value = 0;

  temp = [];
}
