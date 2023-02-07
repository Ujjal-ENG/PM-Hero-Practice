// var printPlayerName = function (name) {
//   console.log(name);
// };

// printPlayerName("Ujjal");

// var tamim = {
//   name: "tamim",
//   age: 34,
//   printPlayerName: function () {
//     console.log(this.name);
//   },
// };
// tamim.printPlayerName();

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. XXX",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var tamim = Person("Tamim", 35);

tamim.printName();
tamim.father.printName();
