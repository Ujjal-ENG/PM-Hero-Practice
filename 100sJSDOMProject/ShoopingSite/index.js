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
  let total = Number(price * quantity);
  tr.innerHTML = `
  <th>${count}</th>
  <td>${name}</td>
  <td>${price}</td>
  
  <td class="text-center font-bold text-xl" id="qty">
  <i class="fa-solid fa-plus cursor-pointer icr"></i>
  <span id="qty-set">${quantity} </span>
  <i class="fa-solid fa-minus cursor-pointer dcr"></i>
  </td>
  <td id="total">${total}</td>
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

  const icr = document.querySelectorAll(".icr");
  const dcr = document.querySelectorAll(".dcr");

  icr.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = Number(e.target.parentNode.children["qty-set"].innerText);
      const price = Number(
        e.target.parentNode.parentNode.children[2].innerText
      );
      let qty = value + 1;
      if (qty >= 11) {
        alert("You Can order Maximum 10 items for each product");
      } else {
        e.target.parentNode.children[2].style.color = "black";
        e.target.parentNode.children["qty-set"].innerText = qty;
        let newTotal = qty * price;
        e.target.parentNode.parentNode.children["total"].innerText = newTotal;
        const totalValue = Number(
          document.getElementById("finalToal").innerText
        );
        const fullTotal = totalValue + price;
        document.getElementById("finalToal").innerText = fullTotal;
        document.getElementById("subTotal").innerHTML = fullTotal;
      }
    })
  );

  dcr.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = Number(e.target.parentNode.children["qty-set"].innerText);
      const price = Number(
        e.target.parentNode.parentNode.children[2].innerText
      );
      let qty = value - 1;
      if (qty >= 0) {
        e.target.parentNode.children["qty-set"].innerText = qty;
        let newTotal = qty * price;
        e.target.parentNode.parentNode.children["total"].innerText = newTotal;
        const totalValue = Number(
          document.getElementById("finalToal").innerText
        );
        const fullTotal = totalValue - price;
        document.getElementById("finalToal").innerText = fullTotal;
        document.getElementById("subTotal").innerHTML = fullTotal;
      } else {
        e.target.disabled = "true";
        e.target.style.color = "red";
      }
    })
  );

  const btns = document.querySelectorAll(".actionDEL");
  for (const btn of btns) {
    btn.addEventListener("click", (e) => {
      // e.target.parentNode.parentNode.remove();
      e.stopImmediatePropagation();
      e.target.parentNode.parentNode.remove();
      const value = Number(
        e.target.parentNode.parentNode.children["total"].innerText
      );

      const totalValue = Number(document.getElementById("finalToal").innerText);
      const newTotal = totalValue - value;
      document.getElementById("finalToal").innerHTML = newTotal;
      count--;
      document.getElementById("cartitem").innerText = count;
      document.getElementById("cartitem2").innerText = count;
      document.getElementById("subTotal").innerHTML = newTotal;
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
