document.getElementById("add-taskBTN").addEventListener("click", () => {
  const value = document.getElementById("text-input").value;

  const taskContainer = document.getElementById("parent-container");

  const liItem = document.createElement("li");

  liItem.innerText = value;
  liItem.classList.add("new-li");
  taskContainer.appendChild(liItem);

  document.getElementById("text-input").value = "";

  const allli = document.getElementsByClassName("new-li");

  for (let li of allli) {
    li.addEventListener("click", (e) => {
      e.target.parentNode.removeChild(e.target);
    });
  }
});

document.getElementById("chnageText").addEventListener("click", () => {
  setInnerText("p-1", getValueFromInput("text-input"));
});

function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
