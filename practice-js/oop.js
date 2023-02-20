class Vehical {
  constructor(name, type, year) {
    (this.name = name), (this.type = type), (this.year = year);
  }

  display() {
    console.log(
      `${this.name} is the type of ${this.type} vehical which is lunched by ${this.year}`
    );
  }
}

const car1 = new Vehical("BMW", "CAR", 2012);
const bike1 = new Vehical("SNAKE-BLADE", "BIKE", 2023);

car1.display();
bike1.display();
