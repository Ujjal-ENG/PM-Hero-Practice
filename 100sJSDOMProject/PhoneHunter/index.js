// document.getElementById("progressBar").classList.remove("invisible");

const fetchData = async (query) => {
  const dataAPI = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${query}`
  );
  const data = await dataAPI.json();
  showData(data.data);
};

const showData = (data) => {
  const container = document.getElementById("card-items");
  document.getElementById("progressBar").classList.add("invisible");

  container.innerHTML = "";
  data.slice(0, 10).forEach((el) => {
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

document.getElementById("searchBTN").addEventListener("click", () => {
  const inputValue = document.getElementById("searchInput").value;
  fetchData(inputValue);
  document.getElementById("searchInput").value = "";
  document.getElementById("progressBar").classList.remove("invisible");
  document.getElementById("showMoreBTN").classList.remove("invisible");
});
