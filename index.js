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
    display2.value = "Imaginary number";
  } else if (!Number.isInteger(Math.sqrt(result))) {
    display2.value = parseFloat(Math.sqrt(result)).toFixed("12");
  } else {
    display2.value = Math.sqrt(result);
  }
  console.log(display2.value);
  displayWindow = num + displayWindow;
  display1.value = displayWindow;
  displayWindow = "";
  temp = [];
}

function percentage() {
  temp.push(Number(displayWindow));
  result = temp[0] * temp[2] * 0.01;
  display2.value = result;
  displayWindow = "";
  temp = [];
}

function sign(id) {
  temp.push(Number(displayWindow));

  console.log(temp);

  operation = document.getElementById(id).getAttribute("operation");
  if (operation === "%") {
    temp.push("×");
    temp.push(0.01);
  } else {
    temp.push(operation);
  }

  displayWindow = "";
  console.log(temp);
}

function equal() {
  temp.push(Number(displayWindow));
  temp.push(document.getElementById("equal").getAttribute("operation"));
  console.log(temp);
  result = temp[0];

  for (i = 1; i < temp.length; i += 2) {
    let signOp = temp[i];
    let numOp = temp[i + 1];

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
  if (result > 999999999999) {
    display2.value = parseFloat(result).toExponential("10");
  } else if (!Number.isInteger(result)) {
    display2.value = parseFloat(result).toFixed("12");
  } else {
    display2.value = result;
  }
  console.log(temp);
  console.log(display1.value);
  display1.value = "";
  for (i = 0; i < temp.length; i++) {
    display1.value += temp[i];
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
