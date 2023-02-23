async function randomFemaleApi() {
  const api = await fetch("https://randomuser.me/api/?gender=female");
  const data = await api.json();
  femaleData(data);
}

const femaleData = (data) => {
  let setPhoto = document.getElementById("img");
  setPhoto.src = data.results[0].picture.large;
};

setInterval(() => {
  randomFemaleApi();
}, 3000);
