const depositBTN = document.getElementById("btnDeposit");

depositBTN.addEventListener("click", () => {
  const depositINput = Number(document.getElementById("depositInput").value);

  const depositAmount = document.getElementById("depositAmount");

  const deop = Number(depositAmount.innerText);
  const depositTotal = String(depositINput + deop);
  depositAmount.innerText = depositTotal;
  console.log(depositINput, deop);
});
