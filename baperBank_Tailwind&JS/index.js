const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (e) => {
  const emailField = document.getElementById("emailField").value;
  const passField = document.getElementById("passwordField").value;

  if (emailField === "ujjal7862@gmail.com" && passField === "1234") {
    window.location.href = "bankDash.html";
  } else {
    alert("Incorrect password or email...Please provide valid information");
  }
  console.log(emailField, passField);
});
