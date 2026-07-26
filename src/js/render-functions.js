// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm'; //
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // Use the 'title' attribute text for captions
    captionDelay: 250, // Delay caption presentation by 250ms
    loop: true, // Enable continuous looping through images
    navText: ['←', '→'], // Custom text arrows for desktop navigation
  });
export function createGallery(images) {
  
  var docFrag = document.createDocumentFragment();

  images.forEach(function ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    console.log('webformatURL' + webformatURL);
    const li = document.createElement('li');
    li.className = 'gallery-item';

    const link = document.createElement('a');
    link.className = 'gallery-link';
    link.href = largeImageURL;
    link.ariaDisabled = true;

    var img = document.createElement('img');

    img.className = 'gallery-image';
    img.src = webformatURL;
    img.alt = name;

    var likes_ = document.createElement('p');
    likes_.textContent = likes;
     var tags_ = document.createElement('p');
    tags_.textContent = tags;
    var views_ = document.createElement('p');
    views_.textContent = views;
     var comments_ = document.createElement('p');
    comments_.textContent = comments;
     var downloads_ = document.createElement('p');
    downloads_.textContent = downloads;
    //  img.setAttribute('datasource', largeImageURL);

    img.dataset.source = largeImageURL;

    link.appendChild(img);

    li.appendChild(link);
    docFrag.appendChild(li);
  });

  gallery.appendChild(docFrag);

 lightbox.refresh();
 
}

export function clearGallery() {
  gallery.innerHTML = '';
  
}
const loader = document.querySelector('.loader');

// Show loader
export function showLoader() {
  loader.classList.add('is-active');
}

// Hide loader
export function hideLoader() {
  loader.classList.remove('is-active');
}
