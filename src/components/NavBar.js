import React from 'react';
import {Text, StyleSheet} from 'react-native';
import './NavBar.css';

const NavBar = props =>(
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><a href="/"><Text style={{fontWeight: 'bold'}}>AI</Text> Sports Analytics</a></div>
            <div className ="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <li className="Item1"><a href="/">The App</a></li>
                    <li className="Item2"><a href="/"></a>Login</li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;