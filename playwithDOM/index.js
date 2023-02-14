function getBTNElByID(getElByID) {
  const Btn = document.getElementById(getElByID);
  return Btn;
}

getBTNElByID("boldBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.fontWeight = "bold";
});
getBTNElByID("italicBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.fontStyle = "italic";
});
getBTNElByID("underlineBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textDecoration = "underline";
});

// work to align button
getBTNElByID("leftAlignBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textAlign = "left";
});
getBTNElByID("centerAlignBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textAlign = "center";
});
getBTNElByID("rightAlignBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textAlign = "right";
});
getBTNElByID("justifyAlignBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textAlign = "justify";
});

// increase decrease the font size section
const inputUser = document.getElementById("fw-inr-dcr-num");

document.getElementById("text-area").addEventListener("click", () => {
  const value = inputUser.value;
  if (Number(value) <= 1 || Number(value) >= 100) {
    alert("Please provide the fontSize between 1 to 100");
  } else {
    document.getElementById("text-area").style.fontSize = value + "px";
  }
});

// set the color
document.getElementById("text-area").addEventListener("click", () => {
  const colorInput = document.getElementById("colorSet").value;
  document.getElementById("text-area").style.color = colorInput;
});

let isUpperCase = true;
// full text convert to the upper case
getBTNElByID("uper-lowerBTN").addEventListener("click", () => {
  if (isUpperCase) {
    document.getElementById("text-area").style.textTransform = "uppercase";
    isUpperCase = false;
  } else {
    document.getElementById("text-area").style.textTransform = "lowercase";
    isUpperCase = true;
  }
});
