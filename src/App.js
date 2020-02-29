import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Background from './squat-pic.jpg';

class App extends React.Component {
  render(){
    return(
      <div className = "App">
        <div style={{  
          backgroundImage: Background,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: "1080px",
          width: "1920px"
        }}>
        </div>
        <img src="./squat-pic.jpg"/>
        <NavBar />
        <main style={{marginTop: '100px'}}>          
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}
export default App;