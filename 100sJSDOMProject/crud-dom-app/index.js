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
  }

});
