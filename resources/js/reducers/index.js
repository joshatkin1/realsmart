import {combineReducers} from 'redux';
import appReducers from './appReducers.js';
import userReducers from './userReducers.js';

export default combineReducers({
    app: appReducers,
    user: userReducers,
});
