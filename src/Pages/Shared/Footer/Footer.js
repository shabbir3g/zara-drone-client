import React from 'react';
import logo from '../../../images/logo.png';
import inst1 from '../../../images/instagram/i1.webp';
import inst2 from '../../../images/instagram/i2.webp';
import inst3 from '../../../images/instagram/i3.webp';
import inst4 from '../../../images/instagram/i4.webp';
import inst5 from '../../../images/instagram/i5.webp';
import inst6 from '../../../images/instagram/i6.webp';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="mt-5">
                <div className="zara-drone-footer">
                    <div className="container zara-drone-p-60-60">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                        <img className="zara-drone-footer-logo" src={logo} alt="Kinsley" />
                        <div className="zara-drone-footer-about">Zara Drone is a powerful flagship camera drone equipped with a 4/3 CMOS Hasselblad camera to facilitate professional-level imaging. It also offers omnidirectional obstacle sensing for a smooth flight experience</div>
                        <div className="zara-drone-footer-social">
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                        <h4>Our Company</h4>
                        <ul className="zara-drone-footer-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Rooms</Link></li>
                            <li><Link to="/">Our services</Link></li>
                            <li><Link to="/">Contact info</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-6 col-lg-2">
                        <h4>Zara Drone</h4>
                        <ul className="zara-drone-footer-menu">
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/">Help center</Link></li>
                            <li><Link to="/">Work with us</Link></li>
                            <li><Link to="/">Job Services</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                        </div>


                        <div className="col-md-6 col-lg-4">
                        <h4>Instagram</h4>
                        <div className="footer-insta">
                            <Link to="/"><img src={inst1} alt="insta"/></Link>
                            <Link to="/"><img src={inst2} alt="insta"/></Link>
                            <Link to="/"><img src={inst3} alt="insta"/></Link>
                            <Link to="/"><img src={inst4} alt="insta"/></Link>
                            <Link to="/"><img src={inst5} alt="insta"/></Link>
                            <Link to="/"><img src={inst6} alt="insta"/></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="knsl-copyright">
                    <div className="container">
                        <div className="copy-text">
                        <div> &copy; Zara Drone 2021. All Rights Reserved.</div>
                        </div>
                        <div className="copy-menu">
                        <div>Design by: <a href="http://facebook.com/shabbir3g">Md. Mostafizur Rahman</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
};

export default Footer;