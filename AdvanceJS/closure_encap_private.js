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

let storeFalsyValue = true;

if (!storeFalsyValue) {
  console.log("Nothing to show");
} else {
  console.log("Mama tik ase!!");
}
