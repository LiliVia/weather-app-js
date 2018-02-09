const API_URL = 'https://api.weatherbit.io/v2.0';
const API_KEY = '02fd99f29107456e914006fff00a5b9c'; // Weatherbit API key

//for current weather
const urlCurrent = (city = 'Kiev') =>
  `${API_URL}/current?city=${city}&key=${API_KEY}`;

//for 3 hourly on 5 days
const urlDays = (city = 'Kiev', days = 5) =>
  `${API_URL}/forecast/3hourly?city=${city}&days=${days}&key=${API_KEY}`;

//for daily to 7 days
const urlWeek = (city = 'Kiev', days = 7) =>
  `${API_URL}/forecast/daily?city=${city}&days=${days}&key=${API_KEY}`;

const request = url =>
  fetch(url)
    .then(resp => resp.json)
    .catch(er => console.log('Request failed', er));

export const getCurrentWeather = city => request(urlCurrent(city));

export const getDailyForecast = (city, days) => request(urlDays(city, days));

export const getWeeklyForecast = (city, days) => request(urlWeek(city, days));
