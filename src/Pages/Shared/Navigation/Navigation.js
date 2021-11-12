import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import TopHeader from '../TopHeader/TopHeader';


const Navigation = () => {
    const {user} = useAuth();


    return (
        <div className="header-area">

      
        <TopHeader page={"frontend"}></TopHeader>



        <Navbar className="header-navbar" collapseOnSelect expand="lg" >
        <Container className="header-container">
        <Navbar.Brand as={Link} to="/">
        <img
            src={logo}
            className="d-inline-block align-top header-logo"
            alt="Zara Clinic"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            
            {!user.email ? 
            <> 
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
            : ""

            }
          
           
         
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>





        </div>
    );
};

export default Navigation;