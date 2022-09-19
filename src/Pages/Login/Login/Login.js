import React, { useRef } from "react";
import './Login.css'
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Shared/Loading/Loading";
import { Helmet } from "react-helmet-async";


const Login = () => {
const emailRef = useRef('');
const passwordRef =useRef('')
const  navigate = useNavigate();
const location = useLocation();
let form = location.state?.form?.pathname || '/';
let errorElement;
const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

if(user){
    navigate(form , {replace:true})
}
if (error) {
    
  errorElement = <p style={{color:'red'}}>Error: {error?.message}</p>

 
}
const handleSubmit =event =>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
}

const resetPassword=async()=>{
  const email = emailRef.current.value;
if(email){
  await sendPasswordResetEmail(email);
  toast('Sent email');
}
else{
  toast('Please Enter Your Email')
}
}
const navigateRegister= ()=>{
    navigate('/register')
}

  return (
    <div className="container w-50 mx-auto">
       <Helmet title="Login-Genius car"></Helmet>
      <h2 className="text-primary text-center ">Please Login </h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        {errorElement}
        <Button variant="primary w-100 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center text-primary">New to Car Doctor ? <span onClick={navigateRegister} className="text-warning register">Please Register.</span></p>
      <p className="text-center text-primary">Forget Password? <button onClick={resetPassword} className="btn btn-link text-danger register">Reset password.</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
