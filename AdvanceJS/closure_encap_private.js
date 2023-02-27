// function kitchen() {
//   let roast = 0;
//   return function () {
//     roast++;
//     return roast;
//   };
// }

// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

// call back function

// function greetingHandler() {
//   console.log("Good Morning");
// }

// function greetSomeOne(greetingHandler) {
//   greetingHandler();
// }

// greetSomeOne(greetingHandler);

// const checkNum = (num) => {
//   if (typeof num === "number") {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkNum(1));

// let storeFalsyValue = true;

// if (!storeFalsyValue) {
//   console.log("Nothing to show");
// } else {
//   console.log("Mama tik ase!!");
// }

// const multyValue = (num1, num2, type) => {
//   switch (type) {
//     case "add":
//       return num1 + num2;
//     case "subtract":
//       return num1 - num2;
//     case "multiply":
//       return num1 * num2;
//     case "divide":
//       return num1 / num2;
//     default:
//       return "Invalid Operation";
//   }
// };

// console.log(multyValue(4, 2, "divide"));

// function add() {
//   let count = 0;
//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// const counter = add();
// counter();
// counter();
// counter();
// counter();
// const counter2 = add();
// counter2();
// counter2();
// counter2();

// console.dir(counter2);

// const kopa = () => {
//   console.log("hello");
// };
// kopa();

// function bankAccount(initialBanlance) {
//   let balance = initialBanlance;
//   return function () {
//     return balance;
//   };
// }

// const account = bankAccount(1000);
// co
function stopWatch() {
  let startTime = Date.now();

  return function () {
    console.log(Date.now() - startTime);
  };
}

const times = stopWatch();
// console.dir(times());

for (let i = 0; i <= 100000000; i++) {
  let a = Math.random() * i;
}
times();
