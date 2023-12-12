import React from 'react'
import Header from './Header';
import { useState} from 'react';
import { useRef } from 'react';
import { checkValidData } from '../utils/validate';
const Login = () => {
         const [isSignInform,setIsSignInForm]= useState(true);

         const email = useRef(null);
         const password = useRef(null);

         const handleButtonOnClick =()=>{
           
            console.log(email.current.value);
            console.log(password.current.value);
             const message= checkValidData(email,password);
             console.log(message);
         
         }
    const toggleSignInForm=()=>{
           setIsSignInForm(!isSignInform);
    }
  return (
    <div>
    <div className="absolute">
        <Header/>
        
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img"/>
    </div>
     <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-10 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>{isSignInform ? "Sign In":"Sign Up"}</h1>
        {isSignInform && <input 
           type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"/>      
        
        }
        <input
        ref={email}
         type="text"
          placeholder="Email Address" 
          className="p-4 my-4 w-full bg-gray-700 rounded-sm"/>
          
        <input
        ref={password}
         type="password"
          placeholder="password" 
           className="p-4 my-4 w-full  bg-gray-700 rounded-sm"/>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg"
         onClick={handleButtonOnClick}>
            {isSignInform ? "Sign In":"Sign Up"}</button>

       <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {!isSignInform ? "Don't have an account ?      Sign Up "
            : "Already have an account ? Sign In"}</p>
     </form>
    </div>
  )
}

export default Login;