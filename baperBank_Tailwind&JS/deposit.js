// const depositBTN = document.getElementById("btnDeposit");

// depositBTN.addEventListener("click", () => {
//   const depositINput = document.getElementById("depositInput");

//   const depoIn = Number(depositINput.value);

//   const depositAmount = document.getElementById("depositAmount");

//   const deop = Number(depositAmount.innerText);

//   const balanceToal = document.getElementById("balanceTotal");

//   const balanceTotal = Number(balanceToal.innerText);

//   const depositTotal = String(depoIn + deop);
//   const depositNumber = Number(depositTotal)
//   const balanceTotals = String(depositNumber + balanceTotal);

//   balanceToal.innerText = balanceTotals;
//   depositAmount.innerText = depositTotal;
//   depositINput.value = "";
//   console.log(depositTotal);
// });


document.getElementById("btnDeposit").addEventListener("click", () => {
  const inputFieldValue = getInputValueById("depositInput");

  const depositAmount = getTextValueById("depositAmount");

  const balanceAmount = getTextValueById("balanceTotal");

  const totalDeposit = String(inputFieldValue + depositAmount);

  const totalBlance = String(balanceAmount + inputFieldValue);

  setTheInnerNewValue("depositAmount", totalDeposit);
  setTheInnerNewValue("balanceTotal", totalBlance);
});
