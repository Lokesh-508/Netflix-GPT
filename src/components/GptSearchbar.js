// import React from 'react'
// import lang from "../utils/languageConstants";
// import { useSelector } from 'react-redux';
// import { useRef } from 'react';
// import openai from '../utils/openai';
// const GptSearchbar = () => {

//   const langKey = useSelector((store)=> store?.config?.lang);
//     const searchText =useRef(null);

//   const handleGptSearch= async()=>{
//       console.log(searchText.value);
//         //Make an APi call to GPT and get const subquery=searchText.value;

//         const gptResults = await openai.chat.completions.create({
//           messages: [{role:"user", content:"this is test"}],
//           model:"gpt-3.5-turbo",
//           max_tokens: 3000,
//           temperature: 0,
//         });

//         console.log(gptResults.choices);
//   }
//   return (
//     <div className="pt-[10%] flex justify-center"  >
      
// <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
// <input 
//      ref={searchText}
//    type="text"
//   className="p-4 m-4 col-span-9" 
//   // i should implement multi languages -- not completed
// // placeholder= {lang[langKey].gptSearchPlaceholder}>
// placeholder ="What movies would you like to watch">
   
// </input>
 
//   <button 
//   className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
//    onClick={handleGptSearch}
//   >
//   {/* {lang[langKey]?.search} */}
//    Search
//     </button>
//   </form>
//     </div>
//   )
// }

// export default GptSearchbar



import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';

import addGptMovieResult from '../utils/GptSlice'

const GptSearchbar = () => {

   const dispatch=useDispatch();
  const langKey = useSelector((store) => store?.config?.lang);
  const [searchValue, setSearchValue] = useState('');
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);


 // search movie in TMDB
 const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};








  const handleGptSearch = async () => {
//     const userInput = searchText.current.value.trim();
//       console.log(1);
//     if (userInput === '') {
//       // Perform validation for empty input
//       alert('Please enter a search query.');
//       return;
//     }

//     if (loading) {
//       // Prevent multiple API calls while the previous one is ongoing
//       return;
//     }

//     setLoading(true);

//     try {

//       const gptQuery= "Act as a Movie Recommendation system and suggest some movies for thr query : "+ userInput+
//        ". only give me names of 5 movies, comma seperated like the example results given a head. Example Result: Gadar, sholay, Don, Golmaal, Koi Mill Gaya"
//       const gptResults = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: userInput }],
//         model: 'gpt-3.5-turbo',
//         max_tokens: 3000,
//         temperature: 0,
//       });

//       console.log(gptResults.choices);
//       // Handle the API response or update state as needed


//           // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
//            // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

           
//     const gptMovies= ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

//        // For each movie I will search TMDB API
//  console.log(gptMovies);
//        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
//        // [Promise, Promise, Promise, Promise, Promise]
   
//        const tmdbResults = await Promise.all(promiseArray);
   
//        console.log(tmdbResults);
   
//        dispatch(
//          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//        );
     
//     } catch (error) {
//       console.error('Error occurred:', error);
//       // Handle error scenarios, notify the user, etc.
    
//     } finally {
//       setLoading(false);
//       const gptMovies= ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

//       // For each movie I will search TMDB API
// console.log(gptMovies);
//       const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
//       // [Promise, Promise, Promise, Promise, Promise]
  
//       const tmdbResults = await Promise.all(promiseArray);
  
//       console.log(tmdbResults);
  
//       dispatch(
//         addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//       );
//     }













//       const gptMovies= ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

//       // For each movie I will search TMDB API
// console.log(gptMovies);
//       const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
//       // [Promise, Promise, Promise, Promise, Promise]
  
//       const tmdbResults = await Promise.all(promiseArray);
  
//       console.log(tmdbResults);
  
//       dispatch(
//         addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//       );







const gptMovies = ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];

try {
  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);

  dispatch(
    addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
  );
} catch (error) {
  console.error('Error occurred while dispatching:', error);
  // Handle the error, maybe dispatch an action to set an error state in Redux
}

  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className= " w-full md:w-1/2 bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="p-4 m-4 col-span-9"
          placeholder="What movies would you like to watch"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
          disabled={loading}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
