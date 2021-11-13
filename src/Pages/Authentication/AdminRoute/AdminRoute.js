import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';



const AdminRoute = ({ children, ...rest }) => {
    const {user, admin} = useAuth();
    if(!admin){
        return  <div>
               
                <div className="text-center my-5"> 
                <Spinner animation="border" variant="danger" />
                </div>
            </div>
    }
    return (
        <Route 
        {...rest}
        render={({location}) => user.email && admin ? children : <Redirect 
        to={{
            pathname: "/dashboard",
            state: { from: location }
          }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default AdminRoute;