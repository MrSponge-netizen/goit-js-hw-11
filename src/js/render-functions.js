// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm'; //
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'title', // Use the 'title' attribute text for captions
    captionDelay: 250, // Delay caption presentation by 250ms
    loop: true, // Enable continuous looping through images
    navText: ['←', '→'], // Custom text arrows for desktop navigation
  });
export function createGallery(images) {
  showLoader();
  clearGallery();
  var docFrag = document.createDocumentFragment();

  images.forEach(function ({ previewURL, largeImageURL, name }) {
    console.log('previewURL' + previewURL);
    const li = document.createElement('li');
    li.className = 'gallery-item';

    const link = document.createElement('a');
    link.className = 'gallery-link';
    link.href = largeImageURL;
    link.ariaDisabled = true;

    var img = document.createElement('img');

    img.className = 'gallery-image';
    img.src = previewURL;
    img.alt = name;
    //  img.setAttribute('datasource', largeImageURL);

    img.dataset.source = largeImageURL;

    link.appendChild(img);

    li.appendChild(link);
    docFrag.appendChild(li);
  });

  gallery.appendChild(docFrag);

 lightbox.refresh();
 hideLoader();
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
