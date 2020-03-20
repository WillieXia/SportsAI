import React from 'react';  
import './Catch.css';
import baller from './images/hooper.png';

const Catch = props =>(
    <header className="Catch">
        {/*Information part*/}
        <section className = "leftSection">
            <header className = "Title1">
                Revolutionizing the
            </header>
            <header className = "Title2" >
                <span className = "SportsWord">Sports</span> Industry
            </header>            
            <p className = "Description">
                We teach machines to see and solve hard <br/>problems across the sports industry.
            </p>
        </section>
        <div className ="spacer1"></div>
        <section className = "rightSection">
            <img className = "ballerimage"  src={baller} />
        </section>
    </header>
);

export default Catch;