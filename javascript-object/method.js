const person = {
  firstName: "Geto",
  lastName: "Suguru",
  age: 17,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  editAge: function(age) {
    this.age = age;
  }
};

person.editAge(18);

console.log(person.fullName());
console.log(person.age);