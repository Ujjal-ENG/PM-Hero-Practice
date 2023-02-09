// const items = document.getElementsByClassName("item");

// for (let item of items) {
//   item.style.color = "red";
// }

// parent chiled relation
const grantParent = document.querySelector(".todo-list");
const parent = grantParent.children;

const children = parent[1].children;

// creating an element

const divEl = document.createElement("div");
const h2Element = document.getElementById("title");

divEl.className = "red";

divEl.setAttribute("id", "red");
divEl.setAttribute("title", "Red div");

grantParent.appendChild(divEl);

