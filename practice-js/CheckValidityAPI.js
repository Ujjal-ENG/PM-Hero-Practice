const display = document.getElementById("display");

document.getElementById("fetchData").addEventListener("click", async () => {
  // fetch("http://127.0.0.1:5500/practice-js/data.txt")
  //   .then((res) => res.text())
  //   .then((data) => {
  //     display.innerText = data;
  //   });

  const res = await fetch("http://127.0.0.1:5500/practice-js/data.txt");
  const data = await res.text();
  display.innerText = data;
});
