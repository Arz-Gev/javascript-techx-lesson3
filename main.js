import { increment } from "./counter.js";
import { reset } from "./counter.js";


let inc = document.getElementById("increment")
let disp = document.getElementById("display")
let res = document.getElementById("reset")

let sub = document.getElementById("subButton")
let txtinp = document.getElementById("form")
let txtout = document.getElementById("output")


inc.addEventListener("click", () => {
    disp.textContent = increment()
});

res.addEventListener("click", () => {
    disp.textContent = reset()
});

sub.addEventListener("click", () => {
    let count = txtinp.value.length;
    if (count > 2) {
        txtout.textContent = "Wlecome"
        txtinp.value = "";
    } else { txtout.textContent = "Not Wlecome"}
});
