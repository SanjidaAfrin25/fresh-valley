import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

const Order = () => {
    const {Id}=useParams();
    const[order,setOrder]=useState({})
    const {name,imageUrl,price}=order;

    useEffect(()=>{
        fetch('http://localhost:4055/order/'+Id)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[Id])
    return ( <div>
        <div style={{boxShadow:"5px 10px 10px gray", marginTop:"100px"}}>
        <h3 style={{color:"blue",backgroundColor:"#87CEFA"}}>Hi,Checkout this!!</h3>
         <Container>
            
  <Row style={{backgroundColor:"lightgray"}} md={4}>
    <Col>Description</Col>
    <Col xs={6}>Quantity</Col>
    <Col>Price</Col>
  </Row>
  <Row md={4}>
    <Col>{name}</Col>
    <Col xs={6}>1</Col>
    <Col>${price}</Col>
  </Row>
  <Row md={4}><Col> <img style={{height:"100px"}} src={imageUrl} alt=""/> </Col>
  <Col xs={6}></Col>
  <Col><Button variant="primary" style={{marginTop:"60px"}}>checkout</Button></Col>
  </Row>
</Container>

        </div>
        </div>
       
    );
};

export default Order;