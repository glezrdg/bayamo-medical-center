import axios from "axios";

export const createEmailRequest = async (email) => {
  console.log(email);
  return await axios.post("https://bmc-backend.onrender.com/emails", email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
