import {useDispatch} from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';
import {API_OPTIONS} from "../utils/constants";
import { useEffect } from "react";


        const useMovieTrailer=(movieId)=>{
              // fetch a trailer video from api && updating trailer video in store
     


         const dispatch =useDispatch();

         const getMovieVideos =async ()=>{
         const data= await fetch(
            'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
            API_OPTIONS
        );

        const json =await data.json();
        console.log(json);
           
         // my changes made
        //  var filterData=null;
        const filterData = json.results && Array.isArray(json.results)
  ? json.results.filter((video) => video.type === 'Trailer')
  : [null];
        // const filterData =json.results.filter((video)=> video.type==="Trailer");
        const trailer=filterData.length ? filterData[0]:json.results[0];
        console.log(trailer);
      
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
         getMovieVideos();
    },[])
};

export default useMovieTrailer;