import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Product from './Product/Product';

const Products = (props) => {
    const page = props.page;
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const url = `https://whispering-lake-79289.herokuapp.com/products`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setProducts(data) )
    }, []);


    return (
            <Container>
                <div className="my-5 text-center w-50 mx-auto">
                    <h2>Our Products</h2>
                    <p>Zara Drone Provide to customer always best quality drone in budget price. You can get using this any Chinamatic 4k or 5k video what actually you want</p>
                </div>
                {products.length === 0 ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> :    (  <div className="row">
                { page === "home" ? 
                    products.slice(0, 6).map(product => <Product
                        product={product}
                        key={product?._id}
                        ></Product>)

                   :  products.map(product => <Product
                    key={product?._id}
                    product={product}></Product>)
                }
                </div> ) }
               
            </Container>
        
    );
};

export default Products;