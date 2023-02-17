import { getLocalStorage, setLocalStorage } from './utils.js';
import { translateDefaultCity } from './weather.js';

const settingsButton = document.querySelector('.settings__button');
const settingsInfo   = document.querySelector('.settings__info');
const enButton       = document.querySelector('.en-button');
const ruButton       = document.querySelector('.ru-button');
let language;

settingsButton.addEventListener('click', (e) => {
    settingsInfo.classList.toggle('active');
});

enButton.addEventListener('click', () => {
    language = 'en';
    ruButton.classList.remove('active');
    enButton.classList.add('active');
    setLocalStorage('lang', language);
    translateDefaultCity(language);
});

ruButton.addEventListener('click', () => {
    language = 'ru';
    enButton.classList.remove('active');
    ruButton.classList.add('active');
    setLocalStorage('lang', language);
    translateDefaultCity(language);
});

export { settingsButton };