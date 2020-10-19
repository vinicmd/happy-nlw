import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.62.19.78:3333'
});

export default api;