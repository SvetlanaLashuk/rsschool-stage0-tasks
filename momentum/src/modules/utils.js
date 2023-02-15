function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
}

function getRundomNumber(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}

export { setLocalStorage, getLocalStorage, getRundomNumber };