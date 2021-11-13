import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trash = <FontAwesomeIcon icon={faTrash} />;

const MyOrders = () => {

    const {user, isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    

    useEffect(() => {
        fetch(`https://whispering-lake-79289.herokuapp.com/my-orders/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data) )

    }, [user?.email]);

    
    if(isLoading){
        return  <div>
                <div className="text-center"> 
                <Spinner animation="border" variant="danger" />
                </div>
            </div>
    }

    
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure, You want to delete');
        if(proceed){
            const url = `https://whispering-lake-79289.herokuapp.com/my-orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("Deleted sucessfully");
                    const remainingUsers = orders.filter(user => user._id !==id);
                    setOrders(remainingUsers)
                }
            })
        }
    }


    return (
        <div>
             <h2 className="text-center my-5">My Order</h2>

            <div className="container my-5"> 
                <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Product Photo</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>

                {
                    orders?.map((order, index) => <tr  key={order._id} >

                    
                    
                      
                        <td><img style={{width: '100px'}} src={order?.image} alt="product" /></td>
                        <td>{order?.title}</td>
                        <td>{order?.price}</td>
                        
                        <td className="text-center">
                        
                        <span className={ (order?.status === "Pending") ?  "text-danger" : "text-success" }>{order?.status}</span>
                    </td>
                        <td className="text-center"><button onClick={() => handleDeleteUser(order?._id)} className="btn btn-link text-danger">{Trash}</button></td>
                    </tr>

                    )
                }
                    
                
                

                </tbody>
                </Table>
                </div>
        </div>
    );
};

export default MyOrders;