import { getTimeOfDay } from './dateTime.js';
import { getRandomNumber } from './utils.js';

const body = document.querySelector('body');

async function getLinkToFlickrImage(tag) {
    const galleryListUrl = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getList&api_key=a1fb861e8ca05ebaa5bdaf4bdd8ad4d3&format=json&nojsoncallback=1&auth_token=72157720874158105-c8cc525b29d8c7d7&api_sig=e7a1f795df06538b2d0903c0b4edfe2f';
    const responseGalleryList = await fetch(galleryListUrl);
    const galleryList = await responseGalleryList.json();
    const galleryId = galleryList.galleries.gallery.find((elem) => elem.title._content === getTimeOfDay()).gallery_id;

    const galleryPhotosUrl = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a1fb861e8ca05ebaa5bdaf4bdd8ad4d3&gallery_id=${galleryId}&extras=url_h&format=json&nojsoncallback=1&auth_token=72157720874158105-c8cc525b29d8c7d7&api_sig=2c004b1c06a8e8d0eab7f0e8acc9ef78`;
    const responseGalleryPhotos = await fetch(galleryPhotosUrl);
    const galleryPhotos = await responseGalleryPhotos.json();

    // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c4a51dbb793ff8975aeae24ac88591c&tags=nature&extras=url_h&format=json&nojsoncallback=1`;
    // const response = await fetch(url);
    // const data = await response.json();

    setBackgroundImage(galleryPhotos.photos.photo);
}

function setBackgroundImage(photo) {
    const img = new Image();
    const imageNumber = getRandomNumber(0,19)
    img.src = photo[imageNumber].url_h;
    img.onload = () => {
        body.style.backgroundImage = `url('${photo[imageNumber].url_h}')`;
    }
}

async function getLinkToUnsplashImage() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    const response = await fetch(url);
    const data = await response.json();
}

export { getLinkToFlickrImage };