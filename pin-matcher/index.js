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
