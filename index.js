function getBTN(id) {
  const btn = document.getElementById(id);
  return btn;
}

const budgetInput = document.getElementById("success");
document.getElementById("success-msg").style.display = "none";

getBTN("budgetBTN").addEventListener("click", () => {
  const budgetValue = budgetInput.value;
  const parentEl = document.getElementById("parent-input-div");
  const newEl = document.createElement("h1");
  newEl.innerHTML = "Your Budget is: " + budgetValue;
  parentEl.appendChild(newEl);
  document.getElementById("success-msg").style.display = "block";
  budgetInput.value = "";
});
