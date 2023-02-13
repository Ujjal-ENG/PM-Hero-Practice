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
