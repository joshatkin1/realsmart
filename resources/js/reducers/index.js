import {combineReducers} from 'redux';
import appReducers from './appReducers.js';

export default combineReducers({
    app: appReducers,
});
