import React from 'react';
import thanks from '../../images/thanks.png'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const ThankYou = () => {
    return (
        <div className="normal-page">
            <Navigation></Navigation>
            <div style={{height: '60vh'}} className="login-form margin-top-200 mx-auto"> 
                <div className="text-center"> 
                    <img className="img-fluid" src={thanks} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ThankYou;