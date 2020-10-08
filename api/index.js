import axios from "axios";

let headers = {};

if (typeof window !== "undefined") {
  const token = localStorage.getItem(token);

  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }
}

export default axios.create({
  baseURL: "http://34.122.42.109/api/v1/",
  headers,
});
