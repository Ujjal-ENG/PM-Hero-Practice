getID("phoneBTNICR").addEventListener("click", () => {
  updateNumber("phoneValue", true, "phonePrice");
  calculateTotal();
});

getID("phoneBTNDCR").addEventListener("click", () => {
  updateNumber("phoneValue", false, "phonePrice");
  calculateTotal();
});

getID("caseBTNINCR").addEventListener("click", () => {
  updateNumber("caseValue", true, "casePrice");
  calculateTotal();
});

getID("caseBTNDCR").addEventListener("click", () => {
  updateNumber("caseValue", false, "casePrice");
  calculateTotal();
});
