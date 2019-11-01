import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 26e17e6c83476dee797ad4b8638358f28e15b4f0934dca009a2d76e1acc0db3b"
  }
});
