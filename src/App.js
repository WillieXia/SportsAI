import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Catch from './components/Catch';

class App extends React.Component {
  render(){
    return(
      <div className = "App">
        <div className = "nbar">
        <NavBar />
        </div>
        <div className = "Catch">
          <Catch />
        </div>
      </div>
    );
  }
}
export default App;