import React from 'react';
import './Offer.css';


function Offer() {
    return (
<section id="offer" className="offer">
            <div className="container">
                <h1>Czym zajmuje się nasza firma? </h1>
                <div className="centering-box">
                    <div className="box-container">
                        <div className="box"> 
                            <div className="point"></div>
                            <div className="text"> 
                                <p> Usługa 1 </p>
                                <span>(nowość)</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="text"> Usługa 2 </div>
                        </div>
                        <div className="box">
                            <div className="text"> Usługa 3</div>
                        </div>
                        <div className="box">
                            <div className="text"> Usługa 4</div>
                        </div>
                        <div className="box">
                            <div className="text"> Usługa 5</div>
                        </div>
                        <div className="box">
                            <div className="text"> Usługa 6</div>
                        </div>
                    </div>
                </div>

            </div>           
</section>
)
} 

export default Offer; 