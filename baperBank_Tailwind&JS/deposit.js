const depositBTN = document.getElementById("btnDeposit");

depositBTN.addEventListener("click", () => {
  const depositINput = document.getElementById("depositInput");

  const depoIn = Number(depositINput.value);

  const depositAmount = document.getElementById("depositAmount");

  const deop = Number(depositAmount.innerText);
  const depositTotal = String(depoIn + deop);
  depositAmount.innerText = depositTotal;
  depositINput.value = "";
});
