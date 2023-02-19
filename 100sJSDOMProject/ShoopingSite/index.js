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
    // price == "" || quantity == ""
    if (price < 0 || quantity <= 0 || price == "" || quantity == "") {
      alert("PLease provide a valid number");
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

document.getElementById("viewCart").addEventListener("click", () => {
  console.log("clicked");
  window.location.assign("cartItems.html");
});

let totalArr = [];

function display(name, price, quantity) {
  count++;
  const tableData = document.getElementById("tableData");
  let tr = document.createElement("tr");
  const total = Number(price * quantity);
  tr.innerHTML = `
  <th>${count}</th>
  <td>${name}</td>
  <td>${price}</td>
  
  <td class="text-center font-bold text-xl" id="qty">
  <i class="fa-solid fa-plus cursor-pointer" id="icr"></i>
  ${quantity}
  <i class="fa-solid fa-minus cursor-pointer" id"dcr"></i>
  </td>
  <td>${total}</td>
  <td>
                  <i class="fa-sharp fa-solid fa-trash text-center cursor-pointer text-red-600 actionDEL text-xl"></i>
                </td>
  `;
  let sum = 0;
  tableData.appendChild(tr);
  totalArr.push(total);
  for (let i of totalArr) {
    sum += i;
  }
  document.getElementById("finalToal").innerHTML = sum;
  document.getElementById("subTotal").innerHTML = sum;
  
  const btns = document.querySelectorAll(".actionDEL");
  for (const btn of btns) {
    btn.addEventListener("click", (e) => {
      // console.log(e.target.parentNode.parentNode.remove());
      console.log(e.target.parentNode.parentNode.children[1]);
      e.stopPropagation();
    });
  }
}

function cartItem(quantity) {
  const cartItem = document.getElementById("cartitem");
  const cartItem2 = document.getElementById("cartitem2");
  const items = Number(cartItem.innerHTML);
  const res = items + Number(quantity);
  cartItem.innerHTML = res;
  cartItem2.innerHTML = res;
}
