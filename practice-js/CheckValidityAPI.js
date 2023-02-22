document.getElementById("checkValidity").addEventListener("click", () => {
  const inputOB = document.getElementById("id1");

  if (!inputOB.checkValidity()) {
    document.getElementById("demo").innerHTML = inputOB.validationMessage;
  } else {
    document.getElementById("demo").innerHTML =
      "great!!! you provide a valid number";
  }
});
const inputOB = document.getElementById("id1");
inputOB.addEventListener("keyup", () => {
  if (!inputOB.checkValidity()) {
    document.getElementById("demo").innerHTML = inputOB.validationMessage;
  } else {
    document.getElementById("demo").innerHTML =
      "great!!! you provide a valid number";
  }
});
