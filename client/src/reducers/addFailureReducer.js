import { ADD_FAILURE } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_FAILURE:
            return action.payload
        default:
            return state;
    }
}