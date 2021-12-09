import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./sets/Dashboard";

import {Provider} from 'react-redux';
import store from '../store';
import './App.css';

class App extends Component {
    render(){
        return ( 
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <div className="container_app">
                        <Dashboard/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
