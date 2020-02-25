import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends React.Component {
  render(){
    return(
      <div className = "App">
        <div classname="main_Background"></div>
        <NavBar />
        <main style={{marginTop: '100px'}}>          
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}
export default App;