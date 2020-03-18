import React from 'react';  
import './Description.css';
import baller from './images/hooper.png';


const Description = props =>(
    <header className="Description2">
        <section>
            <img className = "ballerimage"  src={baller} />
        </section>
    </header>
);

export default Description;