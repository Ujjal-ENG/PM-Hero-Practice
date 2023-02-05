// var num1 = 2;

// var sum = function () {
//   var num2 = 3;
//   return function () {
//     return num1 + num2;
//   };
// };

// var myFunc = sum();

// console.dir(myFunc);

// (function () {
//   function bankAccount(initialBalance) {
//     var balance = initialBalance;

//     return function () {
//       return function () {
//         return balance * 3;
//       };
//     };
//   }

//   var account = bankAccount(199);

//   console.dir(account);
// })();

function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 10000000000; i++) {
  var a = Math.random() * 1000000;
}

timer();
