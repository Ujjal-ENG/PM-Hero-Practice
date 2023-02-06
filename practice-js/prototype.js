function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log("Person is Eating");
  },

  sleep() {
    console.log("Person is sleeping");
  },
};

const sakib = Person("Sakib", 32);

console.dir(Person());
