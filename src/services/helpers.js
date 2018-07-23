export const srcIcon = icon =>
  `https://www.weatherbit.io/static/img/icons/${icon}.png`;

export const getWeekday = datetime => {
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = new Date(datetime).getDay();
  return weekday[date];
};


const storageCity = (key, city) => {

  let arr = JSON.parse(localStorage.getItem(key)) || [];

  if (arr.indexOf(city) === -1) {
    arr.push(city);
  } else if (arr.length > 5) {
    arr.shift();
  }

  localStorage.setItem(key, JSON.stringify(arr));
}

export const recentStorage = (city) => storageCity('recent', city);
export const favoriteStorage = (city) => storageCity('favorite', city)

export const checkType = (item) => typeof item; 
