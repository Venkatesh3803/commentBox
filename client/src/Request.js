import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export default apiRequest;