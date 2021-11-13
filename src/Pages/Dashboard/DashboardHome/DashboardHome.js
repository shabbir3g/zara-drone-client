import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faClipboard, faShoppingBag, faTasks, faUser,  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const User = <FontAwesomeIcon icon={faUser} />
const ShoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
const Clipboard = <FontAwesomeIcon icon={faClipboard} />
const Tasks = <FontAwesomeIcon icon={faTasks} />
const ArrowAltCircleRight = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const DashboardHome = () => {

    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        const url = `https://whispering-lake-79289.herokuapp.com/users`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setAllUser(data) )
    }, []);

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const url = `https://whispering-lake-79289.herokuapp.com/products`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setProducts(data) )
    }, []);

    const [reviews, setReviews] = useState([]);

 

    useEffect(() => {
        const url = `https://whispering-lake-79289.herokuapp.com/review`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setReviews(data) )
    }, []);

    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch(`https://whispering-lake-79289.herokuapp.com/my-orders`)
        .then((res) => res.json())
        .then((data) => setOrders(data) )

    }, [orders]);




    return (
        <div>
             <h2 className="text-center my-5">Welcome to Dashboard</h2>

             <div class="row">
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-3">
                        {User}
                    </div>
                    <div class="col-md-9 text-right">
                  <div class='huge'>{allUser?.length}</div>
                        <div class="under-number">All Users</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div class="panel-footer">
                    <span class="pull-left blue">View Details</span>
                    <span class="pull-right blue">{ArrowAltCircleRight}</span>
                    <div class="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>

    
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-3">
                        {ShoppingBag}
                    </div>
                    <div class="col-md-9 text-right">
                     <div class='huge'>{products?.length}</div>
                      <div class="under-number">Products</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div class="panel-footer">
                    <span class="pull-left green">View Details</span>
                    <span class="pull-right green">{ArrowAltCircleRight}</span>
                    <div class="clearfix"></div>
                </div>
            </Link>
        </div>    
    </div>



    <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-3">
                        {Clipboard}
                    </div>
                    <div class="col-md-9 text-right">
                    <div class='huge'>{reviews?.length}</div>
                        <div class="under-number">Review</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div class="panel-footer">
                    <span class="pull-left yellow">View Details</span>
                    <span class="pull-right yellow">{ArrowAltCircleRight}</span>
                    <div class="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>



    <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-3">
                        {Tasks}
                    </div>
                    <div class="col-md-9 text-right">
                        <div class='huge'>{orders?.length}</div>
                         <div class="under-number">All Order</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div class="panel-footer">
                    <span class="pull-left red">View Details</span>
                    <span class="pull-right red">{ArrowAltCircleRight}</span>
                    <div class="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default DashboardHome;