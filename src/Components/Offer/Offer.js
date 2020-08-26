import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox/OfferBox';

const offerBoxes = [
    {
        name:"Usługa 1",
        isNew: true
    },

    {
        name:"Usługa 2",
        isNew: false
    },

    {
        name:"Usługa 3",
        isNew: true
    },

    {
        name:"Usługa 4",
        isNew: false
    },

    {
        name:"Usługa 5",
        isNew: false
    },

    {
        name:"Usługa 6",
        isNew: false
    },

    {
        name:"Usługa 7",
        isNew: false
    },

    {
        name:"Usługa 8",
        isNew: false
    },

    {
        name:"Usługa 9",
        isNew: false
    }

]

function Offer() {
    return (
<section id="offer" className="offer">
            <div className="container">
                <h1>Czym zajmuje się nasza firma? </h1>
                <div className="centering-box">
                    <div className="box-container">
                    {
                        offerBoxes.map(offerBox => {
                          return <OfferBox OfferName={offerBox.name} isNew={offerBox.isNew}/>  
                        })
                    }                       
                    </div>
                </div>

            </div>           
</section>
)
} 

export default Offer; 