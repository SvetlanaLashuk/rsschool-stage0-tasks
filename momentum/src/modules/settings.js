import { setLocalStorage } from './utils.js';
import {
    dateElement,
    timeElement,
    showDate,
    showGreeting,
    translateGreetingPlaceholder
} from './dateTime.js';
import { getQuotes, quoteNumber } from './quote.js';
import { city, getWeather, translateDefaultCity, translateCityPlaceholder } from './weather.js';
import { githubRadioButton } from './backgroundImage';

const settingsButton = document.querySelector('.settings__button');
const settingsInfo = document.querySelector('.settings__info');
const settingsLangTitle = document.querySelector('.settings__lang-title');
const enButton = document.querySelector('.en-button');
const ruButton = document.querySelector('.ru-button');
const settingsPicSourceTitle = document.querySelector('.settings__pic-source');
const photoTag = document.querySelector('.input-tag');
const settingsCheckboxesTitle = document.querySelector('.settings__checkboxes-title');

const checkboxTime = document.querySelector('#time');
const checkboxDate = document.querySelector('#date');
const checkboxGreeting = document.querySelector('#greeting');
const checkboxQuote = document.querySelector('#quote');
const checkboxWeather = document.querySelector('#weather');
const checkboxPlayer = document.querySelector('#audio-player');

const settingsTimeTitle = document.querySelector('.checkbox-time-title');
const settingsDateTitle = document.querySelector('.checkbox-date-title');
const settingsGreetingTitle = document.querySelector('.checkbox-greeting-title');
const settingsQuoteTitle = document.querySelector('.checkbox-quote-title');
const settingsWeatherTitle = document.querySelector('.checkbox-weather-title');
const settingsPlayerTitle = document.querySelector('.checkbox-player-title');

const greetingContainer = document.querySelector('.greeting-container');
const quoteContainer = document.querySelector('.quote-container');
const weatherContainer = document.querySelector('.weather');
const playerContainer = document.querySelector('.player');

let language;

checkboxTime.addEventListener('change', () => {
    setLocalStorage('isDisplayedTime', checkboxTime.checked);
    if (checkboxTime.checked) {
        timeElement.style.visibility = 'visible'
    } else {
        timeElement.style.visibility = 'hidden'
    }
});

checkboxDate.addEventListener('change', () => {
    setLocalStorage('isDisplayedDate', checkboxDate.checked);
    if (checkboxDate.checked) {
        dateElement.style.visibility = 'visible'
    } else {
        dateElement.style.visibility = 'hidden'
    }
});

checkboxGreeting.addEventListener('change', () => {
    setLocalStorage('isDisplayedGreeting', checkboxGreeting.checked);
    if (checkboxGreeting.checked) {
        greetingContainer.style.visibility = 'visible';
    } else {
        greetingContainer.style.visibility = 'hidden';
    }
});

checkboxQuote.addEventListener('change', () => {
    setLocalStorage('isDisplayedQuote', checkboxQuote.checked);
    if (checkboxQuote.checked) {
        quoteContainer.style.visibility = 'visible';
    } else {
        quoteContainer.style.visibility = 'hidden';
    }
});

checkboxWeather.addEventListener('change', () => {
    setLocalStorage('isDisplayedWeather', checkboxWeather.checked);
    if (checkboxWeather.checked) {
        weatherContainer.style.visibility = 'visible';
    } else {
        weatherContainer.style.visibility = 'hidden';
    }
});

checkboxPlayer.addEventListener('change', () => {
    setLocalStorage('isDisplayedPlayer', checkboxPlayer.checked);
    if (checkboxPlayer.checked) {
        playerContainer.style.visibility = 'visible';
    } else {
        playerContainer.style.visibility = 'hidden';
    }
});

settingsButton.addEventListener('click', () => {
    settingsInfo.classList.toggle('active');
    if (settingsInfo.classList.contains('active')) {
        if (githubRadioButton.checked) photoTag.style.visibility = 'hidden';
        else photoTag.style.visibility = 'visible';
    } else photoTag.style.visibility = 'hidden';
});

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
        settingsPlayerTitle.textContent = 'Player';
    } else {
        settingsLangTitle.textContent = 'Язык';
        settingsPicSourceTitle.textContent = 'Источник изображений';
        photoTag.placeholder = 'Поиск по тэгу';
        settingsCheckboxesTitle.textContent = 'Спрятать/показать блоки';
        settingsTimeTitle.textContent = 'Время';
        settingsDateTitle.textContent = 'Дата';
        settingsGreetingTitle.textContent = 'Приветствие';
        settingsQuoteTitle.textContent = 'Цитата';
        settingsWeatherTitle.textContent = 'Погода';
        settingsPlayerTitle.textContent = 'Плеер';
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

export {
    settingsButton,
    enButton,
    ruButton,
    checkboxTime,
    checkboxDate,
    checkboxGreeting,
    checkboxQuote,
    checkboxWeather,
    checkboxPlayer
};