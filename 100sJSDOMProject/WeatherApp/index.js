const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e4f895515dmshdd1fc9a6a8b3d44p12793cjsn920672b766b6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
