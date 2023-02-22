const url = "https://jsonplaceholder.typicode.com/todos/77";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
