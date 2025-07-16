import { increment } from "./counter.js";
import { reset } from "./counter.js";

let inc = document.getElementById("increment");
let disp = document.getElementById("display");
let res = document.getElementById("reset");

let sub = document.getElementById("subButton");
let txtinp = document.getElementById("input");
let txtout = document.getElementById("output");

txtinp.addEventListener("keydown", (e) => {
  console.log(e.key === "Escape");
  e.key === "Escape" && txtinp.blur();
});

inc.addEventListener("click", () => {
  disp.textContent = increment();
});

res.addEventListener("click", () => {
  disp.textContent = reset();
});

function pass() {
  txtout.style.color = "rgb(187, 225, 250)";
  txtout.textContent = "YOU'RE WELCOME 🤗";
}

function errorHandler(error) {
  txtout.style.color = "red";
  txtout.textContent = `${error}`;
}

sub.addEventListener("click", () => {
  let counter = txtinp.value.length;
  txtout.style.content = "unset";
  try {
    if (counter > 2) {
      pass();
    } else {
      throw new Error("INPUT SHOULD BE >= 3 😭");
    }
  } catch (error) {
    errorHandler(error);
  }
  txtinp.value = "";
});
