import * as ActionTypes from './ActionTypes';
import axios from 'axios'
export const addTweet = (tweet) => ({
    type: ActionTypes.ADD_TWEET,
    payload: tweet
});

export const postTweet = (title, image) => (dispatch) => {

    const newTweet = {
        title: title,
        image: image,
        
    };
    
    return axios.post('https://postb.in/', newTweet)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addTweet(response)))
    .catch(error =>  { console.log('post tweet', error.message); alert('Your tweet could not be posted\nError: '+error.message); });
};
