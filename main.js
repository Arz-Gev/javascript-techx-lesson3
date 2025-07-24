import { increment } from "./counter.js";
import { reset } from "./counter.js";

let incrementButton = document.getElementById("increment");
let display = document.getElementById("display");
let resetButton = document.getElementById("reset");

let submitButton = document.getElementById("submitButton");
let txtInput = document.getElementById("userInput");
let txtOutput = document.getElementById("output");

incrementButton.addEventListener("click", () => {
  display.textContent = increment();
});

resetButton.addEventListener("click", () => {
  display.textContent = reset();
});

function pass() {
  txtOutput.style.color = "rgb(187, 225, 250)";
  txtOutput.textContent = "YOU'RE WELCOME 🤗";
}

function errorHandler(error) {
  txtOutput.style.color = "red";
  txtOutput.textContent = `${error}`;
}

submitButton.addEventListener("click", () => {
  let counter = txtInput.value.length;
  txtOutput.style.content = "unset";
  try {
    if (counter > 2) {
      pass();
    } else {
      throw new Error("INPUT SHOULD BE >= 3 😭");
    }
  } catch (error) {
    errorHandler(error);
  }
  txtInput.value = "";
});
