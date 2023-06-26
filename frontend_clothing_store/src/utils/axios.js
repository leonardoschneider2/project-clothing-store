import axios from 'axios';
import "dotenv/config"

const axiosConnect = axios.create({
  baseURL: process.env.BACKEND_BASEURL,
  timeout: 2500,
});

export default axiosConnect;