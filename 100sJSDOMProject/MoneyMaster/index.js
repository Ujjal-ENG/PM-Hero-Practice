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
    getID("income") < 0 ||
    getID("food") == "" ||
    getID("food") > getID("income") ||
    getID("food") < 0 ||
    getID("rent") == "" ||
    getID("rent") > getID("income") ||
    getID("rent") < 0 ||
    getID("clothes") == "" ||
    getID("clothes") > getID("income") ||
    getID("clothes") < 0
  ) {
    alert("Please provide a valid Cost");
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
