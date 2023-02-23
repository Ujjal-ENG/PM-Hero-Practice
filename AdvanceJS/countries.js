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
    // console.log(el.alpha2Code);
    creeateDiv.innerHTML = `
    <h2>Name: ${name}</h2>
    <h3>Capital: ${capital}</h3>
    <h4>Population: ${population}</h4>
    <div id="card-photo">
      <img src="${el.flags.png}" id="img" alt="">
    </div>
    <button onclick="countriesDetails('${el.alpha2Code}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
    
    `;
    container.appendChild(creeateDiv);
  });
};

loadData();
const countriesDetails = async (code) => {
  const url = `https://restcountries.com/v2/alpha/${code}`;

  const dataAPI = await fetch(url);
  const data = await dataAPI.json();
  countryDetail(data);
};

const countryDetail = (data) => {
  const container = document.getElementById("modal-body")

};
