import React from 'react';
import './NavBar.css';  

const NavBar = props =>(
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><a href="/">Static.ai</a></div>
            <div className ="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <li className="Item1"><a href="/">About</a></li>
                    <li className="Item2"><a href="/">Sports</a></li>
                    <li className="Item3"><a href="/">Team</a></li>
                    <li className="Item4"><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;