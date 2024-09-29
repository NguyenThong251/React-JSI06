import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3001", // Địa chỉ của JSON server
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default apiClient;