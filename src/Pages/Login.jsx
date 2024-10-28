import React, { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';




const Login = () => {

  const auth = getAuth();
  const navigator = useNavigate()
  const [load, setload]= useState(false)
  const [show, setShow]= useState(false)
  const [email, setEmail]= useState('')
  const [emailError, setEmailError]= useState('')
  const [Password, setPassword]= useState('')
  const [PasswordError, setPasswordError]= useState('')

  const shift= ()=>{
    setShow(!show)
  }

  const handlemail= (name)=>{
    setEmail(name.target.value)
  }
  const handlePassword= (name)=>{
    setPassword(name.target.value)
  }

  const submit = (name)=>{
    name.preventDefault()
    if(!email){
      setEmailError('enter your email')
    }if(!Password){
      setPasswordError('enter your password')
    }else{
      setload(true)
      signInWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setload(false)
    if(user.emailVerified == false){
      toast.error('email not verified', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }else{
      navigator('/')
      
    }

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      
    }
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
            onChange={handlemail}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            />
            <p>{emailError}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative w-full">
            <input
            onChange={handlePassword}
            type={show ? "password":"text"}
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            />
            {
            show ?
              <IoEyeOutline onClick={shift} className='absolute top-[20%] left-[90%] text-2xl'/>
              :
              <IoEyeOffOutline onClick={shift} className='absolute top-[20%] left-[90%] text-2xl'/>
            }
            </div>
            <p>{PasswordError}</p>
          </div>
          <div className="flex items-center flex-col">
            
            {
              load?
            <div
              className="w-full bg-blue-300 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center cursor-not-allowed"
              >
              Login
            </div>
            :
              <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
              Login
            </button>
            }
            
          </div>
        </form>
      </div>
    </div>
              </>
  );
};

export default Login;
