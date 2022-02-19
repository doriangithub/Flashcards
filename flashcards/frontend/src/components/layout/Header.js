import React, {Component} from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render(){
        console.log("render Header")
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <div className="linkclass">
                <span className="welcome__username">
                    {user?`Welcome ${user.username}`:""}
                </span> 
                <button onClick={this.props.logout} className="button__logout">
                    Logout
                </button>
            </div>
        );

        const guestLink = (
            <ul className="sdfsd">
                <li className="gfk">
                    <Link to="/register" className="sdfds">
                        Register
                    </Link>
                </li>
                <li className="gfk">
                    <Link to="/login" className="sdfds">
                        Login
                    </Link>
                </li>                
            </ul>
        );

        return(
            <div className="header">
                <div className="container">
                    <Link to='/' className='logo' >
                        Fleshcards
                    </Link>     
                    <div className="menu block__top__menu">
                        <ul className="li__menu" id="menu">
                            <li className="menu_selected">
                                <Link to='/' className='nav-links'>
                                    Home
                                </Link>
                            </li>
                            <li>Flashcards</li>
                            <li>
                                <Link to='/create' className="nav-link">
                                    Create
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="login block__login">{isAuthenticated?authLinks:guestLink}</div>                    
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);