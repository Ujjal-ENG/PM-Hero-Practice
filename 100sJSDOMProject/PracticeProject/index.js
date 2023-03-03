const getID = (id) => document.getElementById(id);

// for show the all Category
const fetchCategoryAPI = async () => {
  const fetchCategoryAPIData = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const categoryData = await fetchCategoryAPIData.json();
  showCategory(categoryData.data.news_category);
};
fetchCategoryAPI();
const showCategory = (data) => {
  const categoryContainer = getID("categoryContainer");
  data.forEach((el) => {
    categoryContainer.innerHTML += `
    <button class="btn btn-outline btn-success">${el.category_name}</button>
    `;
  });
};
