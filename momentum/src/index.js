import { setLocalStorage, getLocalStorage } from './modules/utils.js';
import { showTime } from './modules/dateTime.js';
import { getQuotes } from './modules/quote.js';
import { city, getWeather } from './modules/weather.js';
import { settingsButton } from './modules/settings.js';
//let language

window.addEventListener('load', () => {
    // let language = getLocalStorage('lang');
    // if (language == undefined) {
    //     setLocalStorage('lang', 'en');
    //     language = 'en';
    // }
    let language = getLocalStorage('lang');
    if (language == undefined) {
        setLocalStorage('lang', 'en');
        language = 'en';
    }
   // alert(language);
    // if language = 'en'()

    showTime(language);
    getQuotes('en');
    getWeather(language, city.value);
});