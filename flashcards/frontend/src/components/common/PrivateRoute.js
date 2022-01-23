import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { store } from "../../store";
import { useSelector } from 'react-redux';


const PrivateRoute = ({children}) => {

    const currentAuth = useSelector(state => state.auth);

    if(currentAuth.isLoading){
        return console.log("Loading...");
    }else if(!currentAuth.isAuthenticated){
        return <Navigate to="/login"/>
    }

    return children;
}

export default PrivateRoute;