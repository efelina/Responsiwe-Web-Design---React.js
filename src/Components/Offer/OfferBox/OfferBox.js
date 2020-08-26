import React from 'react';
import './OfferBox.css';


function OfferBox({OfferName, isNew = false}) {
    return (
    <div className="box"> 
        {
            isNew && <div className="point"></div>
        }
        <div className="text"> 
            <p>{OfferName}</p>
            {
                isNew && <span>(nowość)</span>
            }            
        </div>
    </div>
)
} 

export default OfferBox; 