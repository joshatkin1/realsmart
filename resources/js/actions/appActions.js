import {
    FETCH_SESSION_DATA,
} from './actionTypes.js';

export const fetchSessionData = () => dispatch => {
    axios.get('/resources/app/data/session/all')
        .then( response => dispatch({
            type: FETCH_SESSION_DATA,
            payload: response.data
        }))
        .catch( errors => {
            console.log(errors);
        })
}
