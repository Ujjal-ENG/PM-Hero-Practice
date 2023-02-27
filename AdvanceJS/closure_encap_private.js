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

const multyValue = (num1, num2, type) => {
  switch (type) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return "Invalid Operation";
  }
};

console.log(multyValue(4, 2, "divide"));

