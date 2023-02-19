import { setLocalStorage } from './utils.js';
import { showDate, showGreeting, translateGreetingPlaceholder } from './dateTime.js';
import { getQuotes } from './quote.js';
import { city, getWeather, translateDefaultCity, translateCityPlaceholder } from './weather.js';

const settingsButton    = document.querySelector('.settings__button');
const settingsInfo      = document.querySelector('.settings__info');
const settingsLangTitle = document.querySelector('.settings__lang-title');
const enButton          = document.querySelector('.en-button');
const ruButton          = document.querySelector('.ru-button');
let language;

settingsButton.addEventListener('click', (e) => {
    settingsInfo.classList.toggle('active');
});

function translateSettings(lang) {
    if (lang === 'en') {
        settingsLangTitle.textContent = 'Language';
    } else {
        settingsLangTitle.textContent = 'Язык';
    }
}

enButton.addEventListener('click', () => {
    language = 'en';
    ruButton.classList.remove('active');
    enButton.classList.add('active');
    setLocalStorage('lang', language);
    getWeather(language, city.value);
    showDate(language);
    showGreeting(language);
    translateGreetingPlaceholder(language);
    translateDefaultCity(language);
    translateCityPlaceholder(language);
    getQuotes(language);
    translateSettings(language);
});

ruButton.addEventListener('click', () => {
    language = 'ru';
    enButton.classList.remove('active');
    ruButton.classList.add('active');
    setLocalStorage('lang', language);
    getWeather(language, city.value);
    showDate(language);
    showGreeting(language);
    translateGreetingPlaceholder(language);
    translateDefaultCity(language);
    translateCityPlaceholder(language);
    getQuotes(language);
    translateSettings(language);
});

export { settingsButton, enButton, ruButton };