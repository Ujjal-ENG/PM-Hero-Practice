// resuable funation

function getID(id) {
  const IDS = document.getElementById(id);
  return IDS;
}

function updateNumber(id, isUpNumber, phid) {
  let count;
  const input = getID(id).value;
  const values = Number(input);
  if (isUpNumber) {
    count = values + 1;
  } else {
    count = values - 1;
  }
  let res;
  if (phid == "casePrice") {
    res = 59 * count;
  } else {
    res = 1219 * count;
  }
  getID(phid).innerText = res;
  getID(id).value = count;
}

function calculateTotal() {
  const getPhonePrice = Number(getID("phonePrice").innerText);
  const getCasePrice = Number(getID("casePrice").innerText);
  const total = getCasePrice + getPhonePrice;
  getID("Subtotal").innerText = total;
  const finalTotal = Math.floor(total * 0.1);
  getID("tax").innerText = finalTotal;
  const res = finalTotal + total;
  getID("total").innerText = res;
}
