// const withdrawBTN = document.getElementById("btnWithdraw");

// withdrawBTN.addEventListener("click", () => {
//   const withdrawINput = document.getElementById("withdrawInput");

//   const withdraw = Number(withdrawINput.value);

//   const withdrawAmount = document.getElementById("withdrawAmount");

//   const withdrawAmount = document.getElementById("withdrawAmount");

//   const balanceToal = document.getElementById("balanceTotal");

//   const balanceTotal = Number(balanceToal.innerText);

//   withdrawAmount.innerText = withdraw;

//   const totalBlance = String(balanceTotal - withdraw);

//   balanceToal.innerText = totalBlance;

//   withdrawINput.value = "";
//   withdrawAmount.innerText = "0";
// });

document.getElementById("btnWithdraw").addEventListener("click", () => {
  const inputFieldValue = getInputValueById("withdrawInput");

  const withdrawAmount = getTextValueById("withdrawAmount");

  const balanceAmount = getTextValueById("balanceTotal");

  const totalwithdraw = String(inputFieldValue + withdrawAmount);

  const totalBlance = String(balanceAmount - inputFieldValue);

  setTheInnerNewValue("withdrawAmount", totalwithdraw);
  setTheInnerNewValue("balanceTotal", totalBlance);
});
