import axios from 'axios';

import { GET_FAILURES, GET_FAILURE_BY_ID } from './types';

//get all failures
export const getFailures = () => dispatch => {
    axios.get('/failures')
        .then(res => {
            dispatch({
                type: GET_FAILURES,
                payload: res.data

            })
        })
        .catch(err =>
            dispatch({
              type: GET_FAILURES,
              payload: null
            })
        );
}

//add failure
export const addFailure = (failure, history) => dispatch => {
    axios.post('/failures', failure)
        .then(res => history.push('/'))
        .catch(err =>
           console.log(err)
        );
}

//update failure
export const updateFailure = (id, failure, history) => dispatch => {
    axios.put(`/failures/${id}`, failure)
        .then(res => history.push('/'))
        .catch(err => 
            console.log(err)
        );
}

export const getFailureById = id => dispatch => {
    axios.get(`/failures/${id}`)
        .then(res => {
            dispatch({
                type: GET_FAILURE_BY_ID,
                payload: res.data

            })
        })
        .catch(err =>
            dispatch({
            type: GET_FAILURE_BY_ID,
            payload: null
            })
        );
}