// then and catch
// axios
//   .get("https://dummyjson.com/products")
//   .then((response) => {
//     console.log("products:", response.data.products);
//   })
//   .catch((error) => console.log(error));

// axios
//   .get("https://dummyjson.com/uses")
//   .then((response) => console.log("users:", response))
//   .catch((error) => console.log(error));

// async await

// without try catch
// const getAllPosts = async () => {
//   const response = await axios.get("https://dummyjson.com/posts");
//   console.log(response);
// };

// getAllPosts();

// with try catch
const getAllPosts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/posts");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// getAllPosts();

// Example Method POST
const payloadPost = {
  title: "Hello World",
  userId: 5,
  body: "Hello from the other side",
  tags: ["hello", "greeting"],
};

const addNewPost = async (payload) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/posts/add",
      payload
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// addNewPost(payloadPost);

// // Example Method PUT
const payloadUpdate = {
  title: "Good Bye World",
};

const updatePostById = async (id, payload) => {
  try {
    const response = await axios.put(
      `https://dummyjson.com/posts/${id}`,
      payload
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// updatePostById(1, payloadUpdate);

// // Example Method DELETE
const deletePostById = async (id) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/posts/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

deletePostById(1);
