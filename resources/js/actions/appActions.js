import {
    NAVIGATE_APP,
    FETCH_APP_NUMBERS,
    SWAP_NUMBER_USAGE_VALUE,
} from './actionTypes.js';

export const navigateAppPage = (newPage) => dispatch => {
    dispatch({
        type: NAVIGATE_APP,
        payload:newPage,
    });
}

export const getNumberList = () => dispatch => {
    axios.get('/resources/app/data/numbers/all')
        .then( response => dispatch({
            type: FETCH_APP_NUMBERS,
            payload: response.data
        }))
        .catch( errors => {
            console.log(errors);
        })
}

export const swapIntegerUsage = (number) => dispatch => {
   console.log('number is',number);
    number = parseInt(number);
   var data = {
       'number': number
   };
    axios.post('/resources/app/data/number/swap-usage',data)
        .then( response => {
            console.log(response.data);
            dispatch({
                type: SWAP_NUMBER_USAGE_VALUE,
                payload: number
            })
        })
        .catch( errors => {
            console.log(errors);
        })
}

