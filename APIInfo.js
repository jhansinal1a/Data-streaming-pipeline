// APIInfo.js
import axios from 'axios';

const API_KEY = b7f3c880a9562c96527bd4bbf34b9c6d;
 // Get one free at openweathermap.org
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export default axios.create({
  baseURL: BASE_URL,
});

