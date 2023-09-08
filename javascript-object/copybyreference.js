const cat1 ={
    name: "oreo",
    age: 5,
}

// const cat2 = cat1;
// cat2.name = "chip";
console.log("cat 1:", cat1);
// console.log("cat 2:", cat2);

// pake spread
const cat2 = {...cat1};
// console.log("cat2 (before changing):", cat2);
cat2.age = 10;
console.log("cat2 (after changing):", cat2);
