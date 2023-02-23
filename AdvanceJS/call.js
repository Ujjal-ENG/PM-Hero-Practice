const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  Salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    this.Salary = this.Salary - amount;
    return this.Salary;
  },
};

const heroPerson = {
  firstName: "Hero",
  lastName: "Alam",
  Salary: 25000,
};

const friendlyPerson = {
  firstName: "Kopa",
  lastName: "Kalam",
  Salary: 34000,
};

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
console.log(heroBillCharge(5000));

const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonBill(4000);

