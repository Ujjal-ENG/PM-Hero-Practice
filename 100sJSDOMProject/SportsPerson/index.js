const loadData = async (data) => {
  const dataAPI = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${
      data ? data : "messi"
    }`
  );
  const datas = await dataAPI.json();
  displayDataByCard(datas.player);
};

document.getElementById("searchMama").addEventListener("click", () => {
  const valueInput = document.getElementById("inputPlayer").value;
  loadData(valueInput);
});

const displayDataByCard = (data) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.forEach((el) => {
    const createDIv = document.createElement("div");

    if (el.strGender === "Male") {
      document.getElementById("maleFootballer").classList.remove("hidden");
      document.getElementById("maleFootballer").classList.add("block");
      document.getElementById("femaleFootballer").classList.add("hidden");
    } else {
      document.getElementById("femaleFootballer").classList.remove("hidden");
      document.getElementById("maleFootballer").classList.add("hidden");
      document.getElementById("femaleFootballer").classList.add("block");
    }
    const {
      strPlayer,
      strDescriptionEN,
      strBirthLocation,
      strKit,
      strThumb,
      strGender,
    } = el;
    // cardContainer.innerHTML = "";
    createDIv.innerHTML = `
    <div class="card w-80 bg-base-100 shadow-xl">
        <figure><img src="${
          strThumb ? strThumb : "https://picsum.photos/400/400?random=1"
        }" alt="${strPlayer}" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${strPlayer}
            </h2>
            <div class="badge w-full badge-secondary">${strBirthLocation}</div>
          <p>Sponser: ${strKit} and Gender: ${strGender}</p>
          <div class="card-actions justify-end">
            <div class="btn bg-warning border-none text-white badge badge-outline"onclick="showDetails('${
              el.idPlayer
            }','${el}')">Details</div>
            <div class="btn bg-red-600 text-white badge badge-outline deleteCard">Delete</div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(createDIv);
  });

  const delteItem = document.querySelectorAll(".deleteCard");
  delteItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
    });
  });
};

const showDetails = async (id) => {
  const dataAPI = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
  );
  const data = await dataAPI.json();
  const container = document.getElementById("container");
  data.players.forEach((el) => {
    const {
      strPlayer,
      strDescriptionEN,
      strBirthLocation,
      strKit,
      strThumb,
      strGender,
    } = el;
    container.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="${
      strThumb ? strThumb : "https://picsum.photos/400/400?random=1"
    }" alt="${strPlayer}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${strPlayer}</h2>
      <p>${
        strDescriptionEN
          ? strDescriptionEN.slice(0, 450) + "..."
          : "No Description found"
      }</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" id="deleteItem">Close</button>
      </div>
    </div>
</div>
    `;
    container.appendChild(div);
    document.getElementById("deleteItem").addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
    });
  });
};

loadData();
