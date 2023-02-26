// document.getElementById("progressBar").classList.remove("invisible");

const fetchData = async (query) => {
  try {
    const dataAPI = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${query}`
    );
    const data = await dataAPI.json();
    showData(data.data, length);
    restData(data.data, length);
  } catch (error) {
    console.log(error);
  }
};

const showData = (data) => {
  const container = document.getElementById("card-items");
  if (data.length === 0) {
    container.innerHTML = "";
    document.getElementById("alertMessage").classList.remove("invisible");
    document.getElementById("showMoreBTN").classList.add("invisible");
  } else {
    displayData(data, 10);
  }
};

const restData = (data) => {
  document.getElementById("showMoreBTN").addEventListener("click", () => {
    // display only rest of the phones
    displayData(data, 11);
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
  const createTr = document.createElement("tr");
  containerMOdal.innerHTML = "";
  createTr.innerHTML = `
  <td>1</td>
  <td>
  <li>${data.mainFeatures.storage}</li>
  <li>${data.mainFeatures.displaySize}</li>
  <li>${data.mainFeatures.chipSet}</li>
  <li>${data.mainFeatures.memory}</li>
  <li>${data.mainFeatures.sensors.forEach((el) => {
    `<li>${el}</li>`;
  })}
  </td>
  <td>
  <li>${data.others.WLAN ? data.others.WLAN : "No Data Found!!!"}</li>
  <li>${data.others.Bluetooth ? data.others.Bluetooth : "No Data Found"}</li>
  <li>${data.others.GPS ? data.others.GPS : "No Data FOund"}</li>
  <li>${data.others.NFC ? data.others.NFC : "No Data Found"}</li>
  <li>${data.others.Radio ? data.others.Radio : "No Data Found"}</li>
  <li>${data.others.USB ? data.others.USB : "No Data FOund"}</li>
  </td>
  <td>
  <li>${data.brand}</li>
  <li>${data.name}</li>
  <li>${data.releaseDate ? data.releaseDate : "NO data found"}</li>
  </td>
  `;
  containerMOdal.appendChild(createTr);
};

const toggleFunction = () => {
  const inputValue = document.getElementById("searchInput").value;
  fetchData(inputValue, length);
  document.getElementById("searchInput").value = "";
  document.getElementById("progressBar").classList.remove("invisible");
  document.getElementById("showMoreBTN").classList.remove("invisible");
};

const displayData = (data, length) => {
  const container = document.getElementById("card-items");
  document.getElementById("progressBar").classList.add("invisible");
  document.getElementById("alertMessage").classList.add("invisible");

  container.innerHTML = "";
  let phone;
  if (length === 10) {
    phone = data.slice(0, 10);
  } else {
    phone = data.slice(10, data.length);
  }
  console.log(phone);

  phone.forEach((el) => {
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
};
