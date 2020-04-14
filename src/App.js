import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Redirect } from '../node_modules/react-router-dom';

import baller from './components/images/hooper.png';
import swimmer from './components/images/swimmer.JPG';
import baller3d from './components/images/baller.JPG';
import runner from './components/images/runner.JPG';
import train from './components/images/3d_analysis.png';
import loginimage from './components/images/Ferb.png';
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
  <section className="CatchSection3">
    <header className="Catch3">
      <section className="leftSection3">
        <img className="loginimage" src={loginimage} />
      </section>
      <section className="RightSection3">
        <div className="root-container3"> 
            <meta name="viewport" content="width=device-width, maximum-scale=0" />
            <section className="nbar">
              <LoginBox/>
            </section>
        </div>
      </section>
    </header>
  </section>
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
      <div className="inner-container">
        <div className="header">
          Sign Up With
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              value={ this.state.username }
              onChange={ this.handleChange }
              placeholder="Username"/>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              value={ this.state.password }
              onChange={ this.handleChange }   
              placeholder="Password"/>
          </div>

          <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
          <section className="RightSection">
            <button type="button" className="facebook-google-btn" onClick={this.submitLogin.bind(this)}>FB</button>
            <button type="button" className="facebook-google-btn" onClick={this.submitLogin.bind(this)}>Google</button>
          </section>

          </div>
        </div>  
    );
  }

}
export default App;
