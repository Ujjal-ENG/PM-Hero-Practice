document.getElementById("change-btn").addEventListener("click", () => {
  document.getElementById("root").style.backgroundColor = getRandome();
});


// step 2: random color generator function
function getRandome() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
