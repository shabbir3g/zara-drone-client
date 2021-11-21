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

             <div className="row">
    <div className="col-lg-3 col-md-3">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-md-3">
                        {User}
                    </div>
                    <div className="col-md-9 text-right">
                  <div className='huge'>{allUser?.length}</div>
                        <div className="under-number">All Users</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="panel-footer">
                    <span className="pull-left blue">View Details</span>
                    <span className="pull-right blue">{ArrowAltCircleRight}</span>
                    <div className="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>

    
    <div className="col-lg-3 col-md-3">
        <div className="panel panel-green">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-md-3">
                        {ShoppingBag}
                    </div>
                    <div className="col-md-9 text-right">
                     <div className='huge'>{products?.length}</div>
                      <div className="under-number">Products</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="panel-footer">
                    <span className="pull-left green">View Details</span>
                    <span className="pull-right green">{ArrowAltCircleRight}</span>
                    <div className="clearfix"></div>
                </div>
            </Link>
        </div>    
    </div>



    <div className="col-lg-3 col-md-3">
        <div className="panel panel-yellow">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-md-3">
                        {Clipboard}
                    </div>
                    <div className="col-md-9 text-right">
                    <div className='huge'>{reviews?.length}</div>
                        <div className="under-number">Review</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="panel-footer">
                    <span className="pull-left yellow">View Details</span>
                    <span className="pull-right yellow">{ArrowAltCircleRight}</span>
                    <div className="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>



    <div className="col-lg-3 col-md-3">
        <div className="panel panel-red">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-md-3">
                        {Tasks}
                    </div>
                    <div className="col-md-9 text-right">
                        <div className='huge'>{orders?.length}</div>
                         <div className="under-number">All Order</div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="panel-footer">
                    <span className="pull-left red">View Details</span>
                    <span className="pull-right red">{ArrowAltCircleRight}</span>
                    <div className="clearfix"></div>
                </div>
            </Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default DashboardHome;