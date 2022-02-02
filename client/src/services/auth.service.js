import axios from "axios";
import config from "./../config.json";

const API_URL = config.SERVER_URL+'auth/';

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password,name,fname,mobile) {
    console.log(name+"---==");
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      name,
      fname,
      mobile
    });
  }
}

export default new AuthService();
