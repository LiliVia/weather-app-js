import { cityWeather } from './services/api';
import { cityForecast } from './services/api';

import '../css/main.css';

const form = document.getElementById('search');
const point = document.getElementById('city');


form.addEventListener("submit", e => {
  e.preventDefault();
  cityWeather();
  cityForecast();
  point.value = '';
});
