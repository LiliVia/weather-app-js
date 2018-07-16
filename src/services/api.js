import { renderDays } from '../components/renderDays.component';
import { renderToday } from '../components/renderToday.component';

const URL = 'https://api.weatherbit.io/v2.0';
const KEY = '02fd99f29107456e914006fff00a5b9c';
const empty = document.getElementById('empty');
const point = document.getElementById('city');

export const cityWeather = () => {
  let city = point.value.trim();
  let url = `${URL}/current?city=${city}&key=${KEY}`;
  empty.classList.add = '';
  getForecast(renderToday, url);
}

export const cityForecast = () => {
  let city = point.value.trim();
  let url = `${URL}/forecast/daily?city=${city}&key=${KEY}&days=7`;
  empty.classList.add = '';
  getForecast(renderDays, url);
}

const getForecast = (render, url) => {
  return fetch(url)
    .then(resp => resp.json())
    .then(weatherData => {
      console.log(weatherData.data);
      render(weatherData.data);
    }).then(
      () => console.log('Get weather'),
      () => console.error('Failed'),
  );
}

