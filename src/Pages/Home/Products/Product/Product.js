import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {_id, title, desc, price, image} = props.product;

    return (
        <>
        <div className="col-md-6 col-lg-4">
        <div className="drone-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
            <div className="thumb-top  overflow_hidden">
                <img src={image} alt="Zara Drone" />
                </div>
            <div className="drone-info p-4">
                <div className="down-line-left mb-3">
                    <h5 className="title"><a className="text-secondery" href="/">{title}</a></h5>
                    <span>{desc.substring(0, 39)}</span> </div>
                <div className="h5 per-night text-secondery">${price}</div>
                <Link to={`products/${_id}`}> 
                    <Button className="btn btn-primary float-right fw-bold">Purchase</Button>
                </Link>
            </div>
        </div>
        </div>
        </>
    );
};

export default Product;