function getID(id) {
  const ID = document.getElementById(id).value;
  return Number(ID);
}

function showMsg(id, newValue) {
  const ID = document.getElementById(id);
  return (ID.innerHTML = newValue);
}

document.getElementById("calculateCost").addEventListener("click", (e) => {
  e.preventDefault();

  if (
    getID("income") == "" ||
    getID("food") == "" ||
    getID("rent") == "" ||
    getID("clothes") == ""
  ) {
    alert("Please provide a number");
  } else {
    const income = getID("income");
    const foodCost = getID("food");
    const rentCost = getID("rent");
    const clothCost = getID("clothes");
    const totalExpense = foodCost + rentCost + clothCost;
    getID;
    const currentBalance = income - totalExpense;
    showMsg("expenseCose", totalExpense);
    showMsg("balance", currentBalance);
  }
});

document.getElementById("savings").addEventListener("click", () => {
  if (getID("savingIN") == "" || getID("savingIN") < 0) {
    alert("please provide a valid number!!!");
  } else {
    const value = (getID("savingIN") / 100).toFixed(1);
    const income = getID("income");
    const currentBalance = Number(document.getElementById("balance").innerHTML);
    console.log(currentBalance);
    const savingIncome = income * value;
    const remain = currentBalance - savingIncome;
    if (savingIncome > currentBalance) {
      alert(
        "kireVai Eto taka ase je toi save korbi nijer ability er moddhe kor!!!"
      );
    } else {
      showMsg("SavingAmount", currentBalance);
      showMsg("re-balance", remain);
    }
    console.log(savingIncome);
  }
});
