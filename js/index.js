const form = document.getElementById('search');
const empty = document.getElementById('empty');
const URL = 'https://api.weatherbit.io/v2.0';
const KEY = '02fd99f29107456e914006fff00a5b9c';

const cityWeather = () => {
  let point = document.getElementById('city');
  point = point.value.trim();
  const url = `${URL}/current?city=${point}&key=${KEY}`;
  empty.classList.add = '';
  point.innerHTML = '';
  getForecast(renderToday, url);
}

const cityForecast = () => {
  let point = document.getElementById('city');
  point = point.value.trim();
  const url = `${URL}/forecast/daily?city=${point}&key=${KEY}&days=7`;
  empty.classList.add = '';
  point.innerHTML = '';
  getForecast(renderdays, url);
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

const renderToday = data => {
  const host = document.getElementById('forecast');
  return host.innerHTML = `
            <h2>Today in ${data[0].city_name}</h2>
            <p>${data[0].ob_time
      .split(' ')[0]
      .split('-')
      .reverse()
      .join('.')}</p>
            <p>${getWeekday(data[0].ob_time)}</p>
            <p>${data[0].weather.description}</p>
            <p><img src=${srcIcon(data[0].weather.icon)}></p>
            <p>${data[0].temp.toFixed(0)}&deg;C</p>
            <p>feeling as ${data[0].app_temp.toFixed(0)}&deg;C</p>
          `;
}

const renderDays = forecast => {
  const days = forecast.map(day => {
    return `
      <li>
        <h3>${getWeekday(day.datetime)}</h3>
        <p>${day.datetime.split('-').reverse().join('.')}</p>
        <p>${day.weather.description}</p>
        <p>max. ${day.max_temp.toFixed(0)}&deg;C</p>
        <p>min. ${day.min_temp.toFixed(0)}&deg;C</p>
        <p><img src=${srcIcon(day.weather.icon)}></p>
      </li>  
    `;
  }).join('');

  const host = document.getElementById('week-forecast-container');
  host.innerHTML = `
      <div class="week-forecast">
        <ul>${days}</ul>
      </div>`;

};

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
  cityForecast();
});
