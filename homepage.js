"use strict";
const container1 = document.querySelector(".container-boxes");
const boxx1 = 61;
const Imag = document.getElementById("text-container-img");
const listImag = ["images/b.jpg", "images/c.jpg", "images/d.jpg", "images/e.jpg", "images/f.jpg", "images/g.jpg", "images/h.jpg", "images/i.jpg", "images/j.jpg", "images/k.jpg",
    "images/l.jpg", "images/m.jpg", "images/n.jpg", "images/o.jpg", "images/p.jpg", "images/q.jpg", "images/r.jpg",];
const dropdown = document.querySelector(".option-div");
function transit() {
    if (dropdown == null)
        return;
    dropdown.classList.toggle("option-di");
}
for (let i = 0; i < boxx1; i++) {
    const ele1 = document.createElement("div");
    ele1.classList.add("boxes");
    container1?.append(ele1);
}
let j = 0;
let isMoving = true;
function frwmvn() {
    if (!isMoving) {
        if (j > 0) {
            let l = j - 1;
            Imag.src = listImag[l];
            j--;
        }
        else {
            isMoving = true;
        }
    }
    else {
        if (j < listImag.length - 1) {
            let k = j + 1;
            Imag.src = listImag[k];
            j++;
        }
        else {
            isMoving = false;
        }
    }
}
const intervalid = setInterval(frwmvn, 1000);
//# sourceMappingURL=homepage.js.map