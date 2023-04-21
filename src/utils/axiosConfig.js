
import axios from "axios";


// instance of axios
const axiosInstance = axios.create({
  baseURL: `https://app.bolebrationevents.com:8877/`,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
}

  })


export default axiosInstance;
