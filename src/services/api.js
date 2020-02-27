import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-fake-api.herokuapp.com/',
});

export default api;
