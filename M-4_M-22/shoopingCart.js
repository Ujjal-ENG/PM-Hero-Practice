const shoopingCart = [
  { name: "shoe", price: 1200, quantity: 1 },
  { name: "shirt", price: 2200, quantity: 4 },
  { name: "pant", price: 1800, quantity: 2 },
  { name: "sari", price: 3600, quantity: 4 },
  { name: "belt", price: 600, quantity: 2 },
];

function totalCost(shoopingCart) {
  let totalCost = 0;
  for (let i of shoopingCart) {
    totalCost += i.price * i.quantity;
  }
  return totalCost;
}

console.log(totalCost(shoopingCart));
