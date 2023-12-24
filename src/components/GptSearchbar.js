import React from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';
const GptSearchbar = () => {

  const langKey = useSelector((store)=> store?.config?.lang);
    
  return (
    <div className="pt-[10%]"  >
      
<form className="bg-black">
<input 
   type="text"
  className="p-4 m-4" 
  // i should implement multi languages -- not completed
// placeholder= {lang[langKey].gptSearchPlaceholder}>
placeholder ="What movies would you like to watch">
   
</input>
 
  <button className="py-2 px-4 bg-red-700 text-white rounded-lg">
  {/* {lang[langKey]?.search} */}
   Search
    </button>
  </form>
    </div>
  )
}

export default GptSearchbar