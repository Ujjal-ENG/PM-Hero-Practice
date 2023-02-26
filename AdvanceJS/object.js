// create object using object literals

const player = {};
player.name = "Ujjal";
player.speciality = "HardWorker";
player.work = () => {
  console.log(`Now ${player.name} currently running web development`);
};

console.log(player);
player.work();
