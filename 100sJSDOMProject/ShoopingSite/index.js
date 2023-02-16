let count = 0;
document.getElementById("card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const cardInfo = e.target.parentNode.parentNode.children;
    const name = cardInfo[0].innerText;
    const price = cardInfo[1].children[0].innerText;
    const quantity = cardInfo[2].children[0].innerText;
    display(name, price, quantity);
  } else {
    return;
  }
});

function display(name, price, quantity) {
  count++;
  let finalTotal = 0;
  const cartItem = document.querySelector(".cartitem");
  const subTotal = document.getElementById("subTotal");
  console.log(subTotal.innerHTML);
  console.log(cartItem.innerHTML);
  const tableData = document.getElementById("tableData");
  let tr = document.createElement("tr");
  const total = Number(price * quantity);
  finalTotal = finalTotal + total;
  console.log(finalTotal);
  tr.innerHTML = `
  <th>${count}</th>
  <td>${name}</td>
  <td>${price}</td>
  <td>${quantity}</td>
  <td>${total}</td>
  `;
  tableData.appendChild(tr);
}
