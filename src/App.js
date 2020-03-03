import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import imgone from './squat-pic2.jpg';

class App extends React.Component {
  render(){
    return(
      <div className = "App">
        <img className = "backgroundSquat"  src={imgone} />
        <NavBar />
      </div>
    );
  }
}
export default App;