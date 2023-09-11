const promiseFunc = new Promise((resolve, reject) => {
  if (true) {
    resolve("Promise is fulfilled");
  } else {
    reject("Promise is rejected");
  }
});

// console.log(promiseFunc);

promiseFunc
  .then((response) => console.log("Ok: " + response))
  .catch((response) => console.log("Not Ok: " + response));
