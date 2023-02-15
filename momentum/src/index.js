import { showTime } from './modules/dateTime.js';
import { getQuotes } from './modules/quote.js';
import { city, getWeather } from './modules/weather.js';
import { setLocalStorage, getLocalStorage } from './modules/utils.js';

window.addEventListener('load', () => {
    showTime('en');
    getQuotes('en');
    getWeather(city.value);
});