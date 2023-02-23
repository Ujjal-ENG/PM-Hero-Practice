const loadMeals = async (search) => {
  const apiCall = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
  const data = await apiCall.json();
  showData(data.meals);
};

const showData = (data) => {
  const container = document.getElementById("meal-info");
  container.innerHTML = "";
  data.map((el) => {
    const { strMeal, strCategory, strArea, strYoutube, strMealThumb, strTags } =
      el;
    const createDiv = document.createElement("div");

    // createDiv.innerHTML = `
    // // <h2>Meal Name: ${strMeal}</h2>
    // //   <h3>Category: ${strCategory}</h3>
    // //   <h4>Area: ${strArea}</h4>
    // //   <a href="${strYoutube}">Meal Cooking Processing Video</a>
    // //   <div id="card-photo">
    // //     <img src="${strMealThumb}" id="img" alt="${strTags}">
    // //   </div>
    // `;

    createDiv.classList.add("col");

    createDiv.innerHTML = `
    <div class="card">
    <img src="${strMealThumb}" class="card-img-top" alt="${strTags}">
    <div class="card-body">
      <h3 class="card-title">Name: ${strMeal}</h3>
      <h5 class="card-title">Category: ${strCategory}</h5>
      <h5 class="card-title">Area: ${strArea}</h5>
     <a href="${strYoutube}" target="_blank">See the Cooking Process</a>
     
    </div>
  </div>
    `;
    container.appendChild(createDiv);
  });
};

// search ITerms

document.getElementById("searchBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("search-input").value;

  searchInput == "" ? "fish" : loadMeals(searchInput);
});

// loadMeals();
