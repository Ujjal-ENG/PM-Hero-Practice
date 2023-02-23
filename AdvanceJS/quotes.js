async function quotesCalling() {
  const data = await fetch("https://api.kanye.rest");
  const json = await data.json();
  const showQueto = document.getElementById("quote");
  showQueto.innerHTML = json.quote;
}

setInterval(() => {
  quotesCalling();
}, 3000);
