import { TWEETS } from '../shared/Tweets';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    tweets: TWEETS,
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TWEET:
            var tweet = action.payload;
            
            console.log("Tweet: ", tweet);
            return {...state, tweets: state.tweets.concat(tweet)};
            

        default:
          return state;
      }
    
};