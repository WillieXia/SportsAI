import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Redirect } from '../node_modules/react-router-dom';

import baller from './components/images/hooper.png';
import Radium, { StyleRoot } from '../node_modules/radium';
import { bounce } from '../node_modules/react-animations';
import { slideInRight } from '../node_modules/react-animations/lib/slide-in-right';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render(){
    return (
      <Router>
        <NavBar/>
        <Redirect from="/" to="Home" />
        <Route path='/Home' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/About' component={About}/>
        <Route path='/Team' component={Team} />
        <Route path='/Contact' component={Contact}/>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <meta name="viewport" content="width=device-width, maximum-scale=0" />
    <section className="CatchSection" id = "CatchSection">
      <header className="Catch">
        {/*Information part*/}
        <section className="leftSection">
          <header className="Title1">
            Revolutionizing the
                </header>
          <header className="Title2" >
            <span className="SportsWord">Sports</span> Industry
                </header>
          <p className="Description">
            We teach machines to see and solve hard <br />problems across the sports industry.
                </p>
        </section>
        <section className="rightSection">
          <img className="ballerimage" src={baller} />
        </section>
      </header>
    </section>
    <section className="Description2" id = "Description">
      <div className="Artificial_Intelligence_in_Sports">
        <header>Artificial Int<span className="ellige">ellige</span>nce in Sports</header>
        <p className="The_world_of">
          The world of sports is abundant in such quantifiable elements,
          making it ideal for the use of artificial intelligence.
          It has brought positive impact in the following areas:
              </p>
        <div className="CircleImages">
          <img src={baller} alt="Avatar"></img>
          <div className="spacer2"></div>
          <img src={baller} alt="Avatar"></img>
          <div className="spacer2"></div>
          <img src={baller} alt="Avatar"></img>
        </div>
        <p></p>
      </div>
    </section>
    <section className="EndSection" id = "EndSection">
      <section className="leftSection">
        <p className="See_it_in_action">
          See it in action
              </p>
        <header className="How_it_Works">
          <span className="How_it"> How it</span> Works
              </header>
        <p className="Description3">
          DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
          DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
          DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
          DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
              </p>
      </section>
      <section className="RightSection">
        <img className="AI-Photo" src={baller} />
      </section>
    </section>
  </div>
);

const Login = () => (
  <div className="Login-Box">
    <meta name="viewport" content="width=device-width, maximum-scale=0" />
    <section className="nbar">
      <LoginBox/>
    </section>
  </div>
);

const About = () => (
  <div className=" ">
    ABOUT ABOUT ABOUT
  </div>
);

const Team = () => (
  <div className="">
    TEAM TEAM TEAM
  </div>
);


const Contact = () => (
  <div className="">
    CONTACT CONTACT CONTACT
  </div>
);

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="login-box">
        <div className="login-title">
          Login
        </div>
        <div className="box">

          <div className="username-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className=login-input"
              placeholder="Password"/>
          </div>
          
          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-button"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
          </div>
        </div>  
    );
  }
}
export default App;
