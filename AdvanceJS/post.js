function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  const postContainer = document.getElementById("post-container");

  data.map((el) => {
    const postDiv = document.createElement("div");

    postDiv.innerHTML = `
    <h4>User: ${el.id}</h4>
    <h5>Post: ${el.title}</h5>
    <p>Post: ${el.body}</p>
    `;
    console.log(el);
    postContainer.appendChild(postDiv);
  });
}
loadPosts();
