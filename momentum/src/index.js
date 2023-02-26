import { setLocalStorage, getLocalStorage } from './modules/utils.js';
import { showTime } from './modules/dateTime.js';
import { getQuotes } from './modules/quote.js';
import { city, getWeather } from './modules/weather.js';
import { setBackgroundImage } from './modules/backgroundImage.js';
import {
    enButton,
    ruButton,
    checkboxTime,
    checkboxDate,
    checkboxGreeting,
    checkboxQuote,
    checkboxWeather,
    checkboxPlayer
} from './modules/settings.js';
import playList from "./modules/playlist.js";

let language;
const changeEvent = new Event('change')
const playListContainer = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');
let isPlay = false;
let playNum = 0;
const audio = new Audio();
audio.src = playList[playNum].src;

window.addEventListener('load', () => {
    language = getLocalStorage('lang');
    if (language === undefined) {
        setLocalStorage('lang', 'en');
        language = 'en';
    }

    if (language === 'en') {
        enButton.classList.add('active');
    } else {
        ruButton.classList.add('active');
    }

    getWeather(language, city.value);
    showTime(language);
    getQuotes(language);
    setBackgroundImage('');

    checkboxTime.checked = (getLocalStorage('isDisplayedTime')?.toLowerCase() ?? 'true') === 'true';
    checkboxDate.checked = (getLocalStorage('isDisplayedDate')?.toLowerCase() ?? 'true') === 'true';
    checkboxGreeting.checked = (getLocalStorage('isDisplayedGreeting')?.toLowerCase() ?? 'true') === 'true';
    checkboxQuote.checked = (getLocalStorage('isDisplayedQuote')?.toLowerCase() ?? 'true') === 'true';
    checkboxWeather.checked = (getLocalStorage('isDisplayedWeather')?.toLowerCase() ?? 'true') === 'true';
    checkboxPlayer.checked = (getLocalStorage('isDisplayedPlayer')?.toLowerCase() ?? 'true') === 'true';

    checkboxTime.dispatchEvent(changeEvent);
    checkboxDate.dispatchEvent(changeEvent);
    checkboxGreeting.dispatchEvent(changeEvent);
    checkboxQuote.dispatchEvent(changeEvent);
    checkboxWeather.dispatchEvent(changeEvent);
    checkboxPlayer.dispatchEvent(changeEvent);

    playList.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = element.title;
        playListContainer.append(li);
    });

    playButton.addEventListener('click', () => {
        isPlay ? pauseAudio() : playAudio();
    });

    playPrevButton.addEventListener('click', () => {
        playPrev();
    });

    playNextButton.addEventListener('click', () => {
        playNext();
    });

    function playAudio() {
        setActiveAudio();
        audio.play();
        isPlay = true;
        playButton.classList.add('pause');
    }

    function pauseAudio() {
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
    }

    function playPrev() {
        if (playNum > 0) {
            playNum = playNum - 1;
        } else {
            playNum = playList.length - 1;
        }
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        if (isPlay) playAudio();
    }

    function playNext() {
        playNum = ++playNum % playList.length;
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        if (isPlay) playAudio();
    }

    audio.addEventListener('ended', () => {
        playNext();
    });

    const playItems = document.querySelectorAll('.play-item');

    playItems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            playNum = index;
            setActiveAudio();
            audio.src = playList[playNum].src;
            playAudio();
        });
    });

    const setActiveAudio = () => {
        playItems.forEach((e) => e.classList.remove('item-active'));
        playItems[playNum].classList.add('item-active');
    }
});