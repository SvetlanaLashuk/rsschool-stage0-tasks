import { setLocalStorage, getLocalStorage } from './utils.js';

const timeElement     = document.querySelector('.time');
const dateElement     = document.querySelector('.date');
const greetingElement = document.querySelector('.greeting');
const nameElement     = document.querySelector('.name');

const greetingTranslation = {
    'en': {
        'morning': 'Good morning,',
        'afternoon': 'Good afternoon,',
        'evening': 'Good evening,',
        'night': 'Good night,'
    },
    'ru': {
        'morning': 'Доброе утро,',
        'afternoon': 'Добрый день,',
        'evening': 'Добрый вечер,',
        'night': 'Доброй ночи,'
    }
};

window.addEventListener('load', () => {
    let inputName = getLocalStorage('name');
    if (inputName !== undefined) {
        nameElement.value = inputName;
    }
});

window.addEventListener('beforeunload', () => {
    setLocalStorage('name', nameElement.value);
});

function showTime(lang) {
    lang = getLocalStorage('lang');
    const date = new Date();
    timeElement.textContent = date.toLocaleTimeString();
    showDate(lang);
    showGreeting(lang);
    setTimeout(showTime, 1000);
}

function showDate(lang) {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    
    if (lang  === 'en') {
        dateElement.textContent = date.toLocaleDateString('en-US', options);
    } else {
        dateElement.textContent = date.toLocaleDateString('ru-RU', options);
    }
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let time;

    if (hours >= 6 && hours < 12) {
        time = 'morning';
    } else if (hours >= 12 && hours < 18) {
        time = 'afternoon';
    } else if (hours >= 18 && hours < 24) {
        time = 'evening';
    } else {
        time = 'night';
    }

    return time;
}

function showGreeting(lang) {
    const timeOfDay = getTimeOfDay();
    greetingElement.textContent = `${greetingTranslation[lang][timeOfDay]}`;
}

function translateGreetingPlaceholder(lang) {
    if (lang === 'en') {
        nameElement.placeholder = 'Enter name';
    } else {
        nameElement.placeholder = 'Введите имя';
    }
}

export { showTime, showDate, getTimeOfDay, showGreeting, translateGreetingPlaceholder };