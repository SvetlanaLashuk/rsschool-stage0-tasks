const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

function setTime(lang = 'en') {
    const date = new Date();
    timeElement.textContent = date.toLocaleTimeString();
    setDate(lang);
    setTimeout(setTime, 1000);
}

function setDate(lang = 'en') {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    if (lang  === 'en') {
        dateElement.textContent = date.toLocaleDateString('en-US', options);
    } else {
        dateElement.textContent = date.toLocaleDateString('ru-RU', options);
    }
}

export { setTime };