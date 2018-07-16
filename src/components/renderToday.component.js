import { getWeekday } from '../services/helpers';
import { srcIcon } from '../services/helpers';

export const renderToday = data => {
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
