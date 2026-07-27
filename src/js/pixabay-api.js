import axios from 'axios';

export default function getImagesByQuery(query){
    
   return axios.get( 'https://pixabay.com/api/', {
    params: {
      key: '56852680-f175d4910a2a6d37927d6bf40',
      q: query, // Pass the function's query parameter here
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }}
)

.then(response => {
    return response.data})
	.catch(error => {

console.error('Failed to request:', error);
    
    
    throw error;

    })
    
}

