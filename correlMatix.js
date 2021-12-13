function yVarCheck() {
  // select variable with highest correlation
  //total fat
  const tdBlue = document.querySelectorAll(".blue1");
  for (let box of tdBlue) {
    box.classList.add("blueback");
  }

  //identify multicollinearity
  const tdRed = document.querySelectorAll(".red1");
  for (let boxes of tdRed) {
    boxes.classList.add("redback");
  }

  //button setup
  document.getElementById("button2").disabled = false;
  document.getElementById("button1").disabled = true;
}

function elVar() {
  // exclude multicollinearity variable
  //sodium, carbo and protein
  const tdRed = document.querySelectorAll(".red2");
  for (let boxes of tdRed) {
    boxes.classList.add("redback");
  }

  //   //include total
  const tdBlue = document.querySelectorAll(".blue2");
  for (let box of tdBlue) {
    box.classList.add("blueback");
  }
  //button setup
  document.getElementById("button2").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("buttonReset").disabled = false;
}

function reset() {
  //remove boxes color
  const boxes = document.querySelectorAll("td");
  for (let box of boxes) {
    box.classList.remove("blueback");
    box.classList.remove("redback");
  }
  //button setup
  document.getElementById("button2").disabled = true;
  document.getElementById("button1").disabled = false;
  document.getElementById("buttonReset").disabled = true;
}
