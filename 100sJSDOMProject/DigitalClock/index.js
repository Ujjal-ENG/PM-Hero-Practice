const getID = (id) => document.getElementById(id);

const id = setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  getID("hour").innerText = hours > 9 ? hours : "0" + hours;
  getID("min").innerText = minutes > 9 ? minutes : "0" + minutes;
  getID("sec").innerText = seconds > 9 ? seconds : "0" + seconds;
}
