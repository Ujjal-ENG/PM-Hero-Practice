// higher order function

// function hello() {
//   return () => {
//     console.log("higer order function");
//   };
// }

// hello()();

// var numbers = [1, 2, 3];

// var res = numbers.map((num) => num ** 2);

// console.log(res);

var players = [
  {
    name: "Sakib",
    avg: 38.23,
  },
  {
    name: "Tamim",
    avg: 36.74,
  },
  {
    name: "Musfiq",
    avg: 36.78,
  },
  {
    name: "Mahmudullah",
    avg: 37.12,
  },
];

var newPlayer = players.filter((player) => player.avg < 37);

console.log(newPlayer);
