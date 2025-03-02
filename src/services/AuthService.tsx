import axios from "axios";

const baseURL = "https://localhost:5001";

const API_URL = "/api/auth";

const login = (email : string, password: string) => {
  return axios
    .post(baseURL + API_URL + "/login", {
      email,
      password,
    })
    .then((response : any) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }
      return response;
    });
};

const loginWithRefreshToken = (token: any) => {
  return axios
    .post(baseURL + API_URL + "/refreshToken", {
      token,
    })
    .then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")?.toString() ?? '');
};

const AuthService = {
  login,
  loginWithRefreshToken,
  logout,
  getCurrentUser,
};

export default AuthService;