import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../images/1.jpg';
import slide2 from '../../../images/2.jpg';
import slide3 from '../../../images/3.jpg';
import slide4 from '../../../images/4.jpg';
import slide5 from '../../../images/5.jpg';


const Banner = () => {
    return (
        <div>
            <div className="home-slider"> 
                <Carousel fade>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide1} alt="First slide" />
                            <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Zara Drone</h1>
                                <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                                <Link to="/explore"><Button className="zara-btn" variant="primary"  >Explore</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                                
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide2} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Zara Drone</h1>
                                <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                                <Link to="/explore"><Button className="zara-btn" variant="primary" >Explore</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                               
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide3} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Zara Drone</h1>
                                <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                                <Link to="/explore"><Button className="zara-btn" variant="primary" >Explore</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                               
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide4} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Zara Drone</h1>
                                <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                                <Link to="/explore"><Button className="zara-btn" variant="primary" >Explore</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">

                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide5} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Zara Drone</h1>
                                <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                                <Link to="/explore"><Button className="zara-btn" variant="primary">explore</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                               
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;