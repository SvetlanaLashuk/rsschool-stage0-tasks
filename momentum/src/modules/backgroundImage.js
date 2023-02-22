import { getTimeOfDay } from './dateTime.js';
import { getRandomNumber } from './utils.js';

const body = document.querySelector('body');
const photoTag = document.querySelector('.input-tag ');
const flickrRadioButton = document.querySelector('#flickr');
const unsplashRadioButton = document.querySelector('#unsplash');
const githubRadioButton = document.querySelector('#github');
let imageSource = flickrRadioButton.value;

flickrRadioButton.addEventListener('change', (event) => {
    imageSource = event.target.value;
});

async function getLinkToFlickrImage(searchTag) {
    if (searchTag === '') {
        const galleryListUrl = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getList&api_key=4c4a51dbb793ff8975aeae24ac88591c&user_id=197741851@N03&format=json&nojsoncallback=1';
        const responseGalleryList = await fetch(galleryListUrl);
        const galleryList = await responseGalleryList.json();
        const galleryId = galleryList.galleries.gallery.find((elem) => elem.title._content === getTimeOfDay()).gallery_id;

        const galleryPhotosUrl = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=4c4a51dbb793ff8975aeae24ac88591c&gallery_id=${galleryId}&extras=url_h&format=json&nojsoncallback=1`;
        const responseGalleryPhotos = await fetch(galleryPhotosUrl);
        const galleryPhotos = await responseGalleryPhotos.json();

        // setBackgroundImage(galleryPhotos.photos.photo);
        const img = new Image();
        const imageNumber = getRandomNumber(0,19);
        img.src = galleryPhotos.photos.photo[imageNumber].url_h;
        img.onload = () => {
            body.style.backgroundImage = `url('${galleryPhotos.photos.photo[imageNumber].url_h}')`;
        }
    } else {
        const photosByTagUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c4a51dbb793ff8975aeae24ac88591c&tags=${searchTag}&extras=url_h&format=json&nojsoncallback=1`;
        const responsePhotosByTag = await fetch(photosByTagUrl);
        const photosByTag = await responsePhotosByTag.json();

        // setBackgroundImage(photosByTag.photos.photo);
        const img = new Image();
        const imageNumber = getRandomNumber(0,19);
        img.src = photosByTag.photos.photo[imageNumber].url_h;
        img.onload = () => {
            body.style.backgroundImage = `url('${photosByTag.photos.photo[imageNumber].url_h}')`;
        }
    }
}

function setBackgroundImage(searchTag) {
    if (imageSource === 'flickr') {
        getLinkToFlickrImage(searchTag);
    }
}

// function setBackgroundImage(photo) {
//     const img = new Image();
//     const imageNumber = getRandomNumber(0,19);
//     img.src = photo[imageNumber].url_h;
//     img.onload = () => {
//         body.style.backgroundImage = `url('${photo[imageNumber].url_h}')`;
//     }
// }

function changeTag(event) {
    if (event.code === 'Enter') {
        let searchTag = photoTag.value;
        getLinkToFlickrImage(searchTag);
        photoTag.blur();
    }
}

photoTag.addEventListener('keypress', changeTag);

async function getLinkToUnsplashImage(searchTag) {
    const collectionsUrl = 'https://api.unsplash.com/users/aspirituss/collections?client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs';

    const collectionPhotos = `https://api.unsplash.com/collections/${id}/photos?client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs&per_page=20`;

    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchTag}&client_id=_w4uNDZKDscnmCE98EC6LHb-RM_FgIznkv_vZKdJgKs`;
    const response = await fetch(url);
    const data = await response.json();
}

export { setBackgroundImage };