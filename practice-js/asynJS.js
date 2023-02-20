// const processOrder = (customer) => {
//   console.log("Customer Place the oder..");

//   setTimeout(() => {
//     console.log("Processing the order in restaurant");
//   }, 3000);

//   console.log("Order Serve to the customer");
// };

// processOrder("")

function disPlay(res) {
  console.log(`The result is ${res}`);
}

function add(num1, num2, cb) {
  let sum = num1 + num2;
  if (!cb) return sum;
  return cb(sum);
}

const res = add(4, 5);
add(5, 4, (res) => console.log(res));
console.log(res);
