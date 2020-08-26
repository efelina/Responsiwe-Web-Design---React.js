import React from 'react';
import './AboutEmployee.css';

function AboutEmployee({name ='Unknown name', desc = "No description povided", pic = "https://via.placeholder.com/150"}) {
    let parsedPic;

    if (pic.length < 10){
        parsedPic ="https://via.placeholder.com/150"
    } else { parsedPic = pic}
    
    return (
                <div className="about-employee">                                  
                    <div className="about-employee-pic" style ={{backgroundImage:`url(${parsedPic})`}}></div>
                    <div className="about-employee-desc">
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                </div>               

    )
} 

export default AboutEmployee; 