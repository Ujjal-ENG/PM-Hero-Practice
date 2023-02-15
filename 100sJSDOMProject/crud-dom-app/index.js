function getId(id) {
  const ID = document.querySelector(id);
  return ID;
}

const title = getId("#title");
const author = getId("#author");
const year = getId("#year");

getId("#addBook").addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === "" && author.value === "" && year.value === "") {
    alert("Please fill up the all input field");
  } else {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <th>${title.value}</th>
    <th>${author.value}</th>
    <th>${year.value}</th>
    `;
    getId("#bookList").appendChild(newRow);
  }
});
