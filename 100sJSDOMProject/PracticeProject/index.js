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

// fetch data for news

const fetchNews = async () => {
  const fetchNews = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-02-03&sortBy=publishedAt&apiKey=3601eb03194e471682abc95034313040"
  );
  const data = await fetchNews.json();
  showData(data.articles);
};
fetchNews();
const showData = (data) => {
  const cardContainer = getID("container");
  cardContainer.innerHTML = "";
  data.slice(0, 4).forEach((el) => {
    const newDIv = document.createElement("div");
    newDIv.innerHTML += `
  <div class="flex justify-center items-center py-5 gap-6">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="">
                <img src="${el.urlToImage}" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">${el.title.slice(0, 100)}</h2>
                <p>${el.content.slice(0, 200) + "..."}</p>
                <div class="card-actions">
                  <a class="btn btn-link" href="${
                    el.url
                  }" target="_blank">Read More!!</a>
                </div>
              </div>
            </div>
          </div>
  `;
    cardContainer.appendChild(newDIv);
  });
};

// fetch data for, apple
const fetchNewsFromApple = async () => {
  const fetchNews = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=3601eb03194e471682abc95034313040"
  );
  const data = await fetchNews.json();
  showData2(data.articles);
  console.log(data.articles);
};

fetchNewsFromApple();

const showData2 = (data) => {
  const cardContainer = getID("latestContainer");
  cardContainer.innerHTML = "";
  data.slice(25, 31).forEach((el) => {
    const newDIv = document.createElement("div");
    newDIv.innerHTML += `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <div class="h-1/2"><img src="${
      el.urlToImage ? el.urlToImage : "./images/bike-1.png"
    }" alt="Shoes" class="h-full"/></div>
    <div class="card-body">
      <h2 class="card-title">${el.title}</h2>
      <p>${el.description.slice(0, 200) + "...."}</p>
      <div class="flex gap-4 justify-between pt-6 text-black">
              <p>${new Date(el.publishedAt).toDateString()}</p>
              <p>${el.source.name ? el.source.name : "Not Found!!!"}</p>
            </div>
    </div>
  </div>
  `;
    cardContainer.appendChild(newDIv);
  });
};
