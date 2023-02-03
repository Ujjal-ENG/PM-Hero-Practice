const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  { name: "Iphone", camera: 48, storage: "64gb", price: 66000, color: "gold" },
  { name: "Xaomi", camera: 64, storage: "128gb", price: 22000, color: "Apple" },
  {
    name: "Nokia",
    camera: 108,
    storage: "256gb",
    price: 88000,
    color: "Silver",
  },
  { name: "HTC", camera: 108, storage: "256gb", price: 98000, color: "Silver" },
];

function chepestPhone(phones) {
  let chepest = phones[0];
  for (let i = 1; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest.price = phone.price;
    }
  }
  return chepest.price;
}

console.log(chepestPhone(phones));
