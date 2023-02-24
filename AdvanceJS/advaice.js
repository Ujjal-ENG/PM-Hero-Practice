const loadDataApi = async () => {
  const urlAPI = await fetch("https://api.adviceslip.com/advice");
  const data = await urlAPI.json();
  showData(data.slip);
};


const container = document.getElementById("container");
const showData = (data) => {
  container.innerHTML = "";
  const createDiv = document.createElement("div");

  createDiv.innerHTML = `
  <div class="card bg-slate-700 w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h3 class="uppercase text-green-400 text-center tracking-widest font-semibold">Advice # ${data.id}</h3>
        <p class="text-center text-white">"${data.advice}"</p>
      </div>
    </div>
  `;
  container.appendChild(createDiv);
  document.querySelector(".card").addEventListener("click", () => {
    clearInterval(myInterval);
  });
};

const myInterval = setInterval(() => {
  loadDataApi();
}, 3000);

