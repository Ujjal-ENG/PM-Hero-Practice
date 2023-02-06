class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("This is the parent method");
  }
}

class Child extends Person {
  constructor(name, age, type, gender) {
    super(name, age);
    this.type = type;
    this.gender = gender;
  }

  play() {
    console.log(
      `${this.name} is play ${this.type} and gender is ${this.gender}`
    );
  }
}

let ujjal = new Child("Ujjal", "23", "Cricket", "Male");

ujjal.play();
ujjal.eat();
