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
  txtout.style.color = "white";
  txtout.textContent = "YOU'RE WELCOME";
}

function miss() {
  txtout.style.color = "red";
  txtout.textContent = "ERROR: INPUT AT LEAST 3 CHARS";
}

sub.addEventListener("click", () => {
  let counter = txtinp.value.length;
  txtout.style.fontWeight = "600";
  counter > 2 ? pass() : miss();
  txtinp.value = "";
});
