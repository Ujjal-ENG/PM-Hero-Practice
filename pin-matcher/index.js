function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("Pin not 3 digit found" + pin);
    return getPin();
  }
}

function getID(id) {
  const ID = document.getElementById(id);
  return ID;
}

getID("generate-pin").addEventListener("click", () => {
  const getValue = getID("display-pin");
  getValue.value = getPin();
});

getID("calculator").addEventListener("click", (e) => {
  const number = e.target.innerText;
  const previTypeNUmber = getID("typed-numbers").value;
  let actionLeft = getID("action-left").innerText;
  if (isNaN(number)) {
    if (number === "C") {
      getID("typed-numbers").value = "";
    } else if (number === "<") {
      const digits = previTypeNUmber.split("");
      digits.pop();
      getID("typed-numbers").value = digits.join("");
    } else if (number === "Submit") {
      const pinValue = getID("display-pin").value;
      const PinMatch = getID("typed-numbers").value;
      if (PinMatch === pinValue) {
        getID("pin-success").style.display = "block";
        getID("pin-failure").style.display = "none";
      } else {
        getID("pin-failure").style.display = "block";
        getID("pin-success").style.display = "none";
        console.log(--actionLeft);
        getID("action-left").innerText = actionLeft;
        tryLefft(actionLeft);
      }
    }
  } else {
    const currentTypeNumber = previTypeNUmber + number;
    getID("typed-numbers").value = currentTypeNumber;
  }
});

function tryLefft(value) {
  if (value === 0) {
    getID("msg-action").innerText = "PLease Try Again after 5s!!!";
    setTimeout(() => {
      getID("verify-pin").style.disabled = true;
      getID("msg-action").innerText = "3 try left";
      getID("typed-numbers").value= ""
    }, 5000);
  } else {
    getID("verify-pin").style.disabled = false;
  }
}

