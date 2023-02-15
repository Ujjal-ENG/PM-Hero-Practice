document.getElementById("change-btn").addEventListener("click", () => {
  const getRandome = Math.round(Math.random() * 1000000);
  document.getElementById("root").style.backgroundColor = "#" + getRandome;
});

// step 1: create onload handler

window.onload = () => {
  main();
};

function main() {}

// step 2: random color generator function
function getRandome() {
  const getRandome = Math.round(Math.random() * 1000000);
  return getRandome;
}
