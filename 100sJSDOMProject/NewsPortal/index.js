const getID = (id) => document.getElementById(id);
let fetchData = [];
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
  fetchData = categoryData.data;
  showtheAlert(categoryData.data.length, name);
};

fetchAllDataAPI("08", "Random");

const showTheCategoryData = (data) => {
  const cardContainer = getID("card-container");
  cardContainer.innerHTML = "";
  data.forEach((el) => {
    const date = new Date(el.published_date).toDateString();
    const containerCard = document.createElement("div");
    containerCard.innerHTML = `
    
    <div class="card sm:card-side w-full bg-base-100 shadow-2xl mb-10">
          <div class="w-full sm:w-2/5 h-[300px]">
            <img src="${
              el.thumbnail_url ? el.thumbnail_url : "./unsplash_EhTcC9sYXsw.png"
            }" alt="Shoes" class="rounded-xl w-full h-full p-2" />
          </div>

          <div class="card-body w-full sm:w-[70%]">
            <div class="cardInfo space-y-4">

              <h2 class="card-title">${
                el.title
              } <div class="badge badge-secondary">${
      el.others_info.is_trending ? "Trending" : "Not Trending"
    }</div></h2>
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
                  <p class="font-bold">${
                    el.author.name ? el.author.name : "Name Missing!!"
                  }</p>
                  <p class="text-gray-500">${date ? date : "Date Missing!!"}</p>

                </div>
              </div>

              <div class="flex items-center justify-center gap-4">
                <i class="fa-solid fa-eye"></i>
                <p class="font-bold text-xl">${
                  el.total_view ? el.total_view : "Total View Missing"
                }</p>
              </div>

                <div class="rating rating-sm flex justify-center  items-center">
              ${generateStars(el.rating.number)}
                  <p class="text-center font-bold text-lg ">${
                    el.rating.number
                  }</p>
                </div>


              <div class="flex items-center justify-end">
               <label for="my-modal-5"> <i  class="cursor-pointer fa-solid fa-arrow-right fa-2x text-violet-700" onclick="showModalDetails('${
                 el._id
               }')"></i> </label>
              </div>
            </div>
          </div>
        </div>
    `;
    cardContainer.appendChild(containerCard);
  });
};

const showModalDetails = async (id) => {
  const fetchCategoryAPIData = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
  const categoryData = await fetchCategoryAPIData.json();
  showModal(categoryData.data[0]);
};

const showModal = (data) => {
  const modalConainer = getID("modal-body");
  modalConainer.innerHTML = `
        <img src="${
          data.image_url
            ? data.image_url
            : "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
        }" class="w-full h-full p-10" alt="">
        <h3 class="font-bold text-center text-lg">${data.title}</h3>
        <p class="py-4">${data.details}</p>
        <div class="modal-action">
          <label for="my-modal-5" class="btn font-bold" id="delete">UnderStand!</label>
        </div>
  `;
};

getID("trending").addEventListener("click", () => {
  let trendingNews = fetchData.filter((singleData) => {
    if (singleData.others_info.is_trending) {
      return singleData.others_info.is_trending;
    }
    return;
  });
  showTheCategoryData(trendingNews);
  showtheAlert(trendingNews.length, "Trending Now!!!");
});

getID("todasPick").addEventListener("click", () => {
  let trendingNews = fetchData.filter((singleData) => {
    if (singleData.others_info.is_todays_pick) {
      return singleData.others_info.is_todays_pick;
    }
    return;
  });
  showTheCategoryData(trendingNews);
  showtheAlert(trendingNews.length, "Today's Pick!!!");
});

const showtheAlert = (categoryData, name) => {
  if (categoryData === 0) {
    getID("red-alert").removeAttribute("hidden");
    getID("success-alert").setAttribute("hidden", true);
  } else {
    getID("success-alert").removeAttribute("hidden");
    getID("red-alert").setAttribute("hidden", true);
  }
  document.querySelector(".datafound").innerHTML = categoryData;
  document.querySelector(".categoryName").innerHTML = name;
};

const generateStars = (rating) => {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += '<i class="fas fa-star"></i>';
  }
  if (rating - Math.floor(rating) > 0) {
    ratingHTML += '<i class="fas fa-star-half"></i>';
  }
  return ratingHTML;
};

getID("selecValue").addEventListener("change", (e) => {
  compareValue(e.target.value);
});

const compareValue = (value) => {
  if (value == "as") {
    fetchData.sort((a, b) => {
      return Number(a.total_view) - Number(b.total_view);
    });
    showTheCategoryData(fetchData);
  }
  if (value == "ds") {
    fetchData.sort((a, b) => {
      return Number(b.total_view) - Number(a.total_view);
    });
    showTheCategoryData(fetchData);
  }
};
