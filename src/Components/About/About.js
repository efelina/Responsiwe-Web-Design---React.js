import React from 'react';
import './About.css';


function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h1> Nasi specjaliści </h1>
                <div className="about-employee">                                  
                    <div className="about-employee-pic"></div>
                    <div className="about-employee-desc">
                        <h2>Imię Nazwisko [dział]</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a 
                          non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor 
                          elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                        </p>
                    </div>
                </div>                
                <div className="about-employee">                                  
                    <div className="about-employee-pic"></div>
                    <div className="about-employee-desc">
                        <h2>Imię Nazwisko [dział]</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a 
                          non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor 
                          elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                        </p>
                    </div>                
                </div>
            </div>
        </section>
    )
} 

export default About; 