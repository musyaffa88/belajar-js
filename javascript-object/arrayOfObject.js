let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

// let car = {
//   color: "red",
//   type: "cabrio",
//   registration: new Date("2016-05-02"),
//   capacity: 2,
// };
// cars.push(car);
// console.log(cars);
let car = cars.find(car => car.capacity > "red");
console.log(cars.type);

// menambah properti baru di tiap object
cars.forEach((car) => {
  car["size"] = "large";
  if (car.capacity <= 5) {
    car["size"] = "medium";
  }
  if (car.capacity <= 3) {
    car["size"] = "small";
  }
});

console.log(cars);