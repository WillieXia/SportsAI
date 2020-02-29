import React from 'react';
import './NavBar.css';

const NavBar = props =>(
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><a href="/">AI Sports Analytics</a></div>
            <div className ="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <li className="Item1"><a href="/">The App</a></li>
                    <li className="Item2"><a href="/">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;