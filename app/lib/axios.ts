import axios from "axios";

const API = axios.create({
  baseURL: "https://skmbooks.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh")
    ) {
      originalRequest._retry = true;
      try {
        const refreshRes = await axios.post(
          "https://skmbooks.onrender.com/api/auth/jwt/refresh/",
          {
            refresh: localStorage.getItem("refresh"),
          }
        );
        const newAccessToken = refreshRes.data.access;
        localStorage.setItem("token", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
