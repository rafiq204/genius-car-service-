import React from 'react';
import useService from '../hooks/useServices';

const ManageService = () => {
    const [services,setServices]=useService();
    const handleDelete =id =>{
        const proceed = window.confirm('Do you want to delete your service?');
        if(proceed){
            const url =`http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                const remaining = services.filter(service=>service._id !==id);
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h2>Manage your Services</h2>
            {
                services.map(service=><div
                key={service._id}
                
                >
                 <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>Delete</button></h5>   
                </div>)
            }
        </div>
    );
};

export default ManageService;