import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading]=useAuthState(auth)
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
      return <Loading></Loading>
    }
  if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
 if( user.providerData[0].providerId ==='password' && !user.emailVerified){
  return <div>
     <h2 style={{color:'red'}}>Your Email is not Verified !!</h2>
     <p className='text-success'>Please verify your Email </p>
     <button
        className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       send Verification email
      </button>
      <ToastContainer></ToastContainer>
  </div>
  
 }
    return children;
};

export default RequireAuth;