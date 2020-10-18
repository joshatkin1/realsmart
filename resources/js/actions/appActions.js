import {
    NAVIGATE_APP,
} from './actionTypes.js';

export const navigateAppPage = (newPage) => dispatch => {
    dispatch({
        type: NAVIGATE_APP,
        payload:newPage,
    });
}

