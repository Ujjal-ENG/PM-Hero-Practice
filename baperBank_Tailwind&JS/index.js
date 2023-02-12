const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (e) => {
  const emailField = document.getElementById("emailField").value;
  const passField = document.getElementById("passwordField").value;

  if (emailField === "ujjal7862@gmail.com" && passField === "1234") {
    console.log("Succesfully Logged in");
  } else {
    console.log("Incorrect password or email...");
  }
  console.log(emailField, passField);
});
