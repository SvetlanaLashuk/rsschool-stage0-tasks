import { getLocalStorage, getRandomNumber } from './utils.js';

const quoteButton   = document.querySelector('.change-quote');
const quoteElement  = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
let quoteNumber;

async function getQuotes(lang, item) {
    const quotes = 'assets/data.json';
    const response = await fetch(quotes);
    const data = await response.json();
    
    if (item === undefined) {
        item = getRandomNumber(0, 51);
    }
    quoteElement.textContent = data[item][lang].text;
    authorElement.textContent = data[item][lang].author;
    quoteNumber = item;
}

quoteButton.addEventListener('click', () => {
   let language = getLocalStorage('lang');
   getQuotes(language);
});

export { getQuotes, quoteNumber };