import { setLocalStorage, getLocalStorage } from './utils.js';

const weatherIcon        = document.querySelector('.weather-icon');
const temperature        = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError       = document.querySelector('.weather-error');
const wind               = document.querySelector('.wind');
const humidity           = document.querySelector('.humidity');
const city               = document.querySelector('.city');

window.addEventListener('load', () => {
    let inputCity = getLocalStorage('city');
    if (inputCity != undefined) {
        city.value = inputCity;
    } else {
        city.value = 'Minsk';
    }
});

window.addEventListener('beforeunload', () => {
    setLocalStorage('city', city.value);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=11895977528da4edaa14e4c52f319385&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    weatherIcon.classList = 'weather-icon owf';
    if(data.main) {
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)}m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        weatherError.textContent = '';
    } else {
        weatherError.textContent = 'Error! City not found';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    }
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather(city.value);
        city.blur();
    }
}

city.addEventListener('keypress', setCity);

export { city, getWeather  };