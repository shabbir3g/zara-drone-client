import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import LoginRoute from "./Pages/Authentication/LoginRoute/LoginRoute";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./Pages/Authentication/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import ThankYou from "./Pages/ThankYou/ThankYou";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/thanks">
              <ThankYou />
            </Route>
            <PrivateRoute path="/products/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <LoginRoute path="/login">
              <Login />
            </LoginRoute>
            <LoginRoute path="/register">
              <Register />
            </LoginRoute>
          
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
