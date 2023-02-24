import { getLocalStorage, setLocalStorage }                                 from './utils.js';
import { showDate, showGreeting, translateGreetingPlaceholder }             from './dateTime.js';
import { getQuotes, quoteNumber }                                           from './quote.js';
import { city, getWeather, translateDefaultCity, translateCityPlaceholder } from './weather.js';

const settingsButton          = document.querySelector('.settings__button');
const settingsInfo            = document.querySelector('.settings__info');
const settingsLangTitle       = document.querySelector('.settings__lang-title');
const enButton                = document.querySelector('.en-button');
const ruButton                = document.querySelector('.ru-button');
const settingsPicSourceTitle  = document.querySelector('.settings__pic-source');
const photoTag                = document.querySelector('.input-tag');
const settingsCheckboxesTitle = document.querySelector('.settings__checkboxes-title');

const checkboxTime            = document.querySelector('#time');
const checkboxDate            = document.querySelector('#date');
const checkboxGreeting        = document.querySelector('#greeting');
const checkboxQuote           = document.querySelector('#quote');
const checkboxWeather         = document.querySelector('#weather');

const settingsTimeTitle       = document.querySelector('.checkbox-time-title');
const settingsDateTitle       = document.querySelector('.checkbox-date-title');
const settingsGreetingTitle   = document.querySelector('.checkbox-greeting-title');
const settingsQuoteTitle      = document.querySelector('.checkbox-quote-title');
const settingsWeatherTitle    = document.querySelector('.checkbox-weather-title');

let language;
let isDisplayedTime = true;
let isDisplayedDate;
let isDisplayedGreeting;
let isDisplayedQuote;
let isDisplayedWeather;

// window.addEventListener('load', () => {
//     isDisplayedTime = getLocalStorage('isDisplayedTime');
//     if (isDisplayedTime == undefined) {
//         setLocalStorage('isDisplayedTime', true);
//         isDisplayedTime = true;
//     }
// });

// checkboxTime.addEventListener('change', () => {
//     setLocalStorage('isDisplayedTime', checkboxTime.checked);
//     isDisplayedTime = checkboxTime.checked;
// });

// settingsButton.addEventListener('click', () => {
//     settingsInfo.classList.toggle('active');
// });

function translateSettings(lang) {
    if (lang === 'en') {
        settingsLangTitle.textContent = 'Language';
        settingsPicSourceTitle.textContent = 'Image source';
        photoTag.placeholder = 'Search by tag';
        settingsCheckboxesTitle.textContent = 'Hide/show blocks';
        settingsTimeTitle.textContent = 'Time';
        settingsDateTitle.textContent = 'Date';
        settingsGreetingTitle.textContent = 'Greeting';
        settingsQuoteTitle.textContent = 'Quote';
        settingsWeatherTitle.textContent = 'Weather';
    } else {
        settingsLangTitle.textContent = 'Язык';
        settingsPicSourceTitle.textContent = 'Источник изображений';
        photoTag.placeholder = 'Поиск по тэгу';
        settingsCheckboxesTitle.textContent = 'Скрыть/показать блоки';
        settingsTimeTitle.textContent = 'Время';
        settingsDateTitle.textContent = 'Дата';
        settingsGreetingTitle.textContent = 'Приветствие';
        settingsQuoteTitle.textContent = 'Цитата';
        settingsWeatherTitle.textContent = 'Погода';
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
    getQuotes(language, quoteNumber);
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
    getQuotes(language, quoteNumber);
    translateSettings(language);
});

export { settingsButton, 
    enButton, 
    ruButton, 
    checkboxTime, 
    checkboxDate, 
    checkboxGreeting, 
    checkboxQuote, 
    checkboxWeather, 
    isDisplayedTime, 
    isDisplayedDate, 
    isDisplayedGreeting, 
    isDisplayedQuote, 
    isDisplayedWeather };