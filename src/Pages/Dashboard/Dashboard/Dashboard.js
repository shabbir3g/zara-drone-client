import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import TopHeader from '../../Shared/TopHeader/TopHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faClipboard, faHandHoldingUsd, faShoppingBag, faTachometerAlt, faTasks, faTools, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';
import DashboardNotFound from '../DashboardNotFound/DashboardNotFound';
import UserReview from '../UserReview/UserReview';

const ShoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
const Clipboard = <FontAwesomeIcon icon={faClipboard} />
const HandHoldingUsd = <FontAwesomeIcon icon={faHandHoldingUsd} />
const TachometerAlt = <FontAwesomeIcon icon={faTachometerAlt} />
const UsersCog = <FontAwesomeIcon icon={faUsersCog} />
const Tasks = <FontAwesomeIcon icon={faTasks} />
const CalendarPlus = <FontAwesomeIcon icon={faCalendarPlus} />
const Tools = <FontAwesomeIcon icon={faTools} />

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div>
            <TopHeader page={"dahaboard"}></TopHeader>
            <div className="container-fluid"> 
                <div className="row"> 
                    <div style={{height: '100vh'}} className="dashboard-sidebar col-md-2 bg-dark text-light">
                        <nav className="dashboard-menu"> 
                            <ul>
                                <li><Link to={`${url}`}>{TachometerAlt} <span>Dashboard</span></Link></li>
                                {!admin && <>
                                <li><Link to={`${url}/my-orders`}>{ShoppingBag} <span>My Orders</span></Link></li>
                                <li><Link to={`${url}/review`}>{Clipboard} <span>Review</span></Link></li>
                                <li><Link to={`${url}/pay`}>{HandHoldingUsd} <span>Pay</span></Link></li>
                                </> }
                                {/* admin menu  */}
                                {admin && <>
                                    <li><Link to={`${url}/manage-all-orders`}>{Tasks} <span>Manage All Orders</span></Link></li>
                                    <li><Link to={`${url}/add-a-product`}>{CalendarPlus} <span>Add A Product</span></Link></li>
                                    <li><Link to={`${url}/make-admin`}>{UsersCog} <span>Make Admin</span></Link></li>
                                    <li><Link to={`${url}/manage-products`}>{Tools} <span>Manage Products</span></Link></li>
                                </> }
                               
                            </ul>
                        </nav>

                       
                    </div>
                    <div className="col-md-10">
                         <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/my-orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <UserReview></UserReview>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>

                            <AdminRoute path={`${path}/manage-all-orders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-a-product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-products`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <Route path="*">
                                <DashboardNotFound></DashboardNotFound>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Dashboard;