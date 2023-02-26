// create object using object literals

// const player = {};
// player.name = "Ujjal";
// player.speciality = "HardWorker";
// player.work = () => {
//   console.log(`Now ${player.name} currently running web development`);
// };

// console.log(player);
// player.work();

const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const entries = Object.entries(bottle);
entries.forEach((e) => {
  console.log(`Key: ${e[0]} and value is : ${e[1]}`);
});
