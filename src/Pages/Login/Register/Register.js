import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree , setAgree]=useState(false);
    const navigate = useNavigate();
    const navigateLogin=()=>{
        navigate('/login')
    }
 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   
        const handleRegister=async (event) =>{
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
             await createUserWithEmailAndPassword(email, password);
             await updateProfile({ displayName:name });
             navigate('/home')
        }
        if(loading || updating){
            return <Loading></Loading>
        }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input onClick={()=>setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
                <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms">Accept genius car Terms and Condotion </label>
                <input
                disabled={!agree}
                 className='btn btn-primary'
                 type="submit"
                 value="Register" />
                <p className="text-center text-primary">Already have an account? <span onClick={navigateLogin}  className="text-danger register">Please Login.</span></p>
            </form>
           
        </div>
    );
};

export default Register;