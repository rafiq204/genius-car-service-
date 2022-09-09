import React from 'react';
import './SocialLogin.css'
import google from '../../Images/SocialImages/google.png';
import facebook from '../../Images/SocialImages/facebook.png';
import github from '../../Images/SocialImages/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
  if (error || error1) { 
    errorElement=<p style={{color:'red'}}>Error: {error?.message} {error1?.message}</p>
  }
  if(user || user1){
    navigate('/home')
  }
 if(loading){
  return <Loading></Loading>
 }
    return (
        <div>
             <div className='divider-container'>
                <div className="divider"></div>
                <div className='or'>or </div>
                <div className="divider"></div>
             </div>
             <div >
                {errorElement}
                <button 
                onClick={()=>signInWithGoogle()}
                className='btn btn-info d-block social-btn my-3 mx-auto'> <img style={{width:'30px'}} src={google} alt="" 
                
                /> Continue in with Google</button>
                <button className='btn btn-info d-block social-btn my-3 mx-auto'> <img style={{width:'30px'}} src={facebook} alt="" /> Continue in with Facebook</button>
                <button
                onClick={()=>signInWithGithub()}
                className='btn btn-info d-block social-btn my-3 mx-auto '> <img style={{width:'30px'}} src={github} alt="" 
                /> Continue in with Github</button>
             </div>
        </div>
    );
};

export default SocialLogin;