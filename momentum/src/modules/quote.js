import { getRundomNumber } from './utils.js';

const quoteButton   = document.querySelector('.change-quote');
const quoteElement  = document.querySelector('.quote');
const authorElement = document.querySelector('.author');

async function getQuotes(lang = 'en') {
    const quotes = '../assets/data.json';
    const response = await fetch(quotes);
    const data = await response.json();

    let quoteNum = getRundomNumber(0, 51);
    quoteElement.textContent = data[quoteNum].en.text;
    authorElement.textContent = data[quoteNum].en.author;
}

quoteButton.addEventListener('click', () => {
   getQuotes('en');
});

export { getQuotes };