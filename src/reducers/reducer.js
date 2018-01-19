import initialState from './initialState';

// Lets import JSON
import spanishList from '../json/spanish';

const reducer = (state = initialState(spanishList), action) => {
    switch(action.type){
        case:
            return {

            }
        default:
            return state;
    }
};

export default reducer;