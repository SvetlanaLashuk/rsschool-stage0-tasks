import { setLocalStorage, getLocalStorage } from './modules/utils.js';
import { showTime } from './modules/dateTime.js';
import { getQuotes } from './modules/quote.js';
import { city, getWeather } from './modules/weather.js';
import { enButton, ruButton } from './modules/settings.js';
let language;

window.addEventListener('load', () => {
    language = getLocalStorage('lang');
    if (language === undefined) {
        setLocalStorage('lang', 'en');
        language = 'en';
    }
    
    if (language === 'en') {
        enButton.classList.add('active');
    } else {
        ruButton.classList.add('active'); 
    }
    
    getWeather(language, city.value);
    showTime(language);
    getQuotes(language);
});