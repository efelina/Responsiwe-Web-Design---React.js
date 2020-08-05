import React from 'react';
import './Nav.css';


function Nav() {
    return (
    <nav>
        <div className="container">
            <a href=""> moja firma </a>
            <div className="nav-links">
                <a href="#about"> o nas </a>
                <a href="#offer"> oferta </a>
                <a href="#contact" className="contact-link"> kontakt </a>
            </div>
            <div className="mobile-nav-links" role="custom-dropdown">
                <input type="checkbox" id="button"/>
                <label for="button" onclick></label>                
                <ul>
                    <li><a href="#about"> o nas </a></li>
                    <li><a href="#offer"> oferta </a></li>
                    <li><a href="#contact" className="contact-link"> kontakt </a></li>                                        
                </ul>
            </div >
        </div>
    </nav>
    )
} 

export default Nav; 