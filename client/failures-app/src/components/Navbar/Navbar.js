import React from 'react';
import './Navbar.css';

const navbar = () => (
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#preview">Podgląd</a>
        <a className="nav-right" href="#preview">Logowanie</a>
        <a className="nav-right" href="#preview">Rejestracja</a>
    </div>
)

export default navbar;