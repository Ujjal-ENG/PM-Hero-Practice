function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFileValueString = inputField.value;
  const inputFileValueNumber = Number(inputFileValueString);
  inputField.value = "";
  return inputFileValueNumber;
}

function getTextValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFileValueString = inputField.innerText;
  const inputFileValueNumber = Number(inputFileValueString);
  return inputFileValueNumber;
}

function setTheInnerNewValue(elID, newValue) {
  const newId = document.getElementById(elID);
  return (newId.innerText = newValue);
}
