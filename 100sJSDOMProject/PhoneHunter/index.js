// document.getElementById("progressBar").classList.remove("invisible");

const fetchData = async (query) => {
  try {
    const dataAPI = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${query}`
    );
    const data = await dataAPI.json();
    showData(data.data);
    restData(data.data);
  } catch (error) {
    console.log(error);
  }
};

let sIdx = 0;
let eidx = 10;
const showData = (data) => {
  const container = document.getElementById("card-items");
  console.log(data.length);
  if (data.length === 0) {
    container.innerHTML = "";
    document.getElementById("alertMessage").classList.remove("invisible");
    document.getElementById("showMoreBTN").classList.add("invisible");
  } else {
    document.getElementById("progressBar").classList.add("invisible");
    document.getElementById("alertMessage").classList.add("invisible");

    container.innerHTML = "";

    // display only 10 phones
    data.slice(sIdx, eidx).forEach((el) => {
      const createDiv = document.createElement("div");
      const { brand, phone_name, image, slug } = el;
      createDiv.innerHTML = `
    <div class="card w-78 bg-base-100 shadow-xl ">
    <figure><img src="${image}" alt="${phone_name}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${brand + " " + phone_name}</h2>
      <div class="card-actions justify-end">
        <label for="my-modal-3" class="btn btn-primary "onclick="showDeatils('${slug}')">Details</label>
      </div>
    </div>
  </div>
    `;
      container.appendChild(createDiv);
    });
  }
};

const restData = (data) => {
  document.getElementById("showMoreBTN").addEventListener("click", () => {
    sIdx = eidx;
    eidx = data.length;
  });
};

document.getElementById("searchBTN").addEventListener("click", () => {
  toggleFunction();
});

document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    toggleFunction();
  }
});

const showDeatils = async (data) => {
  const dataAPI = await fetch(
    `https://openapi.programming-hero.com/api/phone/${data}`
  );
  const datas = await dataAPI.json();
  showModalData(datas.data);
};

const showModalData = (data) => {
  const containerMOdal = document.getElementById("tablebody");
  data.mainFeatures.forEach((el) => {
    console.log(el);
  });
};

const toggleFunction = () => {
  const inputValue = document.getElementById("searchInput").value;
  fetchData(inputValue);
  document.getElementById("searchInput").value = "";
  document.getElementById("progressBar").classList.remove("invisible");
  document.getElementById("showMoreBTN").classList.remove("invisible");
};