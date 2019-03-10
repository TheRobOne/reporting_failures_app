import { GET_FAILURES, GET_FAILURE_BY_ID } from '../actions/types';

const initialState = {
    failures: [],
    failureById: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FAILURES:
            return {
                ...state,
                failures: action.payload
            }
        case GET_FAILURE_BY_ID:
            return {
                ...state,
                failureById: action.payload
                }
        default:
            return state;
    }
}