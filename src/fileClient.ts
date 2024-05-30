import axios from "axios";

const fileClient = axios.create({
  baseURL: "http://localhost:3000",
});

export default fileClient;
