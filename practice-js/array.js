"use strict";

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

// x = 5;
// console.log(x);

// x;

// class Car {
//   constructor(name, year) {
//     (this.name = name), (this.year = year);
//   }
//   print() {
//     console.log(`The Car Name is ${this.name} and the release year is ${this.year}`)
//   }
// }

// const car1 = new Car("BMW", 2012);
// console.log(car1.print());

// function linerarSearch(arr, tar) {
//   return arr.indexOf(tar);
// }

// console.log(linerarSearch(["a", "b", "c", "d", "e", "f", "g", "h"], "c"));

// object constructor

// class Person {
//   constructor(fN, lN, age) {
//     this.fN = fN;
//     this.lN = lN;
//     this.age = age;
//   }
//   display() {
//     return `The Person Name is ${this.fN} ${this.lN} and age is ${this.age}`;
//   }
// }

// const ujjal = new Person("Ujjal", "Roy", 23);
// console.log(ujjal.display());

// Optional chaining

// const user = {
//   name: "Thomas ALba",
//   age: 55,
//   address: {
//     presentAd: "35/a Shewrapara",
//     PermanentAd: "Bauphal",
//   },
//   contact: {
//     phone: 893478957,
//     email: "333@gmail.com",
//     whatsApp: 34523534,
//     Facebook: "th@facebook",
//   },
//   postOffice: "Cantonment",
//   city: "Dhaka",
// };

// console.log(user?.address?.PermanentAd);

const products = [
  { id: 1, name: "laptop", price: 65000 },
  { id: 2, name: "desktop", price: 45000 },
  { id: 3, name: "Iphone13", price: 79700 },
  { id: 4, name: "Realme 7 Pro", price: 26500 },
  { id: 5, name: "Realme c11", price: 15000 },
];

// const newName = products.map((el) => {
//   if (el.price > 40000) {
//     return el.name;
//   }
// });

// console.log(newName);

// const fillNum = products.filter((el) => el.price > 40000);
// console.log(fillNum);

// const findValue = products.find((el) => el.price % 15 === 0);

// console.log(findValue);

// const People = [
//   { name: "m", age: 20 },
//   { name: "r", age: 15 },
//   { name: "s", age: 22 },
// ];
// let sum = 0;
// for (let i of People) {
//   sum += i.age;
// }
// console.log(sum);

// const newAge = People.reduce((pV, { age }) => {
//   return pV + age;
// }, 0);
// console.log(newAge);

// let data = {
//   location: [
//     {
//       latitude: "34.4",
//       longitude: "54.23",
//       city: "Heydrabad",
//       country: "India",
//     },
//   ],
// };

// console.log(data.location[0].city);

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(user.email);
console.log(user.address.street);
console.log(user.address.zipcode);
console.log(user.address.geo.lng);
console.log(user.company.catchPhrase);
