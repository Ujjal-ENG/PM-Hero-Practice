document.getElementById("add-taskBTN").addEventListener("click", () => {
  const value = document.getElementById("text-input").value;

  const taskContainer = document.getElementById("parent-container");

  const liItem = document.createElement("li");

  liItem.innerText = value;
  liItem.classList.add("new-li");
  taskContainer.appendChild(liItem);

  document.getElementById("text-input").value = "";
});
