import React from 'react';
import './AboutEmployee.css';

function AboutEmployee({name, desc, pic}) {
    
    return (
                <div className="about-employee">                                  
                    <div className="about-employee-pic" style ={{backgroundImage:`url(${pic})`}}></div>
                    <div className="about-employee-desc">
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                </div>               

    )
} 

export default AboutEmployee; 