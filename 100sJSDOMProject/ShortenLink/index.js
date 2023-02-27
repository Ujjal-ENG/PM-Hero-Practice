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
  
};

const errorHandle = (data) => {
  if (data === undefined) {
    document.getElementById("error").removeAttribute("hidden");
  } else {
    document.getElementById("error").setAttribute("hidden", true);
  }
};

document.getElementById("shortenBTN").addEventListener("click", (e) => {
  e.preventDefault();
  const inputLink = document.getElementById("inputLink").value;
  fetchData(inputLink);
});

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("shortLink");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
