import React from 'react'
import GptSearchbar from './GptSearchbar'
import  GptMovieSuggestion from './GptMovieSuggestion'
import {BG_URL} from "../utils/constants"
const GptSearch = () => {
  return (
    <>
     <div className="absolute -z-10">
         <img className='h-screen  object-cover md:w-screen' src={BG_URL} alt="bg image"/>

         </div>

         <div className='pt-[30%] md:p-0'>
   
   <GptSearchbar/>
   <GptMovieSuggestion/>
 
  </div>
    </>
   
  )
}

export default GptSearch