import playList from "./playlist.js";

const playListContainer = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
// const audio = document.querySelector('.audio');
let isPlay = false;
const audio = new Audio();

playList.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = element.title;
    playListContainer.append(li);
});

playButton.addEventListener('click', () => {
    if (playButton.classList.contains('pause')) {
        isPlay = false;
    } else {
        isPlay = true;
    }
    playButton.classList.toggle('pause');
});

function playAudio() {
    if (!isPlay) {
        audio.src = 
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }

    
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
}
