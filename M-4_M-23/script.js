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

const calcAverage = (num1, num2, num3) => {
  return Math.round((num1 + num2 + num3) / 3);
};

const checkWinner = (avgDolphins, avgKolas) => {
  if (avgDolphins >= 2 * avgKolas) {
    return `Dolphins is win the trophy🏆 and the score is ${avgDolphins} vs ${avgKolas}`;
  } else if (avgKolas >= 2 * avgDolphins) {
    return `Kolas is win the trophy🏆 and the score is ${avgDolphins} vs ${avgKolas}`;
  } else {
    return "No teams win this match";
  }
};

let avgDolphins = calcAverage(44, 23, 71);
let avgKolas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKolas);
const res = checkWinner(avgDolphins, avgKolas);
console.log(res);
