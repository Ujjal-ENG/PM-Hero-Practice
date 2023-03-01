const getId = (id) => document.getElementById(id);

getId("btn-container").addEventListener("click", (e) => {
  switch (e.target.id) {
    case "10user":
      console.log("hello");
      getId("card-section").innerHTML = "";
      show10UserOnlyApi();
      break;
    case "addUser":
      console.log("Add Mama");
      break;
    case "dblMoney":
      console.log("Mama DBL money de");
      break;
    case "descSort":
      getId("card-section").innerHTML = "";
      showFullUserApiDESC();
      console.log("Sort kore de");
      break;
    case "toalCal":
      console.log("Total valude de amama");
      break;
    case "showAll":
      getId("card-section").innerHTML = "";
      showFullUserApi();
      console.log("Show all kor");
      break;
    case "showState":
      console.log("State wise dka");
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
    show10UserDetails(data);
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
    if (value === "Technology") {
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
  displayData(data);
  getId("progressBar").setAttribute("hidden", true);
};

function selectNum() {
  let strUser = document.getElementById("numberToSelect").value;
  showIndsutryWise(strUser);
}

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
    
        <div class=" bg-[#0E1B34] text-white p-6 rounded-md">
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
