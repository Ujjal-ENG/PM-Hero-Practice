const url = "https://jsonplaceholder.typicode.com/todos/77";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

document.getElementById("loadUserBTN").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => disPLayUser(data));
});

function disPLayUser(data) {
  const displayDiv = document.getElementById("display");

  data.map((el) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("card-info");
    let {
      name,
      email,
      address: { city },
      company: { name: companyName },
    } = el;
    createDiv.innerHTML = `
  <h1>Name: ${name}</h1>
  <h3>Email: ${email}</h3>
  <h4>Address: ${city}</h4>
  <h4>Company: ${companyName}</h4>
  `;
    displayDiv.appendChild(createDiv);
  });
}
