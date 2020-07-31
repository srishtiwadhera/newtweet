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
    
    return axios.post('https://postb.in/b/1596206831099-5356586796697', newTweet)
    .then(() => {
        dispatch(addTweet(newTweet))
    });
};
