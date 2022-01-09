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
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <ul className="linkclass">
                <span className="sdfds">
                    <strong>{user?`Welcome ${user.username}`:""}</strong>
                </span>
                <li className="sdfs">
                    <button onClick={this.props.logout} className="btncl">
                        Logout
                    </button>
                </li>
            </ul>
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
                <a className="links" href="#">Fleshcards</a>
                <div>
                    {isAuthenticated?authLinks:guestLink}
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);