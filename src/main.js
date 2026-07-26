import { createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";
import getImagesByQuery from "./js/pixabay-api";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');




form.addEventListener('submit', evt => {
  evt.preventDefault();

  const userInput = form.elements['search-text'].value.trim();;

  if (userInput == '') {
    iziToast.show({
        title: 'Fill please all fields',
        color: 'white',
        position: 'topCenter',
        //message: 'Please choose a date in the future',
      });
    return false;
  }

   showLoader();
    clearGallery();
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
  }
  )
  .catch(error => {

console.error('Failed to render gallery:', error);
    
   

    })
  .finally(hideLoader())

  console.log(userInput);
  form.reset();
  return false;
});