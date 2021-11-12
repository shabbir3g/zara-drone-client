import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            
            <Products page={'home'}></Products>
            <Subscribe></Subscribe>
            <Reviews></Reviews>
           

            <Footer></Footer>
        </div>
    );
};

export default Home;