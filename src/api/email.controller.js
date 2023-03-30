import axios from "axios";

export const getPostsRequests = async () => {
  console.log("getPostsRequests");
  return await axios.get("https://mern-backend.fly.dev/posts/");
};

export const createPostRequest = async (email) => {
  console.log("createPostRequest");

  console.log(email);
  return await axios.post("http://localhost:4000/emails", email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
