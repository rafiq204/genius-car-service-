import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './service.css'
const Service = ({service}) => {
    const {name ,price , description , img , _id} =service;
    const navigate=useNavigate()
    const navigateToServiceDetails = id =>{
            navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
               <Helmet title="Home-Genius car"></Helmet>
            <img src={img} alt="" />
            <h2 style={{color:'teal'}}>{name}</h2>
            <p style={{color:'tomato'}}>Price : ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetails(_id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;