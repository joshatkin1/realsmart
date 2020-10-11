import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

console.log('initial state:' , store.getState());
store.subscribe(() => console.log('Updated State:' , store.getState()));

export default store;
