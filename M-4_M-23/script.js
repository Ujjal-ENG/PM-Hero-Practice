// const calcAge2 = (birthyear) => 2023 - birthyear;

// console.log(calcAge2(1998));

function cutFruitPices(fruit) {
  return fruit * 4;
}

// function fruitProcessor(apples, oranges) {
//   const applePices = cutFruitPices(apples);
//   const orangePices = cutFruitPices(oranges);

//   const juice = `Juice with ${applePices} apples and ${orangePices} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAverage = (num1, num2, num3) => {
//   return Math.round((num1 + num2 + num3) / 3);
// };

// const checkWinner = (avgDolphins, avgKolas) => {
//   if (avgDolphins >= 2 * avgKolas) {
//     return `Dolphins is win the trophy🏆 and the score is ${avgDolphins} vs ${avgKolas}`;
//   } else if (avgKolas >= 2 * avgDolphins) {
//     return `Kolas is win the trophy🏆 and the score is ${avgDolphins} vs ${avgKolas}`;
//   } else {
//     return "No teams win this match";
//   }
// };

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKolas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKolas);
// const res = checkWinner(avgDolphins, avgKolas);
// console.log(res);
// const name = "Ujjal";

// console.log((name[0] = "s"));
// console.log(name);

// const calcTip = (tip) => {
//   if (tip >= 50 && tip <= 300) {
//     return Math.round(tip * (15 / 100));
//   }
//   return Math.round(tip * (20 / 100));
// };

// const bills = [125, 555, 40];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const ujjal = {
//   firstName: "Ujjal",
//   lastName: "Roy",
//   birthYear: 1998,
//   job: "Engineer",
//   friends: ["Ador", "Saurav", "Sajal"],
//   hasDriversLincese: true,

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   summaryOb: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLincese ? "a" : "not"} drivers linces`;
//   },
// };

// console.log(ujjal.summaryOb());

// function res(a) {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return a * b * c * d;
//       };
//     };
//   };
// }

// console.log(res(2)(3)(4)(1));

const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  },
};

const checkWinner = () => {
  return johnSmith.calcBMI() > markMiller.calcBMI()
    ? `${johnSmith.fullName} BMI ${johnSmith.calcBMI()} is higher than ${
        markMiller.fullName
      } BMI ${markMiller.calcBMI()}`
    : `${markMiller.fullName} BMI ${markMiller.calcBMI()} is higher than ${
        johnSmith.fullName
      } BMI ${johnSmith.calcBMI()}`;
};

console.log(checkWinner());
