// create object using object literals

const player = {};
player.name = "Ujjal";
player.speciality = "HardWorker";
player.work = () => {
  console.log(`Now ${player.name} currently running web development`);
};

const player2 = {};

// const word = player.work.bind(player2);

const work = player.work.call(player2);
console.log(player2);

// console.log(player);
// player.work();

// const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
// const entries = Object.entries(bottle);
// Object.entries(bottle).forEach((e) => {
//   console.log(`Key: ${e[0]} and value is : ${e[1]}`);
// });
