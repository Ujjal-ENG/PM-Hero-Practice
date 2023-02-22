document.getElementById("loadData").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = () => {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
  };

  //  prepare request

  xhr.open("GET", "http://127.0.0.1:5500/practice-js/data.txt");

  // send the request
  xhr.send();
});
