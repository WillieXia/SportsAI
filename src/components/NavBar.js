import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Link} from '../../node_modules/react-router-dom';
import Login from '../Login';

const NavBar = () =>( 
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><a href="/">Static.ai</a></div>
            <div className ="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <Router>
                            <li className="Item1"><Link to="/Login">Login</Link></li>
                            <li className="Item2"><a href="/">About</a></li>
                            <li className="Item3"><a href="/">Team</a></li>
                            <li className="Item4"><a href="/">Contact</a></li>
                        <Route path='/Login' component={Login} />

                    </Router>
                </ul>
            </div>
        </nav>
    </header>
);
export default NavBar;
