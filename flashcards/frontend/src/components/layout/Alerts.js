import React, { Component, Fragment } from "react";
import { withAlert } from 'react-alert';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if (error !== prevProps.error){
            if (error.msg.name) alert.error (`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error (`Name: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error (`Name: ${error.msg.message.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join())
        }
        if (message !== prevProps.message){
            if (message.deleteSet) alert.success (message.deleteSet);
            if (message.addSet) alert.success (message.addSet);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }

    render(){
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));