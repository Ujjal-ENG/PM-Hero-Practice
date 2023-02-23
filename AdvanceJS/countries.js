const loadData = async () => {
  const api = await fetch("https://restcountries.com/v2/all");
  const jsonData = await api.json();
  displayCountries(jsonData);
};

const displayCountries = (countries) => {
  const container = document.getElementById("country-info");
  countries.map((el) => {
    const creeateDiv = document.createElement("div");
    const { name, capital, population } = el;
    // console.log(el.flags.png);
    creeateDiv.innerHTML = `
    <h2>Name: ${name}</h2>
    <h3>Capital: ${capital}</h3>
    <h4>Population: ${population}</h4>
    <div id="card-photo">
      <img src="${el.flags.png}" id="img" alt="">
    </div>
    `;
    container.appendChild(creeateDiv);
  });
};

loadData();
