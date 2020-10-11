import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import  {Provider} from 'react-redux';
import store from './store.js';
import { v4 } from 'uuid';
import AppComponent from "./controllers/AppController";

//IMPORT PAGES BELOW

export default function SiteRouting() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/app">
                    <Provider store={store}><AppComponent/></Provider>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <SiteRouting />,
    document.getElementById('root')
);
