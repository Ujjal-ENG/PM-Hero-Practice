const fetchData = async () => {
  const fetchAPi = await fetch(`https://api.github.com/users?per_page=10`);
  const data = await fetchAPi.json();
  showData(data);
};

const showData = (data) => {
  data.forEach(async (url) => {
    const fetchAPi = await fetch(url.url);
    const data = await fetchAPi.json();
    const fetchAPiDlowers = await fetch(url.followers_url);
    const data2 = await fetchAPiDlowers.json();
    showDetails(data, data2);
  });
};

const showDetails = (data, data2) => {
  const container = document.getElementById("container");
  const createDic = document.createElement("div");
  createDic.innerHTML = `
  <div class="w-1/2 mx-auto my-10 bg-slate-700 rounded-md p-10">
          <!-- profile photo and bio section -->
          <div class="flex gap-2">
            <div class="flex-none">
              <img src=${
                data.avatar_url ? data.avatar_url : "./person-1.jpeg"
              }" class="w-[100px] h-[100px] rounded-full" alt="profile" id="img">
            </div>

            <div class="flex-grow pl-4">

              <div class="flex justify-between">
                <div class="">
                  <h1 class="text-white text-2xl font-bold">${data.name}</h1>
                  <h5 class="text-blue-700 font-bold text-lg pb-4">${
                    data.login
                  }</h5>
                  <p class="text-gray-400 text-xl font-bold">${
                    data.bio
                      ? data.bio
                      : `This profile has no bio
`
                  }</p>
                </div>
                <p class="text-white font-semibold text-xl">${
                  data.created_at
                }</p>
              </div>

              <!-- flower,flowing,repo section -->

              <div class="bg-slate-900 py-5 mt-7 rounded-lg">
                <div class="grid grid-cols-3 justify-items-center text-center">
                  <div>
                    <h1 class="text-xl font-bold text-gray-400">Repos</h1>
                    <p class="text-xl font-bold text-white">${
                      data.public_repos
                    }</p>
                  </div>

                  <div>
                    <h1 class="text-xl font-bold text-gray-400">Followers</h1>
                    <p class="text-xl font-bold text-white">${
                      data.followers
                    }</p>

                    <div class="grid grid-rows-2 gap-5 mt-5">
                      <div class="flex justify-center ml-8 gap-4 items-center">
                        <img src="${
                          data2[0].avatar_url
                            ? data2[0].avatar_url
                            : "./person-1.jpeg"
                        }" class="rounded-full w-[50px] h-[50px]" alt="">
                        <h5 class="text-white">${data2[0].login}</h5>
                        <a class="text-blue-600 cursor-pointer underline " href="${
                          data2[0].html_url
                        }">Details</a>
                      </div>

                      <div class="flex justify-center ml-8 gap-4 items-center">
                        <img src="${
                          data2[1].avatar_url
                            ? data2[1].avatar_url
                            : "./person-1.jpeg"
                        }" class="rounded-full w-[50px] h-[50px]" alt="">
                        <h5 class="text-white">${data2[1].login}</h5>
                        <a class="text-blue-600 cursor-pointer underline " href="${
                          data2[1].html_url
                        }">Details</a>
                      </div>
                    </div>
                  </div>
                    
                  <div>
                    <h1 class="text-xl font-bold text-gray-400">Following</h1>
                    <p class="text-xl font-bold text-white">${
                      data.following
                    }</p>
                  </div>
                </div>
              </div>

              <!-- link provided section -->
              <div class="grid grid-cols-2 mt-10">

                <div>

                  <div class="flex items-center gap-4">
                    <i class="fa-solid fa-location-dot text-white"></i>
                    <p class="text-gray-400 text-xl font-bold">${
                      data.location ? data.location : "Not Available"
                    }</p>
                  </div>

                  <div class="flex items-center gap-4">
                    <i class="fa-sharp fa-solid fa-link text-white"></i>
                    <p class="text-gray-400">${
                      data.blog ? data.blog : "Not Available"
                    }</p>
                  </div>
                </div>

                <div>

                  <div class="flex items-center gap-4">
                    <i class="fa-brands fa-twitter text-white"></i>
                    <p class="text-gray-400 text-xl font-bold">${
                      data.twitter_username
                        ? data.twitter_username
                        : "Not Available"
                    }</p>
                  </div>

                  <div class="flex items-center gap-4">
                    <i class="fa-solid fa-house text-white"></i>
                    <p class="text-gray-400  ">${data.company}</p>
                  </div>

                </div>
              </div>


            </div>

          </div>
        </div>
  `;
  container.appendChild(createDic);
};

fetchData();
