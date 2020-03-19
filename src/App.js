import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Catch from './components/Catch';
import Description from './components/Description';

class App extends React.Component {
  render(){
    return(
      <div className = "App">
        <meta name="viewport" content="width=device-width, maximum-scale=0"/>
        <section className = "nbar">
          <NavBar />
        </section>
        <section className = "CatchSection">
          <Catch />
        </section>
        <section className = "Desc">
          <Description />
        </section>
        <section>
          <Catch />
        </section>
      </div>
    );
  }
}
export default App;