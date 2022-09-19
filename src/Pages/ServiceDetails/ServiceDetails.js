import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const [service , setService]=useState({});
    useEffect( ()=>{
        const url =`http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setService(data))
    }, [])
    return (
        <div>
            <h2>You are book to :{service.name} </h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed checkOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;