// const processOrder = (customer) => {
//   console.log("Customer Place the oder..");

//   setTimeout(() => {
//     console.log("Processing the order in restaurant");
//   }, 3000);

//   console.log("Order Serve to the customer");
// };

// processOrder("")

// function disPlay(res) {
//   console.log(`The result is ${res}`);
// }

// function add(num1, num2, cb) {
//   let sum = num1 + num2;
//   if (!cb) return sum;
//   return cb(sum);
// }

// const res = add(4, 5);
// add(5, 4, (res) => console.log(res));
// console.log(res);

// let status = true;

// console.log("Task 1");

// const taskPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (status) {
//       resolve("Task 2");
//       status = false;
//     } else {
//       reject("Task Failed");
//     }
//   }, 2000);
// });

// taskPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("Task 3");

// const paymentSuccess = true;
// const marks = 98;

// function enroll() {
//   console.log("Course enrollments is in progress");

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (paymentSuccess) {
//         res();
//       } else {
//         rej("Payment Failed");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function progress() {
//   console.log("Course on Progress...");

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (marks >= 80) {
//         res();
//       } else {
//         rej("You could not get enough marks to get the certificate");
//       }
//     }, 3000);
//   });

//   return promise;
// }

// function getCertificate() {
//   console.log("Preparing your certificate!!");

//   const promise = new Promise(() => {
//     setTimeout(() => {
//       console.log("Congrats!!! You got the certificate");
//     }, 1000);
//   });
//   return promise;
// }

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .catch((err) => {
//     console.log(err);
//   });
 
