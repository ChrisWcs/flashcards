import { FLIP_CARD, FORWARD_CARD, BACKWARD_CARD, CHANGE_VIEW } from '../actions/actions';
import initialState from './initialState';

import spanishList from '../json/spanish';

const reducer = (state = initialState(spanishList), action) => {
    switch(action.type){
        case FLIP_CARD:
            return {
                ...state,
                list: [
                    ...state.list.slice(0, action.index), 
                    {
                        ...state.list[action.index],
                        flipped: !(state.list[action.index].flipped)
                    },
                    ...state.list.slice(action.index + 1)
                ]
            };

        case FORWARD_CARD:
            return {
                ...state,
                cardIndex: state.cardIndex + 1 === state.list.length ? 0 : state.cardIndex + 1,
            };

        case BACKWARD_CARD:
            return {
                ...state,
                cardIndex: state.cardIndex - 1 === -1 ? state.list.length - 1 : state.cardIndex - 1,
            };

        case CHANGE_VIEW:
            return {
                ...state,
                view: state.view === "ALL" ? "STUDY" : "ALL",
            };

        default:
            return state;
    }
};

export default reducer;