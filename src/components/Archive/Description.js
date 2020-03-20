import React from 'react';  
import './Description.css';
import baller from './images/hooper.png';


const Description = props =>(
    <header className="Description2">
        <header className = "Artificial_Intelligence_in_Sports">
            Artificial Int<span className = "ellige">ellige</span>nce in Sports
            <p className = "The_world_of">
            The world of sports is abundant in such quantifiable elements, 
            making it ideal for the use of artificial intelligence. 
            It has brought positive impact in the following areas:
            </p>
            <div className = "CircleImages">
                <img src={baller} alt="Avatar"></img>
                <div className ="spacer2"></div>
                <img src={baller} alt="Avatar"></img>
                <div className ="spacer2"></div>
                <img src={baller} alt="Avatar"></img>
            </div>
            <p></p>
        </header>
    </header>
);

export default Description;