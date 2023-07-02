import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import "./Product.css"

const Product = ({event}) => {
    // const deleteEvent = id => {
        console.log(event)
        const {_id}=event
        console.log(_id)
        const history=useHistory();
        const handleOrder=(_id)=>{
            history.replace(`/order/${_id}`);
        }
       
    // }
    return (
        <div className="col-md-3 container box"  style={{marginTop:"20px",marginLeft:"20px"}}>

            <img style={{height:'200px'}} src={event.imageUrl}alt=""/>
           
           <h3>{event.name}</h3><div className="flex"><h6 className="left">${event.price}<Button onClick={()=>handleOrder(_id)} className="right" variant="primary">Order</Button></h6> </div>
           
           {/* <button onClick={()=>deleteEvent(event._id)}>delete</button>
            */}
           
            
        </div>
    );
};

export default Product;