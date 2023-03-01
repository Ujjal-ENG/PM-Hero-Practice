const getId = (id) => document.getElementById(id);

getId("btn-container").addEventListener("click", (e) => {
  switch (e.target.id) {
    case "10user":
      getId("card-container").removeAttribute("hidden");
      getId("main-secton").setAttribute("hidden", true);
      getId("card-section").innerHTML = "";
      getId("inputSearch").value = "";
      show10UserOnlyApi();
      break;
    case "addUser":
      randomData();
      console.log("Add Mama");
      break;
    case "dblMoney":
      console.log("Mama DBL money de");
      break;
    case "descSort":
      getId("card-container").removeAttribute("hidden");
      getId("main-secton").setAttribute("hidden", true);
      getId("card-section").innerHTML = "";
      getId("inputSearch").value = "";
      showFullUserApiDESC();
      console.log("Sort kore de");
      break;
    case "toalCal":
      console.log("Total valude de amama");
      break;
    case "showAll":
      getId("card-container").removeAttribute("hidden");
      getId("main-secton").setAttribute("hidden", true);
      getId("card-section").innerHTML = "";
      getId("inputSearch").value = "";
      showFullUserApi();
      console.log("Show all kor");
      break;
    case "showState":
      getId("card-container").removeAttribute("hidden");
      getId("main-secton").setAttribute("hidden", true);
      console.log("State wise dka");
      showState();
      break;
    default:
      break;
  }
});

const show10UserOnlyApi = async () => {
  getId("progressBar").removeAttribute("hidden");
  try {
    const fetchData = await fetch("./API/Richest_People_API.json");
    const data = await fetchData.json();
    show10UserDetails(data.slice(0, 10));
    getId("progressBar").setAttribute("hidden", true);
  } catch (err) {
    console.log(err);
  }
};

const randomData = async () => {
  getId("progressBar").removeAttribute("hidden");
  try {
    const fetchData = await fetch("./API/Richest_People_API.json");
    const data = await fetchData.json();
    dataFound(data);
    getId("progressBar").setAttribute("hidden", true);
  } catch (err) {
    console.log(err);
  }
};

const showFullUserApi = async () => {
  getId("progressBar").removeAttribute("hidden");
  try {
    const fetchData = await fetch("./API/AllBillionaires.json");
    const data = await fetchData.json();
    displayData(data);
    getId("progressBar").setAttribute("hidden", true);
  } catch (err) {
    console.log(err);
  }
};

const showFullUserApiDESC = async () => {
  getId("progressBar").removeAttribute("hidden");
  try {
    const fetchData = await fetch(
      "https://forbes400.onrender.com/api/forbes400/getAllBillionaires"
    );
    const data = await fetchData.json();
    displayData(data);
    getId("progressBar").setAttribute("hidden", true);
  } catch (err) {
    console.log(err);
  }
};

const show10UserDetails = (data) => {
  displayData(data);
  getId("showmore").classList.remove("invisible");

  getId("showmore").addEventListener("click", () => {
    getId("card-section").innerHTML = "";
    showFullUserApi();
  });
};

const showIndsutryWise = async (value) => {
  getId("progressBar").removeAttribute("hidden");
  try {
    if (value === "Technology") {
      const fetchData = await fetch("./API/ByIndustryTechnology.json");
      showData(fetchData);
    }
    if (value === "Fashion") {
      const fetchData = await fetch("./API/ByIndustryFashion.json");
      showData(fetchData);
    }
    if (value === "Finance") {
      const fetchData = await fetch("./API/ByIndustryFinance.json");
      showData(fetchData);
    }
    if (value === "Investments") {
      const fetchData = await fetch("./API/ByIndustryInvestment.json");
      showData(fetchData);
    }
  } catch (err) {
    console.log(err);
  }
};

const showData = async (values) => {
  const data = await values.json();
  getId("card-section").innerHTML = "";
  getId("card-container").removeAttribute("hidden");
  getId("main-secton").setAttribute("hidden", true);
  displayData(data);
  // console.log(data);
  getId("progressBar").setAttribute("hidden", true);
};

function selectNum() {
  let strUser = document.getElementById("numberToSelect").value;
  showIndsutryWise(strUser);
}

const showState = () => {
  const state = getId("state").innerText;
  getId("inputSearch").value = state;
  showStateWise(state);
};

const showStateWise = async (value) => {
  getId("progressBar").removeAttribute("hidden");
  try {
    if (value === "(TEXAS)") {
      const fetchData = await fetch("./API/ByStateTexas.json");
      showData(fetchData);
    }
    if (value === "(HAWAII)") {
      const fetchData = await fetch("./API/ByStateHawaii.json");
      showData(fetchData);
    }
    if (value === "(WASHINGTON)") {
      const fetchData = await fetch("./API/ByStateWashington.json");
      showData(fetchData);
    }
    if (value === "(ZHEJIANG)") {
      const fetchData = await fetch("./API/ByStateZhejiang.json");
      showData(fetchData);
    }
  } catch (err) {
    console.log(err);
  }
};

getId("inputSearch").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const value = getId("inputSearch").value;
    getId("state").innerText = value;
    showStateWise(value);
  }
});

const dataFound = (data) => {
  getId("card-container").setAttribute("hidden", true);
  getId("main-secton").removeAttribute("hidden");
  const randomValue = Math.round(Math.random() * data.length + 1);
  showRandomDetails(data[randomValue]);
  showModalDetails(data[randomValue]);
};

let wealth = 0;
const showRandomDetails = (data) => {
  const tableContainer = getId("tableBody");
  const createTR = document.createElement("tr");
  wealth += data.archivedWorth;
  createTR.innerHTML = `
  <th class="flex items-center gap-2">${data.personName}
  <label class="swap">
    <input type="checkbox" />
    <div class="swap-on">
      <label for="my-modal-5" class="fa-solid fa-eye cursor-pointer"></label>
    </div>
    <div class="swap-off">
      <i class="fa-solid fa-eye-slash"></i>
    </div>
  </label>
</th>
<td>${data.countryOfCitizenship}</td>
<td>${data.industries[0]}</td>
<td>${data.rank}</td>
<td>$${data.archivedWorth}</td>
  `;
  tableContainer.prepend(createTR);
  getId("totalWealth").innerHTML = wealth;
};

const showModalDetails = (data) => {
  const modalContainer = getId("modalContainer");
  const createDivModal = document.createElement("div");
  createDivModal.classList.add("modal");

  createDivModal.innerHTML = `
  <div class="modal-box w-11/12 max-w-3xl">
  <h3 class="font-bold text-3xl text-center drop-shadow-lg shadow-black">${data.personName}</h3>
  <h3 class="font-bold text-2xl text-center drop-shadow-lg shadow-black">Biography</h3>
  <p class="py- text-center">
    Jeff Bezos founded e-com… chairman in July 2021. He now owns a bit less than 10% of the company. He and his
    wife MacKenzi…6% Amazon stake to her. Bezos has donated more t… received those shares. Bezos owns The
    Washingto…ce in one in July 2021. Bezos said in a November…sing specific details
  </p>

  <div class="flex justify-center pt-5 space-x-6 divide-x-2 divide-white">
    <div>
      <img src="" class="w-[200px] h-[250px]" alt="" srcset="">
      <p class="pt-4"><span class="font-bold">Source: </span>Amazon</p>
    </div>

    <div class="information">
      <div class="genralinfo">
        <h3 class="font-bold text-2xl underline">General Information</h3>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">CitizenShip: </span>Amazon</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">State: </span>Washington DC</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">City: </span>Media</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Birthday: </span>999342</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Gender: </span>$99.5</p>
      </div>
      <div class="financialinfo mt-4">
        <h3 class="font-bold text-2xl underline">Financial Information</h3>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Exchange: </span>NAS</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Ticker: </span>AMZn</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">City: </span>Media</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Total Shares: </span>999342</p>
        <p class="pt-4 pl-4 text-xl"><span class="font-bold">Share Price: </span>$99.5</p>
      </div>

    </div>

  </div>

  <div class="modal-action">
    <label for="my-modal-5" class="btn btn-warning font-bold">Understand!</label>
  </div>
</div>
  `;

  modalContainer.append(createDivModal);
};

const displayData = (data) => {
  const cardContainer = getId("card-section");
  data.forEach((el) => {
    const createDiv = document.createElement("div");
    const sharePrice = el.financialAssets
      ? el.financialAssets.reduce((pel, cel) => {
          return Math.round(pel + cel.sharePrice);
        }, 0)
      : "null";
    const numberOfShare = el.financialAssets
      ? el.financialAssets.reduce((pel, cel) => {
          return Math.round(pel + cel.numberOfShares);
        }, 0)
      : "null";
    createDiv.innerHTML = `
    
        <div class=" bg-[#0E1B34] text-white p-6 rounded-md w-full">
          <h1 class="text-3xl text-center drop-shadow-2xl">${el.personName}</h1>
          <div class="flex pt-5 space-x-6 divide-x-2 divide-white">
            <div>
              <img src="${
                el.imageExists ? el.person.squareImage : `./Rectangle 11.png`
              }" class="w-[200px] h-[250px]" alt="" srcset="">
              <p class="pt-4"><span class="font-bold">Source: </span>${
                el.source
              }</p>
            </div>

            <div class="information">
              <p class="pt-4 pl-4 text-xl"><span class="font-bold">CitizenShip: </span>${
                el.countryOfCitizenship
              }</p>
              <p class="pt-4 pl-4 text-xl"><span class="font-bold">State: </span>${
                el.city
              }</p>
              <p class="pt-4 pl-4 text-xl"><span class="font-bold">City: </span>${
                el.city
              }</p>
              <p class="pt-4 pl-4 text-xl"><span class="font-bold">Total Shares: </span>${numberOfShare}</p>
              <p class="pt-4 pl-4 text-xl"><span class="font-bold">Share Price: </span>${sharePrice}</p>
            </div>

          </div>
        </div>
    `;
    cardContainer.appendChild(createDiv);
  });
};
