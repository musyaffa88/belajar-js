const cat = {
  name: "oreo",
  age: 5,
  mixBreed: false,
  characteristic: {
    color: "white",
    eyeColor: "blue",
  },
};

// example
const color = cat?.characteristic?.color;
console.log(color);
