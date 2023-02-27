const fetchData = async (link) => {
  try {
    const fetchAPI = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const data = await fetchAPI.json();
    showResult(data.result);
  } catch (error) {
    console.log(error);
  }
};

const showResult = (data) => {
  errorHandle(data);
  document.getElementById("orginalLink").innerText = data.original_link;
  document.getElementById("shortLink").innerText = data.full_short_link;
};

const errorHandle = (data) => {
  if (data === undefined) {
    document.getElementById("error").removeAttribute("hidden");
    document.getElementById("orginal").setAttribute("hidden", true);
    document.getElementById("short").classList.add("invisible");
    document.querySelector(".spainer").classList.remove("invisible");
  } else {
    document.getElementById("error").setAttribute("hidden", true);
    document.getElementById("orginal").removeAttribute("hidden");
    document.getElementById("short").classList.remove("invisible");
    document.querySelector(".spainer").classList.add("invisible");
  }
};

document.getElementById("shortenBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const inputLink = document.getElementById("inputLink").value;
  fetchData(inputLink);
});

function myFunction() {
  // Get the text field
  let copyText = document.getElementById("shortLink").innerText;

  console.log(copyText);
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
}
