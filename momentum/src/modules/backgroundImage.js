import { getTimeOfDay } from './dateTime.js';
import { getRandomNumber } from './utils.js';

const body = document.querySelector('body');
const photoTag = document.querySelector('.input-tag ');
const flickrRadioButton = document.querySelector('#flickr');
const unsplashRadioButton = document.querySelector('#unsplash');
const githubRadioButton = document.querySelector('#github');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let imageSource = githubRadioButton.value;
let pageTag = '';
let randomNumber;

window.addEventListener('load', () => {
    randomNumber = getRandomNumber(1, 20);
});

githubRadioButton.addEventListener('change', (event) => {
    imageSource = event.target.value;
    photoTag.style.visibility = "hidden";
    setBackgroundImage(pageTag);
});

flickrRadioButton.addEventListener('change', (event) => {
    imageSource = event.target.value;
    photoTag.style.visibility = "visible";
    setBackgroundImage(pageTag);
});

unsplashRadioButton.addEventListener('change', (event) => {
    imageSource = event.target.value;
    photoTag.style.visibility = "visible";
    setBackgroundImage(pageTag);
});

function getSlidePrev() {
    if (randomNumber > 1) {
        randomNumber -= 1;
    } else {
        randomNumber = 20;
    }
    setBackgroundImage(pageTag);
}

function getSlideNext() {
    if (randomNumber < 20) {
        randomNumber += 1;
    } else {
        randomNumber = 1;
    }
    setBackgroundImage(pageTag);
}

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

function setGithubImage() {
    const timeOfDay = getTimeOfDay();
    const bgNum = randomNumber.toString().padStart(2, "0");

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/svetlanalashuk/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('${img.src}')`;
    }
}

async function setFlickrImage(searchTag) {
    if (searchTag === '') {
        const galleryListUrl = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getList&api_key=4c4a51dbb793ff8975aeae24ac88591c&user_id=197741851@N03&format=json&nojsoncallback=1';
        const responseGalleryList = await fetch(galleryListUrl);
        const galleryList = await responseGalleryList.json();
        const galleryId = galleryList.galleries.gallery.find((elem) => elem.title._content === getTimeOfDay()).gallery_id;

        const galleryPhotosUrl = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=4c4a51dbb793ff8975aeae24ac88591c&gallery_id=${galleryId}&extras=url_h&format=json&nojsoncallback=1`;
        const responseGalleryPhotos = await fetch(galleryPhotosUrl);
        const galleryPhotos = await responseGalleryPhotos.json();

        const img = new Image();
        const imageNumber = getRandomNumber(0, 19);
        img.src = galleryPhotos.photos.photo[imageNumber].url_h;
        img.onload = () => {
            body.style.backgroundImage = `url('${img.src}')`;
        }
    } else {
        const photosByTagUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c4a51dbb793ff8975aeae24ac88591c&tags=${searchTag}&sort=relevance&per_page=500&extras=url_h&format=json&nojsoncallback=1`;
        const responsePhotosByTag = await fetch(photosByTagUrl);
        const photosByTag = await responsePhotosByTag.json();

        const img = new Image();
        const imageNumber = getRandomNumber(0, 19);
        img.src = photosByTag.photos.photo[imageNumber].url_h;
        img.onload = () => {
            body.style.backgroundImage = `url('${img.src}')`;
        }
    }
}

async function setUnsplashImage(searchTag) {
    if (searchTag === '') {
        const collectionsUrl = 'https://api.unsplash.com/users/aspirituss/collections?client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs';
        const responseCollections = await fetch(collectionsUrl);
        const collections = await responseCollections.json();
        const collectionId = collections.find((elem) => elem.title === getTimeOfDay()).id;

        const collectionPhotosUrl = `https://api.unsplash.com/collections/${collectionId}/photos?client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs&per_page=20`;
        const responseCollectionPhotos = await fetch(collectionPhotosUrl);
        const collectionPhotos = await responseCollectionPhotos.json();

        const img = new Image();
        const imageNumber = getRandomNumber(0, 19);
        img.src = collectionPhotos[imageNumber].urls.regular;
        img.onload = () => {
            body.style.backgroundImage = `url('${img.src}')`;
        }
    } else {
        const photosByTagUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchTag}&client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs`;
        const responsePhotosByTag = await fetch(photosByTagUrl);
        const photosByTag = await responsePhotosByTag.json();

        const img = new Image();
        img.src = photosByTag.urls.regular;
        img.onload = () => {
            body.style.backgroundImage = `url('${img.src}')`;
        }
    }
}

function setBackgroundImage(searchTag) {
    if (imageSource == 'flickr') {
        setFlickrImage(searchTag);
    } else if (imageSource == 'unsplash') {
        setUnsplashImage(searchTag);
    } else {
        setGithubImage();
    }
}

function changeTag(event) {
    if (event.code === 'Enter') {
        pageTag = photoTag.value;
        setBackgroundImage(pageTag)
        photoTag.blur();
    }
}

photoTag.addEventListener('keypress', changeTag);

export { setBackgroundImage, photoTag, githubRadioButton };