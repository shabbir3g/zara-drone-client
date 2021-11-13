import React from 'react';
import thanks from '../../images/thanks.png'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const ThankYou = () => {
    return (
        <div className="normal-page mt-5">
            <Navigation></Navigation>
            <div className=" mx-auto"> 
                <div className="text-center"> 
                    <img className="img-fluid mt-5" src={thanks} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ThankYou;