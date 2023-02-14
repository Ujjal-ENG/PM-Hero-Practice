function getBTNElByID(getElByID) {
  const Btn = document.getElementById(getElByID);
  return Btn;
}

function setToggle(id, style, type) {
  let isActive = true;
  if (isActive) {
    getBTNElByID(id).classList.add("active");
    isActive = false;
  } else {
    getBTNElByID(id).classList.remove("active");
    document.getElementById("text-area").style[style] = type;
    isActive = true;
  }
}

getBTNElByID("boldBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.fontWeight = "bold";
  setToggle("boldBTN", "fontWeight", "normal");
});

getBTNElByID("italicBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.fontStyle = "italic";
  setToggle("italicBTN", "fontStyle", "normal");
});

getBTNElByID("underlineBTN").addEventListener("click", () => {
  document.getElementById("text-area").style.textDecoration = "underline";
  setToggle("underlineBTN", "textDecoration", "none");
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

document.getElementById("fw-inr-dcr-num").addEventListener("change", () => {
  const value = inputUser.value;
  document.getElementById("text-area").style.fontSize = value + "px";
});

// set the color
document.getElementById("text-area").addEventListener("click", () => {
  const colorInput = document.getElementById("colorSet").value;
  document.getElementById("text-area").style.color = colorInput;
});

// full text convert to the upper case
let isUpperCase = true;
getBTNElByID("uper-lowerBTN").addEventListener("click", () => {
  if (isUpperCase) {
    document.getElementById("text-area").style.textTransform = "uppercase";
    isUpperCase = false;
  } else {
    document.getElementById("text-area").style.textTransform = "lowercase";
    isUpperCase = true;
  }
});

// set the reset button

getBTNElByID("resetBTN").addEventListener("click", () => {
  document.getElementById("text-area").value = "";
});
