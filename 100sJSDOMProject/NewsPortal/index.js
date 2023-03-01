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
    class=" rounded-lg p-2 hover:shadow-lg hover:p-2  focus:bg-violet-100 font-bold focus:text-violet-600 transition-all" onclick="fetchAllDataAPI('${el.category_id}','${el.category_name}')">${el.category_name}</a>
    `;
  });
};

fetchCategoryAPI();

// fetch all data based on the category
const fetchAllDataAPI = async (id, name) => {
  const fetchCategoryAPIData = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const categoryData = await fetchCategoryAPIData.json();
  showTheCategoryData(categoryData.data);
  if (categoryData.data.length === 0) {
    getID("red-alert").removeAttribute("hidden");
    getID("success-alert").setAttribute("hidden", true);
  } else {
    getID("success-alert").removeAttribute("hidden");
    getID("red-alert").setAttribute("hidden", true);
  }
  document.querySelector(".datafound").innerHTML = categoryData.data.length;
  document.querySelector(".categoryName").innerHTML = name;
};

const showTheCategoryData = (data) => {
  const cardContainer = getID("card-container");
  cardContainer.innerHTML = "";
  data.forEach((el) => {
    const containerCard = document.createElement("div");
    containerCard.innerHTML = `
    
    <div class="card sm:card-side w-full bg-base-100 shadow-2xl mb-10">
          <div class="w-full sm:w-1/3 h-[300px]">
            <img src="${
              el.thumbnail_url ? el.thumbnail_url : "./unsplash_EhTcC9sYXsw.png"
            }" alt="Shoes" class="rounded-xl w-full h-full p-2" />
          </div>

          <div class="card-body">
            <div class="cardInfo space-y-4">

              <h2 class="card-title">${el.title}</h2>
              <p>${el.details.slice(0, 400) + "...."}</p>
            </div>

            <div class="author-info grid grid-cols-4 pt-10">

              <div class="flex items-center gap-4">
                <div class="w-10">
                  <img src="${
                    el.author.img ? el.author.img : "./user-2.jpg"
                  }" class="rounded-full" />
                </div>

                <div>
                  <p class="font-bold">${el.author.name}</p>
                  <p class="text-gray-500">${el.published_date}</p>

                </div>
              </div>

              <div class="flex items-center justify-center gap-4">
                <i class="fa-solid fa-eye"></i>
                <p class="font-bold text-xl">${el.total_view}</p>
              </div>

              <div class="flex justify-center  items-center">
                <div class="rating rating-sm">
                  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
              </div>

              <div class="flex items-center justify-end">
                <i class="cursor-pointer fa-solid fa-arrow-right fa-2x text-violet-700" onclick="showModalDetails('${
                  el._id
                }')"></i>
              </div>
            </div>
          </div>
        </div>
    `;
    cardContainer.appendChild(containerCard);
  });
};
