// const fruits = ["Banana", "Apple", "Orange", "Mango", "Lichi"];

// fruits.forEach((el) => console.log(el));
// console.log("finished");
// fruits.splice(1, 0, "Lemon");

// console.log(fruits);
// fruits.splice(1, 1);

// const numbers = [1, 2, 3, 4, 5];

// // const newNumbers = numbers.reduce((pV, cV) => {
// //   console.log(pV, cV);
// //   return pV + cV;
// // });
// // console.log(newNumbers);

// const funcAvg = (arrs) => {
//   let sum = 0;
//   for (const i of arrs) {
//     sum += Math.pow(i, 2);
//   }
//   return sum / arrs.length;
// };

// console.log(funcAvg(numbers));

// Now start to learn the date

// const date = new Date();
// console.log(date.toUTCString());
// console.log(date.toDateString());

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + 1);
// }

// // console.log(randomInt(1, 7));

// while (randomInt(1, 7) !== 6) {
//   console.log(randomInt(1, 7));
// }
// console.log("paisi");

// function isVowel(word) {
//   let count = 0;
//   const vowel = ["a", "e", "i", "o", "u"];
//   const sentence = Array.from(word.toLowerCase());

//   sentence.forEach((w) => {
//     if (vowel.includes(w)) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(isVowel("Hello ujjal Roy"));

// remove duplicate numbers

// const arrs = [1, 2, 32, 43, 12, 1, 3, 2, 43, 4, 32, 56, 32, 43];

// const removeDup = arrs.filter((v, i, a) => {
//   return a.indexOf(v) === i;
// });

// console.log(removeDup);

// regular expression

// let text = "I want be software developer in Microsoft Microsoft";
// let result = text.replace(/microsoft/gi, "Google");
// let searchText = text.match(/mic/gi);
// console.log(searchText);

// try {
//   console.log("Heeloo");
//   const number = 4 / 0;
//   number = 3 / 4;
//   console.log(number);
// } catch (error) {
//   console.log(error);
// }

// let x = "";

// try {
//   if (x == "")
//     throw {
//       name: "EmptyError",
//       message: "Please Provide a value",
//     };
//   if (isNaN(x))
//     throw {
//       name: "NumberChecking",
//       message: "Please Provide a Number",
//     };
//   if (x < 5) throw "too low";
//   if (x > 10)
//     throw {
//       name: "HighError",
//       message: "Please Provide a Kop Kop",
//     };
// } catch (error) {
//   console.log(error);
// }
// Now learn the Scooping In JS
// a();
// function a() {
//   c = "kopa";
//   // console.log(a);
// }
// // if (true) {
// //    c = "mui";
// // }

// console.log(c);
x = 5;
console.log(x);

var x;
