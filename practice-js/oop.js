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

class ManufacureCompany extends Vehical {
  constructor(name, type, year, manfacBy) {
    super(name, type, year);
    this.manfacBy = manfacBy;
  }

  display() {
    console.log(
      `${this.name} is the type of ${this.type} vehical which is lunched by ${this.year} and its Manufacture company is ${this.manfacBy}`
    );
  }
}

const car1 = new ManufacureCompany("BMW", "CAR", 2012, "Germany-BMW");
const bike1 = new ManufacureCompany("SNAKE-BLADE", "BIKE", 2023, "China");

car1.display();
bike1.display();
