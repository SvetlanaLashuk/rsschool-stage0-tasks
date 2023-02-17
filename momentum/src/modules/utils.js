function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}

export { getLocalStorage, setLocalStorage, getRandomNumber };