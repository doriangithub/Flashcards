import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./sets/Dashboard";

import {Provider} from 'react-redux';
import store from '../store';
import './App.css';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Alerts from "./layout/Alerts";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

class App extends Component {
    render(){
        return ( 
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Fragment>
                        <Header/>
                        <Alerts/>
                        <div className="container_app">
                            <Dashboard/>
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
