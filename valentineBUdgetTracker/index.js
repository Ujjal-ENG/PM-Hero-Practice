function getID(id) {
  const ID = document.getElementById(id);
  return ID;
}

getID("promo-msg").style.display = "none";

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

getID("promoBTN").addEventListener("click", () => {
  const promoIN = getID("promo");
  const values = promoIN.value;
  const promoINValue = Number(promoIN.value);
  const getPrice = Number(getID("toPrice").innerText);

  if (promoINValue === 0) {
    getID("toPrice").innerText = getPrice;
  } else {
    if (values === "LOVE!10") {
      getID("promo-msg").style.display = "block";
      const disApp = getPrice * 0.1;
      console.log(getPrice, disApp);
      const res = getPrice - disApp;
      getID("toPrice").innerText = res;
      console.log(res);
    } else {
      alert("Please type valid promo for get this disconts");
    }
  }
});

const budgetInput = document.getElementById("success");
document.getElementById("success-msg").style.display = "none";

getID("budgetBTN").addEventListener("click", () => {
  const budgetValue = budgetInput.value;
  const parentEl = getID("parent-input-div");
  const newEl = document.createElement("h1");
  newEl.innerHTML = "Your Budget is: " + budgetValue;
  parentEl.appendChild(newEl);
  getID("success-msg").style.display = "block";
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
