const API_URL = 'https://api.weatherbit.io/v2.0';
const API_KEY = '02fd99f29107456e914006fff00a5b9c'; // Weatherbit API key

//for current weather
const urlCurrent = (city = 'Kiev') =>
  `${API_URL}/current?city=${city}&key=${API_KEY}`;

//for 3 hourly on 5 days
const urlHourly = (city = 'Kiev', days = 5) =>
  `${API_URL}/forecast/3hourly?city=${city}&days=${days}&key=${API_KEY}`;

//for daily to 7 days
const urlDays = (city = 'Kiev', days = 7) =>
  `${API_URL}/forecast/daily?city=${city}&days=${days}&key=${API_KEY}`;

const request = url =>
  fetch(url)
    .then(resp => resp.json)
    .catch(er => console.log('Request failed', er));

export const getCurrentWeather = city => request(urlCurrent(city));

export const getForecast = (city, days) => {
  if (days <= 5) {
    request(urlHourly(city, days));
  } else if (days > 5 && days <= 16) {
    request(urlDays(city, days));
  } else {
    return;
  }
};
