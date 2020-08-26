import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox/OfferBox';


function Offer() {
    return (
<section id="offer" className="offer">
            <div className="container">
                <h1>Czym zajmuje się nasza firma? </h1>
                <div className="centering-box">
                    <div className="box-container">
                        <OfferBox OfferName={`Usługa 1`} isNew={true} />                       
                    </div>
                </div>

            </div>           
</section>
)
} 

export default Offer; 