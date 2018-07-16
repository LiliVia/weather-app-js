import { getWeekday } from '../services/helpers';
import { srcIcon } from '../services/helpers';

export const renderDays = forecast => {
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
