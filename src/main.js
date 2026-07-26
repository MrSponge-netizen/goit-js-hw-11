import { createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";
import getImagesByQuery from "./js/pixabay-api";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

const makePromise = ( { value, delay, shouldResolve = true } ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log("making promise");
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};


form.addEventListener('submit', evt => {
  evt.preventDefault();

  const userInput = form.elements['search-text'].value.trim();;

  if (userInput == '') {
    alert('Fill please all fields');
    return false;
  }
getImagesByQuery(userInput)
  .then(images => {
    if (images.length === 0) {
      iziToast.show({
        title: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'white',
        position: 'topCenter',
        //message: 'Please choose a date in the future',
      });
      // Handle empty state (e.g., show notification to user)
    } else {


     

      console.log(`Found ${images.length} images:`, images);
      
      createGallery(images);
      
      
      // Process or render your images here
    }
  });

  console.log(userInput);
  form.reset();
  return false;
});