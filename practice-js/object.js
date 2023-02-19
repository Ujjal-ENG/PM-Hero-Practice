const car = {
  name: "Fiat",
  weight: "850kg",
  price: 2345060,
  model: "F123NKUK",
  details: () => {
    console.log(
      `${car.name} is a very high demand carr and also its price ${car.price}`
    );
  },
  drive: () => {
    console.log(`${car.name} car and model is ${car.model}`);
  },
};

car.details();
car.drive();
console.log(car["weight"]);
