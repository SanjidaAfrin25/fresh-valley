import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import Container from 'react-bootstrap/Container'

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl,setImageUrl]=useState(null)
  const onSubmit = data => {
    const eventData={
      name:data.name,
      imageUrl:imageUrl,
      price:data.price
    };
    const url=`http://localhost:4055/addEvent`
    console.log(eventData);
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(eventData)
    })
    .then(res=>console.log('server side response'))

  }
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData =new FormData();
    imageData.set('key','230ff9c1d06ad4194081139e151705f1');
    imageData.append('image',event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
      <div style={{backgroundColor:"skyblue",height:"500px"}}>
        <div className="flex">
         <div className="col-md-2" style={{backgroundColor:"rgb(57, 124, 211)",marginLeft:"400px",marginTop:"60px",boxShadow:"5px 5px 5px gray"}}>
         <h2 style={{color:"white"}}>Fresh-Valley</h2>  
         <h3>Manage Product</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
     
      <input  name="name"defaultValue="New product" {...register("name")} /><br/>
      <input  name="price"defaultValue="price" {...register("price")} /><br/>
      <input style={{marginLeft:"20px"}} name="exampleRequired"  type="file" onChange={handleImageUpload} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input style={{backgroundColor:"blue",color:"white",border:"none"}} type="submit" />
    </form></div>
         <div style={{marginLeft:"20px",marginTop:"60px"}}>
        
  <Row style={{backgroundColor:"#f3f2f8",boxShadow:"5px 5px 5px 5px gray"}} md={12}>
    <Col xs={6}>Product Name<br/>Bayleaf<br/>Onion<br/>Minicate rice<br/>Gas cylinder<br/>
    Mr.twist<br/>lifebouy soap<br/>Ruchi chanachur<br/>Marks milk<br/>parashut oil
    </Col>
    <Col>Weight<br/>1 kg<br/>1 kg<br/>5 L<br/>100 gm<br/>1/2 kg<br/>200gm<br/>400gm<br/>200ml</Col>
    <Col>Price<br/>$20<br/>$40<br/>$50<br/>$1000<br/>$15<br/>$35<br/>$60<br/>$200<br/>$300</Col>
  </Row>


         </div>
        </div>
        </div>
    );
};

export default AddProduct;