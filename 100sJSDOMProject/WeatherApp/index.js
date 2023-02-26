const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e4f895515dmshdd1fc9a6a8b3d44p12793cjsn920672b766b6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchCity = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${
      city ? city : "Dhaka"
    }`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // response.cloud_pct;
      feels.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      feelhumidity.innerHTML = response.humidity;
      maxtemperaturs.innerHTML = response.max_temp;
      mintemperaturs.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temperaturs.innerHTML = response.temp;
      temperaturs1.innerHTML = response.temp;
      winddeg.innerHTML = response.wind_degrees;
      windinfo.innerHTML = response.wind_speed;
      windinfo1.innerHTML = response.wind_speed;
      console.log(response);
    })
    .catch((err) => console.error(err));
};

document.getElementById("searchBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const inputCity = document.getElementById("inputCity").value;
  fetchCity(inputCity);
  document.getElementById("city").innerHTML = inputCity;
});
