import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth"; 
import { Navigate } from "react-router-dom";

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit=e=>{
        e.preventDefault();
        console.log("onSubmit")
        this.props.login(this.state.username, this.state.password);
    };

    onChange=e=>this.setState({[e.target.name]:e.target.value});

    render(){
        console.log("render")
        if (this.props.isAuthenticated){
            return <Navigate to="/" />;
        }
        const {username, password}=this.state;
        return(
            <div>
                <h2>Login</h2>
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
                        <label>Password</label>
                        <input 
                            type="text"
                            className="form-contrlor"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                        />                        
                    </div>
                    <div>
                        <button type="submit" className="buttons">
                            Login
                        </button>
                    </div>
                    <p>Don't have an account?<Link to="/register">Register</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    isAuthenticated: state.auth.isAuthenticated
});

// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
export default connect(mapStateToProps,{login})(Login);