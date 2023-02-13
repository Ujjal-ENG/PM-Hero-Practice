function getBTNElByID(getElByID) {
  const Btn = document.getElementById(getElByID);
  return Btn;
}

const textArea = document.getElementById("text-area");
const textAreaValue = textArea.value;

getBTNElByID("boldBTN").addEventListener("click", () => {
  console.log(textAreaValue);
  console.log("Clicked")
});
