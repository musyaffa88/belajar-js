// cara membuat object (1)
const cat = {
  name: "oreo",
  age: 5,
  mixBreed: false,
  characteristic: {
    color: "white",
    eyeColor: "blue",
  },
};

console.log("cat:", cat);
// cara akses properti (1)
console.log("cat name:", cat.name);
// cara akses properti (2)
console.log(cat["age"]);

// cara membuat object (2)
const dog = new Object();
dog.name = "boba";
dog.age = 3;
// console.log("dog:", dog);

// cara membuat object (3)
const hamster = {};
// hamster.name = "hamtaro";
