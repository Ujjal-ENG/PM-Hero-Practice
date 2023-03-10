const loadData = async () => {
  const api = await fetch(`https://restcountries.com/v2/all`);
  const jsonData = await api.json();
  displayCountries(jsonData);
};

const loadFilterRegionData = async (type, data) => {
  const container = document.getElementById("country-info");
  container.innerHTML = "";
  const api = await fetch(`https://restcountries.com/v3.1/${type}/${data}`);
  const jsonData = await api.json();
  fillterCountryDisplay(jsonData);
};

const fillterCountryDisplay = (data) => {
  const container = document.getElementById("country-info");
  data.map((el) => {
    // console.log(el.name.common);
    const creeateDiv = document.createElement("div");
    const { capital, population } = el;
    // console.log(el.alpha2Code);
    creeateDiv.innerHTML = `
    <h2>Name: ${el.name.common}</h2>
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

const countriesDetails = async (code) => {
  const url = `https://restcountries.com/v2/alpha/${code}`;

  const dataAPI = await fetch(url);
  const data = await dataAPI.json();
  countryDetail(data);
};

const countryDetail = (data) => {
  const container = document.getElementById("modal-body");
  const newDiv = document.createElement("div");

  newDiv.innerHTML = `
  <h3>Region: ${data.region}</h3>
  <h3>Sub-Region: ${data.subregion}</h3>
  <p>Area: ${data.area}</p>
  <h5>TimeZones: ${data.timezones[0]}</h5>
  <h2>Native Name: ${data.nativeName}</h2>
  <p>Currencies Code: ${data.currencies[0].code}</p>
  <p>Currencies Name: ${data.currencies[0].name}</p>
  <p>Languages Name: ${data.languages[0].name}</p>
  `;
  container.appendChild(newDiv);
  document.getElementById("closeBTN").addEventListener("click", () => {
    const container = document.getElementById("modal-body");
    container.childNodes[1].remove();
  });
};

document.getElementById("option").addEventListener("change", () => {
  const selectValue = document.getElementById("option").value;
  loadFilterRegionData("region", selectValue);
  console.log(selectValue);
});

document.getElementById("searchBTN").addEventListener("click", () => {
  const inputValue = document.getElementById("inputValue").value;
  loadFilterRegionData("capital", inputValue);
});
document.getElementById("inputValue").addEventListener("keyup", () => {
  const inputValue = document.getElementById("inputValue").value;
  loadFilterRegionData("capital", inputValue);
});
document.getElementById("searchBTN2").addEventListener("click", () => {
  const inputValue = document.getElementById("inputValue2").value;
  loadFilterRegionData("lang", inputValue);
});

loadData();
