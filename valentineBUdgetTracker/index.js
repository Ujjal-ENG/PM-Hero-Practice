function getID(id) {
  const ID = document.getElementById(id);
  return ID;
}

function getTotal(qnID, pID, pIDS) {
  const qunatityIn = getID(qnID);
  const qunatityInValue = Number(qunatityIn.value);
  const cholatePrice = Number(getID(pID).innerText);
  const totalChPrice = getID(pIDS);
  const totalPrice = parseInt(qunatityInValue * cholatePrice);
  totalChPrice.innerText = totalPrice;
  const getPrice = Number(getID("toPrice").innerText) + totalPrice;
  getID("toPrice").innerText = getPrice;
}

const budgetInput = document.getElementById("success");
document.getElementById("success-msg").style.display = "none";

getID("budgetBTN").addEventListener("click", () => {
  const budgetValue = budgetInput.value;
  const parentEl = document.getElementById("parent-input-div");
  const newEl = document.createElement("h1");
  newEl.innerHTML = "Your Budget is: " + budgetValue;
  parentEl.appendChild(newEl);
  document.getElementById("success-msg").style.display = "block";
  budgetInput.value = "";
});

getID("addtocartBTN1").addEventListener("click", () => {
  getTotal("quantity1", "choclatePrice", "chPrice");
});

getID("addtocartBTN2").addEventListener("click", () => {
  getTotal("quantity2", "rosePrice", "roPrice");
});

getID("addtocartBTN3").addEventListener("click", () => {
  getTotal("quantity3", "diaryPrice", "daPrice");
});
