import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseDB from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigator =useNavigate()
  const auth = getAuth();
  const [loader, setloader]=useState(false)
  const [vist, setVisit]=useState('')
  const [name, setName]=useState('')
  const [addrs, setAddrs]=useState('')
  const [phone, setPhone]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [nameError, setNameError]=useState('')
  const [addrsError, setAddrsError]=useState('')
  const [phoneError, setPhoneError]=useState('')
  const [emailError, setEmailError]=useState('')
  const [passwordError, setPasswordError]=useState('')

  
  
  
  const show =()=>{
    setVisit(!vist)
  }
  
  const handleName = (meter)=>{
    setName(meter.target.value)
    setNameError('')
  }
  const handleAddrs = (meter)=>{
    setAddrs(meter.target.value)
    setAddrsError('')
  }
  const handlePhone = (meter)=>{
    setPhone(meter.target.value)
    setPhoneError('')
  }
  
  const handleEmail = (meter)=>{
    setEmail(meter.target.value)
    setEmailError('')
  }
  
  const handlePass = (meter)=>{
    setPassword(meter.target.value)
     setPasswordError('')
    }
    const formSubmit = (key)=>{
      key.preventDefault()
      if(!name){
        setNameError('Enter your name')
      }if(!addrs){
        setAddrsError('Enter your Address')
      }if(!phone){
        setPhoneError('Enter your phone')
      }if(!email){
        setEmailError('Enter your email')
    }if(!password){
      setPasswordError('Enter your password')
    }else{
      setloader(true)

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305503988.jpg",
        // phoneNumber:phone

        })
        console.log(userCredential);
        
        setloader(false)

          toast.success('Registration done', {
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
            navigator('/login')
            sendEmailVerification(auth.currentUser)

       
        // Signed up 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        setloader(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        
        if(errorCode == 'auth/email-already-in-use'){
          toast.error('email already used', {
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
        }if(errorCode == 'auth/weak-password'){
          toast.error('Password weak', {
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
      }

    
      });

      
    }
  }

  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    <form onSubmit={formSubmit}>
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
      Register
    </h2>
    
    {/* Username Input */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        onChange={handleName}
        type="text"
        id="username"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your full name"
        />
      <p>{nameError}</p>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Address
      </label>
      <input
        onChange={handleAddrs}
        type="text"
        id="username"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your address"
        />
      <p>{addrsError}</p>
    </div>

    <div className="mb-4">
      <label  className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        onChange={handlePhone}
        type="number"
        id="username"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your number"
        />
      <p>{phoneError}</p>
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        onChange={handleEmail}
        type="email"
        id="email"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your email"
        />
      <p>{emailError}</p>
    </div>

    {/* Password Input */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative w-full">

      <input
        onChange={handlePass}
        type={vist? "password":"text"}
        id="password"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your password"
        />
        {
        vist?
        <IoEyeOutline onClick={show} className='absolute top-[20%] left-[90%] text-2xl'/>
        :
        <IoEyeOffOutline onClick={show} className='absolute top-[20%] left-[90%] text-2xl'/>
        }
        
        </div>
      <p>{passwordError}</p>
    </div>

    {/* Confirm Password Input */}
    
    

    {/* Register Button */}
    <div className="flex flex-col justify-center">
      {
        loader?
      <div
      className="bg-blue-300 text-white px-6 py-2 rounded-lg shadow-m flex justify-center cursor-not-allowed">
        Register
      </div>
      :
      <button
      type='submit'
      className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Register
      </button>

      }
    </div>
         </form>
  </div>
</div>

    </div>
  )
}

export default Register
