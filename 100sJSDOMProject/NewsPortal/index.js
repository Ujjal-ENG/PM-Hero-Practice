const getID = (id) => document.getElementById(id);

// for show the all Category
const fetchCategoryAPI = async () => {
  const fetchCategoryAPIData = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const categoryData = await fetchCategoryAPIData.json();
  showCategory(categoryData.data.news_category);
};

const showCategory = (data) => {
  const categoryContainer = getID("category-container");
  data.forEach((el) => {
    categoryContainer.innerHTML += `
    <a href="#"
    class=" rounded-lg p-2 hover:shadow-lg hover:p-2  focus:bg-violet-100 font-bold focus:text-violet-600 transition-all" onclick="fetchAllDataAPI('${el.category_id}')">${el.category_name}</a>
    `;
  });
};

fetchCategoryAPI();

// fetch all data based on the category
const fetchAllDataAPI = async (id) => {
  const fetchCategoryAPIData = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const categoryData = await fetchCategoryAPIData.json();
  if (categoryData.data.length === 0) {
    getID("red-alert").removeAttribute("hidden");
    getID("success-alert").setAttribute("hidden", true);
  } else {
    getID("success-alert").removeAttribute("hidden");
    getID("red-alert").setAttribute("hidden", true);
  }
  document.querySelector(".datafound").innerHTML = categoryData.data.length;
};
