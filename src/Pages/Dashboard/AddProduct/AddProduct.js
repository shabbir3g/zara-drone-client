import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if(res.data.insertedId){
                setSuccess(true);
                reset();
            }
        })
    }
  
    return (
        <div>
            <h2 className="text-center mt-5">Add A Product</h2>
            <div className="add-product">
            <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomTitle">
                            <Form.Label><b>Title</b></Form.Label>
                            <input type="text" placeholder="Product Title"   {...register ("title", { required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Description">
                            <Form.Label><b>Price</b></Form.Label>
                            <input type="text" placeholder="Product Price"   {...register("price", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomSize">
                            <Form.Label><b>Image URL</b></Form.Label>
                            <input type="text" placeholder="Image URL"   {...register("image", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Description">
                            <Form.Label><b>Description</b></Form.Label>
                            <textarea style={{ height: '100px' }} type="text" placeholder="Description"   {...register("desc", { required: true })} />
                            </Form.Group>
                        </Row>
                        {success &&  <div className="alert alert-success" role="alert">
                        Added Product Successfully!
                        </div>}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button className="fw-bold" variant="primary" type="submit">
                            Add Product
                        </Button>
                    </Form>
                </Container>
                </div>
        </div>
    );
};

export default AddProduct;