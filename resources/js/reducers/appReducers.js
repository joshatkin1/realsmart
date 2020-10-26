import {
    NAVIGATE_APP,
    FETCH_APP_NUMBERS,
} from '../actions/actionTypes.js';

const initialState = {
    appPage:"dashboard",
    numbers:[],
}

export default function(state = initialState, action){
    switch(action.type){
        case 'NAVIGATE_APP':
            return {
                ...state,
                appPage : action.payload
            };
            break;
        case 'FETCH_APP_NUMBERS':
            return {
                ...state,
                numbers : action.payload
            };
            break;
        case 'SWAP_NUMBER_USAGE_VALUE':
            return {
                ...state,
                numbers : state.numbers.map((num)=>{
                    if(num.number === action.payload){
                        if(num.used === 0){var newNum = 1;}else{var newNum = 0;}
                        num.used = newNum;
                    }
                    return num;
                })
            };
            break;
        default:
            return state;
    }
}
