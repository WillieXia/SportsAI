import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Redirect } from '../node_modules/react-router-dom';

import baller from './components/images/hooper.png';
import swimmer from './components/images/swimmer.JPG';
import baller3d from './components/images/baller.JPG';
import runner from './components/images/runner.JPG';
import train from './components/images/3d_analysis.png';
import loginimage from './components/images/loginimage2.jpeg';
import facebook from './components/images/facebook.png';
import google from './components/images/google1.png';
import Radium, { StyleRoot } from '../node_modules/radium';
import { bounce } from '../node_modules/react-animations';
 
// import { slideInRight } from '../node_modules/react-animations/lib/slide-in-right';
// const styles = {
//   bounce: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(bounce, 'bounce')
//   }
// }



export class App extends React.Component {
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
        <Route path='/Account' component={Account}/>
        <Route path='/Login' component={Login} />
        <Route path='/About' component={About}/>
        <Route path='/Team' component={Team} />
        <Route path='/Contact' component={Contact}/>       
      </Router>
    );
  }
}

const Home = () => (
  <div className="main1">
    <meta name="viewport" className = "meta" content="width=device-width, maximum-scale=0" />
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
          <img src={baller3d} alt="Avatar"></img>
          <div className="spacer2"></div>
          <img src={swimmer} alt="Avatar"></img>
          <div className="spacer2"></div>
          <img src={runner} alt="Avatar"></img>
        </div>
        <p></p>
      </div>
    </section>
    <section className="EndSection" id = "EndSection">
      <section className="leftSection2">
        <p className="See_it_in_action">
          See it in action
              </p>
        <header className="How_it_Works">
          <span className="How_it"> How it</span> Works
              </header>
        <p className="Description3">
          We use machine learning to track muscle form movements in order to
          give accurate feedback in optimizing form and muscle involvement.
          
              </p>
      </section>
      <section className="RightSection2">
        <img className="AI-Photo" src={train} />
      </section>
    </section>
  </div>
);

const Login = () => (
  <div className="loginpage">  
    <header className="Catch3">
       <meta name="viewport" className = "meta" content="width=device-width, maximum-scale=0" />

      <section className="leftSection4">
          <img className="loginimg" src={loginimage} />
      </section>
      <section className="LoginRightSection">
          <LoginBox/>
      </section>
    </header>
  </div>
);

const About = () => (
  <div className="main">
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

const Account = () => (
  <div className="">
    ACCOUNT ACCOUNT ACCOUNT
  </div>
);

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.result = {
      username: "",
      password: ""
    }

    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  submitLogin() {
    fetch('http://127.0.0.1:8000/api/',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "First": this.state.username,
        "Last": this.state.password
      })
    })
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/?format=json');
      this.result.username = await res.json();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <section className="loginboxcontainer">
        <div className="logintitle">Login to Static.ai</div>
        <div className="loginbox">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              value={ this.state.username }
              onChange={ this.handleChange }
              placeholder="  Enter your username"/>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              value={ this.state.password }
              onChange={ this.handleChange }   
              placeholder="  Enter your password"/>
          </div>

          <div className="input-group">
          	<button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>LOG IN</button>
                <div className="CircleImages2">
                  <button type="button" className="facebook-google-btn" onClick={this.submitLogin.bind(this)}>
                    <img src={facebook} alt="Avatar" class="center1"></img>
                  </button>

                  <button type="button" className="facebook-google-btn" onClick={this.submitLogin.bind(this)}>
                    <img src={google} alt="Avatar" class="center1"></img>
                  </button>
                </div>
          </div>
        </div>
      </section>  
    );
  }

}
export default App;
