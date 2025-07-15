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

sub.addEventListener("click", () => {
  let counter = txtinp.value.length;
  if (counter > 2) {
    txtout.style.color = "black";
    txtout.textContent = "Welcome";
    txtinp.value = "";
  } else {
    txtout.textContent = "Erorr: input should be at least 3 chars";
    txtout.style.color = "red";
  }
});
