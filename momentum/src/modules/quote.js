import { getRandomNumber } from './utils.js';

const quoteButton   = document.querySelector('.change-quote');
const quoteElement  = document.querySelector('.quote');
const authorElement = document.querySelector('.author');

async function getQuotes(lang) {
    const quotes = '../assets/data.json';
    const response = await fetch(quotes);
    const data = await response.json();

    let quoteNum = getRandomNumber(0, 51);
    quoteElement.textContent = data[quoteNum][lang].text;
    authorElement.textContent = data[quoteNum][lang].author;
}

quoteButton.addEventListener('click', () => {
   getQuotes(lang);
});

export { getQuotes };