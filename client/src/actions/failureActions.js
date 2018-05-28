import axios from 'axios';

import { GET_FAILURES } from './types';

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
    axios 
        .post('/failures', failure)
        .then(res => history.push('/'))
        .catch(err =>
           console.log('blad')
        );
}
