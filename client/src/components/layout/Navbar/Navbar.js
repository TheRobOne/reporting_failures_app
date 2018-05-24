import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = () => (
    <nav className="navbar navbar-expand-md topnav">
        <Link className="navbar-brand active" to="/add-failure">Dodaj</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#preview">Podgląd</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav-right">
                    <a className="nav-link" href="#login">Logowanie</a>
                </li>
                <li className="nav-item nav-right">
                    <a className="nav-link" href="#register">Rejestracja</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default navbar;