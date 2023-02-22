function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

export { getLocalStorage, setLocalStorage, getRandomNumber };