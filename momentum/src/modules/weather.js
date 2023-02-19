import { getLocalStorage, setLocalStorage } from './utils.js';

const weatherIcon        = document.querySelector('.weather-icon');
const temperature        = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError       = document.querySelector('.weather-error');
const wind               = document.querySelector('.wind');
const humidity           = document.querySelector('.humidity');
const city               = document.querySelector('.city');

const weatherTranslation = {
    'en': {
        'wind': 'Wind speed',
        'speed': 'm/s',
        'humidity': 'Humidity',
        'error': 'Error! City not found'
    },
    'ru': {
        'wind': 'Скорость ветра',
        'speed': 'м/с',
        'humidity': 'Влажность',
        'error': 'Ошибка! Город не найден'
    }
};

window.addEventListener('load', () => {
    let inputCity = getLocalStorage('city');
    if (inputCity !== undefined) {
        city.value = inputCity;
    } else {
        city.value = 'Minsk';
    }
});

window.addEventListener('beforeunload', () => {
    setLocalStorage('city', city.value);
});

async function getWeather(lang, city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=11895977528da4edaa14e4c52f319385&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    weatherIcon.classList = 'weather-icon owf';
    if(data.main) {
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${weatherTranslation[lang].wind}: ${data.wind.speed.toFixed(0)}${weatherTranslation[lang].speed}`;
        humidity.textContent = `${weatherTranslation[lang].humidity}: ${data.main.humidity}%`;
        weatherError.textContent = '';
    } else {
        weatherError.textContent = `${weatherTranslation[lang].error}`;
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    }
}

function setCity(event) {
    if (event.code === 'Enter') {
        let language = getLocalStorage('lang');
        getWeather(language, city.value);
        city.blur();
    }
}

city.addEventListener('keypress', setCity);

 function translateDefaultCity(lang) {
    if (city.value === 'Minsk' || city.value === 'Минск') {
        if (lang === 'en') {
            city.value = 'Minsk';
        } else {
            city.value = 'Минск';
        }
    }
}

function translateCityPlaceholder(lang) {
    if (lang === 'en') {
        city.placeholder = 'Enter city';
    } else {
        city.placeholder = 'Введите город';
    }
}

export { city, getWeather, translateDefaultCity, translateCityPlaceholder };