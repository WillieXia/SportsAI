import React, { Component } from 'react';
import './NavBar.css';
import { Link } from '../../node_modules/react-router-dom';

const NavBar = () => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><Link to="/Home">Static.ai</Link></div>
            <div className="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    <li className="Item1"><Link to="/Login">Login</Link></li>
                    <li className="Item2"><Link to="/About">About</Link></li>
                    <li className="Item3"><Link to="/Team">Team</Link></li>
                    <li className="Item4"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default NavBar;
