const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// untuk menggabungkan memakai spread
const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log(myUpdatedVehicle);
