// const items = document.getElementsByClassName("item");

// for (let item of items) {
//   item.style.color = "red";
// }

// parent chiled relation
const grantParent = document.querySelector(".todo-list");
const parent = grantParent.children;

const children = parent[1].children;

console.log(children);
