const shape = document.getElementById("shape");
const colors = ["red", "blue", "grey", "green", "pink", "orange"];

function paintShape() {
    let rnd = Math.floor((Math.random() * colors.length-1) + 1);
    shape.style.background = colors[rnd];
}