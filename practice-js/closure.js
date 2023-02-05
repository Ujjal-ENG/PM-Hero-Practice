// var num1 = 2;

// var sum = function () {
//   var num2 = 3;
//   return function () {
//     return num1 + num2;
//   };
// };

// var myFunc = sum();

// console.dir(myFunc);

function bankAccount(initialBalance) {
  var balance = initialBalance;

  return function () {
    return balance;
  };
}

var account = bankAccount(199);
console.log(account);
