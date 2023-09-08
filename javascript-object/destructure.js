const cars = ["ford", "volvo", "audi"];

// untuk mengakses elemen bisa menggunakan index
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];

// console.log(car1);

// destructure
const [car1, car2, car3] = cars;
// console.log(car1);

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// mengakses properti
// const brand = vehicleOne.brand;
// const model = vehicleOne.model;
// console.log(brand);

// desctructure
const { brand, model, type } = vehicleOne;
console.log(model);
