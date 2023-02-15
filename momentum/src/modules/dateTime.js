import { setLocalStorage, getLocalStorage } from './utils.js';

const timeElement     = document.querySelector('.time');
const dateElement     = document.querySelector('.date');
const greetingElement = document.querySelector('.greeting');
const name            = document.querySelector('.name');

window.addEventListener('beforeunload', () => {
    setLocalStorage('name', name.value);
});

window.addEventListener('load', () => {
    let inputName = getLocalStorage('name');
    if (inputName != undefined) {
        name.value = inputName;
    }
});

function showTime(lang = 'en') {
    const date = new Date();
    timeElement.textContent = date.toLocaleTimeString();
    showDate(lang);
    showGreeting(lang);
    setTimeout(showTime, 1000);
}

function showDate(lang = 'en') {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    if (lang  == 'en') {
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

function showGreeting(lang = 'en') {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;

    if (lang == 'ru') {
        if (greetingText === 'Good morning,') {
            greetingElement.textContent = 'Доброе утро,';
        } else if (greetingText === 'Good afternoon,') {
            greetingElement.textContent = 'Добрый день,';
        } else if (greetingText === 'Good evening,') {
            greetingElement.textContent = 'Добрый вечер,';
        } else {
            greetingElement.textContent = 'Доброй ночи,';
        }
    } else {
        greetingElement.textContent = greetingText;
    }
}

export { showTime };