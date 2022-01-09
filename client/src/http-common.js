import axios from "axios";
import config from "./config.json"

export default axios.create({
  baseURL: config.SERVER_URL,
  headers: {
    "Content-type": "application/json"
  }
});