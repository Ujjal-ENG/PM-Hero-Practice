//------------- handle search button-----------
const searchFood = () => {
  const searchField = document.getElementById("mealInput");
  const searchData = searchField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealInfo(data))
    .catch(() => {
      document.getElementById("errorMessage").style.display = "block";
    });
};

const displayMealInfo = (mealData) => {
  document.getElementById("errorMessage").style.display = "none";

  const mealContainer = document.getElementById("mealCard");
  mealContainer.innerHTML = "";
  mealData.meals.forEach((item) => {
    const foodItemName = document.createElement("div");
    foodItemName.className = "meal-items";
    itemPosition = item.idMeal;
    const mealInformation = `
      <img src ="${item.strMealThumb}">
      <h3>${item.strMeal}</h3>
      `;
    foodItemName.innerHTML = mealInformation;
    foodItemName.addEventListener("click", function () {
      mealIngredientsInfo(item.idMeal);
    });
    mealContainer.appendChild(foodItemName);
  });
};

//API Call by fetch for meal ingredients

const mealIngredientsInfo = (mealItemName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayDetails(data));
};

//meal ingredients details information

const displayDetails = (mealItemDetails) => {
  const mealItemsInformation = document.getElementById("mealItemsInfo");
  mealItemsInformation.innerHTML = "";
  mealItemDetails.meals.forEach((items) => {
    const mealItemsInformations = document.createElement("div");
    mealItemsInformations.classList.add("ingredients-info");
    const itemsName = document.createElement("h1");
    const ingredients = document.createElement("h5");
    ingredients.innerText = "Ingredients";
    itemsName.innerText = items.strMeal;
    const ul = document.createElement("ul");
    const imgUrl = document.createElement("img");
    imgUrl.src = items.strMealThumb;
    mealItemsInformations.appendChild(imgUrl);

    for (let key in items) {
      if (key.includes("strIngredient")) {
        if (items[key] !== "") {
          ul.innerHTML += `<li>${items[key]}</li>`;
        }
      }
    }

    mealItemsInformations.appendChild(itemsName);
    mealItemsInformations.appendChild(ingredients);
    mealItemsInformations.appendChild(ul);
    mealItemsInformation.appendChild(mealItemsInformations);
  });
};
