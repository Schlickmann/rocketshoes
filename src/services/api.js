import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-fake-json-api.herokuapp.com/',
});

export default api;
