import React from 'react'
import Header from './Header';
import { useState} from 'react';
import { useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase';
import { USER_AVATAR } from '../utils/constants';

import { useDispatch } from 'react-redux';
import  {addUser} from '../utils/userSlice'
import { BG_URL } from '../utils/constants';
const Login = () => {
         const [isSignInForm,setIsSignInForm]= useState(true);
         const [errorMessage, setErrorMessage]=useState(null);
   
         const name=useRef(null);
         const email = useRef(null);
         const password = useRef(null);
         const  dispatch=useDispatch();

         const handleButtonOnClick =()=>{
           
           
             const message= checkValidData(
              // name.current.value,email.current.value,password.current.value
              // name.current ? name.current.value : '', // Check if name ref is null before accessing value
              email.current ? email.current.value : '', // Check if email ref is null before accessing value
              password.current ? password.current.value : '' // Check if password ref is null before accessing value
              
              );
             setErrorMessage(message);
            //  console.log(message);

             if(message) return;

             if(!isSignInForm){

               //sign up logic

               createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value, photoURL: USER_AVATAR
                }).then(() => {
                  // Profile updated!
                  // ...
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                  dispatch(
                    addUser({
                      uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL,
                  }));
                 
                }).catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error);
                });
                
             
    
                })
                  .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+"-"+errorMessage+" createuserwith email password");
                  });

             }else{

              //sign in logic
              signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {

              // Signed in 
                const user = userCredential.user;
              
              
                
               
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage+" signinwith emailand password");
              });

             }
         
         }
    const toggleSignInForm=()=>{
           setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
    <div className="absolute">
        <Header/>
        
        <img className='w-screen  object-cover' src={BG_URL} alt="bg image"/>
    </div>
     <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-4  px-8 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input 
           ref={name}
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


        <p className="text-red-500 font-bold text-lg  ">{errorMessage}</p>

        <button 
        className="p-4 my-6 bg-red-600 w-full rounded-lg"
         onClick={handleButtonOnClick}
         >
            {isSignInForm ? "Sign In":"Sign Up"}
        </button>

       <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "Don't have an account ?      Sign Up "
            : "Already have an account ? Sign In"}</p>
     </form>
    </div>
  )
}

export default Login;