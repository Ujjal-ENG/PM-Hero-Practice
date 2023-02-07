const products = [
  { id: 1, name: "xaomi phone One night", price: 19000 },
  { id: 2, name: "Iphone phone XR", price: 39000 },
  { id: 3, name: "Relame 7 pro phone", price: 26500 },
  { id: 4, name: "Mac book AIR laptop", price: 66500 },
  { id: 5, name: "Hp Extreme Laptop", price: 76500 },
  { id: 6, name: "Nothing Phone One", price: 46500 },
  { id: 7, name: "M1 Chep Mackbook Pro", price: 146500 },
  { id: 8, name: "Walton Monitor", price: 14500 },
];

function searchProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product.name);
    }
  }
  return matched;
}

console.log(searchProducts(products, "phone"));
