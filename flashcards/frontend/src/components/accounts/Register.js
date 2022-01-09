import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '' 
    }

    static propTypes={
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    };

    onSubmit=e=>{
        e.preventDefault();
        const {username, email, password, password2}=this.state;
        if (password !== password2){
            this.props.createMessage({passwordNotMatch: 'Oassword do not match'});
        } else {
            const newUser={
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };

    onChange=e=>this.setState({[e.target.name]:e.target.value});

    render(){
        if (this.props.isAuthenticated){
            return <Navigate to="/"/>;
        }
        const {username, email, password, password2}=this.state;
        return(
            <div>
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text"
                            className="form-contrlor"
                            name="username"
                            onChange={this.onChange}
                            value={username}
                        />
                        <label>Email</label>
                        <input 
                            type="text"
                            className="form-contrlor"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                        <label>Password</label>
                        <input 
                            type="text"
                            className="form-contrlor"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                        />
                        <label>Confirm password</label>                                                
                        <input 
                            type="text"
                            className="form-contrlor"
                            name="password2"
                            onChange={this.onChange}
                            value={password2}
                        />                        
                    </div>
                <div>
                    <button type="submit" className="buttons">
                        Register
                    </button>
                </div>
                <p>Already have an account?<Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register, createMessage})(Register);