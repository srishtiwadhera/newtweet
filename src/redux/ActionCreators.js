import * as ActionTypes from './ActionTypes';

export const addTweet = (tweet) => ({
    type: ActionTypes.ADD_TWEET,
    payload: tweet
});

export const postTweet = (title, image) => (dispatch) => {

    const newTweet = {
        title: title,
        image: image,
        
    };
    
    return dispatch(addTweet(newTweet));
};