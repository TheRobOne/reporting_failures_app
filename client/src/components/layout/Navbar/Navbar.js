import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import './Navbar.css';

class Navbar extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
      }
    
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const basicUserLinks = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-failure">Dodaj</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item nav-right">
                        <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                        >
                        Logout
                        </a>
                    </li>
                </ul>
            </div>
        );

        const adminUserLinks = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-failure">Dodaj</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/plots">Wykresy</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item nav-right">
                        <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                        >
                        Logout
                        </a>
                    </li>
                </ul>
            </div>
        );

        const guestLinks = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item nav-right">
                        <Link className="nav-link" to="/login">Logowanie</Link>
                    </li>
                    <li className="nav-item nav-right">
                        <Link className="nav-link" to="/register">Rejestracja</Link>
                    </li>
                </ul>
            </div>
        );

        let authLinks = '';

        if(user.role === 'admin'){
            authLinks = adminUserLinks;
        } else {
            authLinks = basicUserLinks;
        }

        return(
            <nav className="navbar navbar-expand-md topnav">
                <Link className="navbar-brand active" to="/">Podgląd</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isAuthenticated ? authLinks : guestLinks}
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, { logoutUser })(
    Navbar
  );