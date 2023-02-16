let count = 0;
document.getElementById("card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const cardInfo = e.target.parentNode.parentNode.children;
    const name = cardInfo[0].innerText;
    const price = cardInfo[1].children[0].innerText;
    const quantity = cardInfo[2].children[0].innerText;
    display(name, price, quantity);
    cartItem(quantity);
  } else if (e.target.classList.contains("btn-input")) {
    const cardInfo = e.target.parentNode.parentNode.children;
    const name = cardInfo[0].innerText;
    const price = cardInfo[1].value;
    const quantity = cardInfo[2].value;
    if (price == "" && quantity == "") {
      alert("PLease provide a number");
      cardInfo[1].value = "";
      cardInfo[2].value = "";
    } else {
      display(name, price, quantity);
      cartItem(quantity);
    }
  } else {
    return;
  }
});

function display(name, price, quantity) {
  count++;

  const tableData = document.getElementById("tableData");
  let tr = document.createElement("tr");
  const total = Number(price * quantity);

  tr.innerHTML = `
  <th>${count}</th>
  <td>${name}</td>
  <td>${price}</td>
  <td>${quantity}</td>
  <td>${total}</td>
  `;
  tableData.appendChild(tr);
  getTotal(total);
}

function cartItem(quantity) {
  const cartItem = document.getElementById("cartitem");
  const cartItem2 = document.getElementById("cartitem2");
  const items = Number(cartItem.innerHTML);
  const res = items + Number(quantity);
  cartItem.innerHTML = res;
  cartItem2.innerHTML = res;
}

function getTotal(total) {
  const showToal = document.getElementById("finalToal");
  const showToalNum = Number(showToal.innerHTML);
  showToal.innerHTML = total + showToalNum;
  const subTotal = document.getElementById("subTotal");
  subTotal.innerHTML = total + showToalNum;
}
