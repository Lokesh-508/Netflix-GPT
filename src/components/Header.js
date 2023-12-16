import React from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {LOGO} from '../utils/constants'

const Header = () => {

   const navigate=useNavigate();
   const user=useSelector(store=>store.user);
   const dispatch =useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.'
      //  navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(
          addUser({
            uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
    
  },[])
  return (
    <div className=" flex absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-10 justify-between">
        <img 
        className='w-44'
         src={LOGO}
          alt="logo"/>
        {user && <div className='flex p-2'>

          <img 
               className='w-12 h-12'
          alt ="user-icon"
           src={user.photoURL}/>

          <button onClick={handleSignOut} className='text-white font-bold'>Sign out</button>
        </div>}
    </div> 
  )
}

export default Header