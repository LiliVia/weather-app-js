const form = document.getElementById('search');
const empty = document.getElementById('empty');
const URL = 'https://api.weatherbit.io/v2.0';
const KEY = '02fd99f29107456e914006fff00a5b9c';

const cityWeather = () => {
  let point = document.getElementById('city');
  point = point.value.trim();
  const url = `${URL}/current?city=${point}&key=${KEY}`;
  console.log(url);
  empty.classList.add = '';
  getCurrentWeather(url);
  point = '';
}

const host = document.getElementById('forecast');

function getCurrentWeather(url) {
  return fetch(url)
    .then(resp => resp.json())
    .then(weatherData => {
      host.innerHTML = `
            <h2>${weatherData.data[0].city_name}</h2>
            <p>${weatherData.data[0].ob_time
          .split(' ')[0]
          .split('-')
          .reverse()
          .join('.')}</p>
            <p>${getWeekday(weatherData.data[0].ob_time)}</p>
            <p>${weatherData.data[0].weather.description}</p>
            <p><img src=${srcIcon(weatherData.data[0].weather.icon)}></p>
            <p>${weatherData.data[0].temp.toFixed(0)}&deg;C</p>
            <p>feeling as ${weatherData.data[0].app_temp.toFixed(0)}&deg;C</p>
          `;

    }).then(
      () => console.log('Get weather'),
      () => console.error('Failed'),
  );
}

const srcIcon = icon =>
  `https://www.weatherbit.io/static/img/icons/${icon}.png`;

const getWeekday = datetime => {
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = new Date(datetime).getDay();
  return weekday[date];
};

form.addEventListener("submit", e => {
  e.preventDefault();
  cityWeather();
});
