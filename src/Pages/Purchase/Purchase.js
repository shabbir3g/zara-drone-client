import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Purchase = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const [product, setProduct] = useState({});


    
    const onSubmit = data => {
        data.name = user.displayName;
        data.email = user.email;
        data.title = product?.title;
        data.size = product?.size;
        data.price = product?.price;
        data.image = product?.image;
        data.status = "Pending";
        console.log(data);

      axios.post('http://localhost:5000/purchase', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Purchased Drone Successfully');
                reset();
                window.location = "/thanks"
            }
            console.log(res);
        })
    }


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    console.log(id);

    return (
        <div className="normal-page">
             <Navigation></Navigation>
            <div className="margin-top-200 mb-5">
            <div className="purchase">
            <Container>
            <Row className="mb-3">
                <Col xs={12} md={3}> 
                    <img className="img-fluid" src={product?.image} alt="" />
                </Col>
                <Col xs={12} md={9}> 
                    <h2>{product?.title}</h2>
                    <h5 className="my-3 text-zara">$ {product?.price}</h5>
                    <p>{product?.desc?.substring(0, 1200)}</p>
                </Col>
            </Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Name</b></Form.Label>
                        <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={user?.displayName}  {...register("name")} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your E-mail</b></Form.Label>
                        <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={user?.email}  {...register("email")} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Phone Number</b></Form.Label>
                        <input type="text" placeholder="Phone Number"  {...register("phone", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Address</b></Form.Label>
                        <input type="text" placeholder="Address"  {...register("address", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Country</b></Form.Label>
                        <input type="text" placeholder="Country"  {...register("country", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Town / District</b></Form.Label>
                        <input type="text" placeholder="Town / District"  {...register("district", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Postcode / ZIP</b></Form.Label>
                        <input type="text" placeholder="Postcode / ZIP"  {...register("zip", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Description">
                        <Form.Label><b>Message</b></Form.Label>
                        <textarea style={{ height: '150px' }} type="text" placeholder="Message"   {...register("message", { required: true })} />
                        </Form.Group>
                    </Row>
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button className="fw-bold" variant="primary" type="submit">
                        Place the Order
                    </Button>
                </Form>
            </Container>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;