const depositBTN = document.getElementById("btnDeposit");

depositBTN.addEventListener("click", () => {
  const depositINput = document.getElementById("depositInput");

  const depoIn = Number(depositINput.value);

  const depositAmount = document.getElementById("depositAmount");

  const deop = Number(depositAmount.innerText);

  const balanceToal = document.getElementById("balanceTotal");

  const balanceTotal = Number(balanceToal.innerText);

  const depositTotal = String(depoIn + deop);
  const balanceTotals = String(deop + balanceTotal);

  balanceToal.innerText = balanceTotals;
  depositAmount.innerText = depositTotal;
  depositINput.value = "";
});
