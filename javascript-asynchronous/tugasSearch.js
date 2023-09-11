const axios = require('axios');

const searchProduct = async (keyword) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`);
    // const response = await axios.get(`https://dummyjson.com/products/search?q=${keyword}&select=title,description,price,brand,category`);
    console.log(response.data);
    // console.log("products :", response.data.products);
  } catch (error) {
    console.log(error);
  }
};

searchProduct("phone");


