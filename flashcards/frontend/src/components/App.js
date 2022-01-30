import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./sets/Dashboard";
import Home from "./sets/Home";
import Create from "./sets/Create/Create";

import {Provider} from 'react-redux';
import store from '../store';
import './App.css';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Alerts from "./layout/Alerts";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "./accounts/Login";
import Register from "./accounts/Register";

import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// optional configuration
const alertOptions = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render(){
        return ( 
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Router>
                            <Fragment>
                                <Header/>
                                <Alerts/>
                                <div className="container_app">
                                    <Routes>
                                        <Route exact path="/" element={
                                            <PrivateRoute>
                                                <Home />
                                            </PrivateRoute>
                                        } />
                                        <Route exact path="register" element={<Register />}/>
                                        <Route exact path="login" element={<Login />}/>
                                        <Route exact path="create" element={<Create />}/>
                                    </Routes>
                                </div>
                            </Fragment>
                        </Router>
                    </AlertProvider>
                </DndProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// {/* <Route exact path="/" element={
//     <PrivateRoute>
//         <Dashboard />
//     </PrivateRoute>
// } /> */}