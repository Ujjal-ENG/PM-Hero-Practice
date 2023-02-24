const loadDataAPI = async (data) => {
  const datas = data;
  try {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${datas}`
    );
    const data = await fetchData.json();
    showData(data.meals);
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("searchBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("inputValue").value;
  loadDataAPI(input);
});

document.getElementById("inputValue").addEventListener("keyup", (e) => {
  e.preventDefault();
  const input = document.getElementById("inputValue").value;
  loadDataAPI(input);
});

let startIndex = 0;
let endIndex = 6;
const showData = (data) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  data.slice(startIndex, endIndex).map((el) => {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <div class="card card-side bg-base-100 shadow-xl border-2 sm:h-[300px] flex flex-col sm:flex-row h-full">
            <figure class="w-full rounded-lg"><img src="${el.strMealThumb}" alt="${el.strTags}" /></figure>
            <div class="py-9 px-5 space-y-5">
              <h2 class="card-title text-2xl font-bold">${el.strMeal}</h2>
              <p class="text-lg text-textPrimary font-normal w-[250px] h-20 overflow-hidden text-ellipsis">
              ${el.strInstructions}
              </p>
              <div class="card-actions justify-start">
                  <label for="my-modal-6" class="text-btnPrimary text-lg font-semibold cursor-pointer border-b-2 border-b-btnPrimary"onclick="loadModalData('${el.idMeal}')">open modal</label>
              </div>
            </div>
          </div>
    `;
    container.appendChild(createDiv);
  });
  showRestData(data.slice(endIndex, data.length));
};

const showRestData = (data) => {
  document.getElementById("showBTN").addEventListener("click", () => {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    data.slice(startIndex, endIndex).map((el) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `
    <div class="card card-side bg-base-100 shadow-xl border-2 sm:h-[300px] flex flex-col sm:flex-row h-full">
            <figure class="w-full rounded-lg"><img src="${el.strMealThumb}" alt="${el.strTags}" /></figure>
            <div class="py-9 px-5 space-y-5">
              <h2 class="card-title text-2xl font-bold">${el.strMeal}</h2>
              <p class="text-lg text-textPrimary font-normal w-[250px] h-20 overflow-hidden text-ellipsis">
              ${el.strInstructions}
              </p>
              <div class="card-actions justify-start">
                  <label for="my-modal-6" class="text-btnPrimary text-lg font-semibold cursor-pointer border-b-2 border-b-btnPrimary"onclick="loadModalData('${el.idMeal}')">open modal</label>
              </div>
            </div>
          </div>
    `;
      container.appendChild(createDiv);
    });
  });
};

const loadModalData = async (id) => {
  try {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await fetchData.json();
    showModalDetails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

const showModalDetails = (data) => {
  const modalContainer = document.getElementById("modal-details");

  const newDiv = document.createElement("div");
  newDiv.classList.add("delete");

  newDiv.innerHTML = `
  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box space-y-4">
      <h3 class="font-bold text-lg border-b-2 pb-4">${data.strMeal}</h3>

      <img src="${data.strMealThumb}" class="w-full rounded-lg h-1/2 " alt="">

      <h4 class="text-xl font-semibold text-textSecondary">Category: <span
          class="text-xl font-normal text-textPrimary">${data.strCategory}</span></h4>
      <h4 class="text-xl font-semibold text-textSecondary">Area: <span
          class="text-xl font-normal text-textPrimary">${data.strArea}</span></h4>
      <p class="pb-4 text-xl font-semibold text-textSecondary"> <span class="text-xl font-normal text-textPrimary">
      ${data.strInstructions}
        </span>
      </p>
      <label for="link" class="text-xl font-semibold text-textSecondary">YouTube: </label>
      <a href="${data.strYoutube}">${data.strYoutube}</a>
      <div class="modal-action">
        <label for="my-modal-6" class="btn bg-red-500 border-none" id="closeModal">Understood!!</label>
      </div>
    </div>
  </div>
  `;
  console.log(data);

  modalContainer.appendChild(newDiv);
  // modalContainer.innerHTML = "";
  document.getElementById("closeModal").addEventListener("click", () => {
    document.querySelector(".delete").remove();
  });
};

loadDataAPI("fish");
