import { GET_SETS } from '../actions/types.js';

const initialState = {
    sets: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SETS:
            return {
                ...state,
                sets: action.payload
            };
        default:
            return state;
    }
}
