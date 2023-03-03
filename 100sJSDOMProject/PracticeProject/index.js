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

// const fetchNews = async () => {
//   const fetchNews = await fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2023-02-03&sortBy=publishedAt&apiKey=3601eb03194e471682abc95034313040"
//   );
//   const data = await fetchNews.json();
//   showData(data.articles);
// };
// fetchNews();
// const showData = (data) => {
//   const cardContainer = getID("container");
//   cardContainer.innerHTML = "";
//   data.slice(0, 4).forEach((el) => {
//     const newDIv = document.createElement("div");
//     newDIv.innerHTML += `
//   <div class="flex justify-center items-center py-5 gap-6">
//             <div class="card w-96 bg-base-100 shadow-xl">
//               <figure class="">
//                 <img src="${el.urlToImage}" alt="Shoes" class="rounded-xl" />
//               </figure>
//               <div class="card-body items-center text-center">
//                 <h2 class="card-title">${el.title.slice(0, 100)}</h2>
//                 <p>${el.content.slice(0, 200) + "..."}</p>
//                 <div class="card-actions">
//                   <a class="btn btn-link" href="${
//                     el.url
//                   }" target="_blank">Read More!!</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//   `;
//     cardContainer.appendChild(newDIv);
//   });
// };
