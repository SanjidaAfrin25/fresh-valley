import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
//import Product from '../Product/Product';




const Home = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4055/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))

    },[])
    return (
        <div>
            <input type="text"placeholder="Search your item"></input><Button variant="primary">Search</Button>
        <div className="row">
            {
                events.map(event=> <Product key={event._id}  event={event}></Product>)
        
            }

        </div>
        </div>
    );
};
        


export default Home;