function getId(id) {
  const ID = document.querySelector(id);
  return ID;
}

getId("#addBook").addEventListener("click", (e) => {
  e.preventDefault();
  if (
    getId("#title").value === "" &&
    getId("#author").value === "" &&
    getId("#year") === ""
  ) {
    alert("Please fill up the all input field");
  }
  console.log("Hello");
});
