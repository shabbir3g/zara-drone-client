import React from 'react';
import Products from '../Home/Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    return (
        <div className="normal-page">
             <Navigation></Navigation>
            <div className="margin-top-200 mb-5">
                <Products Products page={'explore'}></Products>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;