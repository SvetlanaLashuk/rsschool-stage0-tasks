import { setLocalStorage, getLocalStorage } from './modules/utils.js';
import { showTime }                         from './modules/dateTime.js';
import { getQuotes }                        from './modules/quote.js';
import { city, getWeather }                 from './modules/weather.js';
import { setBackgroundImage }               from './modules/backgroundImage.js';
import playList from "./modules/playlist.js"; 

import { 
    enButton, 
    ruButton, 
    // checkboxTime, 
    checkboxDate, 
    checkboxGreeting, 
    checkboxQuote, 
    checkboxWeather, 
    // isDisplayedTime, 
    isDisplayedDate, 
    isDisplayedGreeting, 
    isDisplayedQuote, 
    isDisplayedWeather } from './modules/settings.js';

    const checkboxTime            = document.querySelector('#time');
    let language;
    let isDisplayedTime;


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

    isDisplayedTime = getLocalStorage('isDisplayedTime');
    if (isDisplayedTime == undefined) {
        setLocalStorage('isDisplayedTime', true);
        isDisplayedTime = true;
    }

    getWeather(language, city.value);
    showTime(language);
    getQuotes(language);
    setBackgroundImage('');

    checkboxTime.checked = isDisplayedTime;
    checkboxDate.checked = isDisplayedDate;
    checkboxGreeting.checked = isDisplayedGreeting;
    checkboxQuote.checked = isDisplayedQuote;
    checkboxWeather.checked = isDisplayedWeather;
    
    
});


