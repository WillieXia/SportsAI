import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import baller from './components/images/hooper.png';
import styled, {keyframes} from '../node_modules/styled-components';
import {bounce} from '../node_modules/react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, maximum-scale=0" />
        <section className="nbar">
          <NavBar />
        </section>
        <section className="CatchSection">
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
        <header className="Description2">
          <header className="Artificial_Intelligence_in_Sports">
            Artificial Int<span className="ellige">ellige</span>nce in Sports
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
          </header>
        </header>
        <section className="EndSection">
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
          <section className ="RightSection">
            <img className = "AI-Photo" src = {baller}/>
          </section>
        </section>
      </div>
    );
  }
}
export default App;