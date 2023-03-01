const getID = (id) => document.getElementById(id);

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
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <a href="#"
    class=" rounded-lg p-2 hover:shadow-lg hover:p-2  focus:bg-violet-100 font-bold focus:text-violet-600 transition-all">${el.category_name}</a>
    `;
    categoryContainer.appendChild(categoryDiv);
  });
};

fetchCategoryAPI();
