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
import AppController from "./controllers/AppController.js";

//IMPORT PAGES BELOW

export default function SiteRouting() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Provider store={store}><AppController/></Provider>
                </Route>

                <Route exact path="/home">
                    <Provider store={store}><AppController/></Provider>
                </Route>

                <Route exact path="/app">
                    <Provider store={store}><AppController/></Provider>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <SiteRouting />,
    document.getElementById('root')
);
