const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  document.body.style.backgroundColor = randomColor();
  color.innerHTML = randomColor();
});

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + 0);
}

function randomColor() {
  return `rgb(${randomInt(255, 0)},${randomInt(255, 0)},${randomInt(255, 0)})`;
}
