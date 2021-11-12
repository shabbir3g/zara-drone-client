import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory } from "react-router-dom";
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const Register = () => {

    const {user, authError, setAuthError, registerUser, isLoading} = useAuth();
    const history = useHistory();
    const [loginData, setLoginData] = useState();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();


        if(loginData?.password !== loginData?.password2){
            setAuthError('Your Password did not match');
            return;
        }
        else if (loginData?.password?.length < 6) {
            setAuthError('Password Must be at least 6 characters long.')
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(loginData?.password)) {
            setAuthError('Password Must contain 2 upper case');
            return;
        }

        registerUser(loginData?.email, loginData?.password, loginData?.name, history);

        
    }



    
    return (
        <div className="normal-page">
        

           <Navigation></Navigation>
            <div className="login-form margin-top-200 mb-5 mx-auto"> 

                <h2 className="my-5 text-center">Register</h2>
            
            { !isLoading &&   <form onSubmit={handleLoginSubmit}>
                <InputGroup className="mb-3">
                <FormControl 
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder="Name"
                    aria-label="name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    placeholder="Email"
                    aria-label="email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl 
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Password"
                    aria-label="password"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    placeholder="Confirm Password"
                    aria-label="confirm-password"
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Button className="zara-btn mb-3"  type="submit" variant="dark" >
                    Registration
                </Button>
                </div>
                
                </form>  }

                {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {user?.email && <div className="alert alert-success" role="alert">
                Congrats! User Created Successfully
                    </div> }

                {authError && <div className="alert alert-danger" role="alert">
                {authError}
                </div>}

                <Link className="text-center mt-2 text-decoration-none d-block text-dark" to="/login">Already have an account</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;