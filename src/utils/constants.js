export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
      Authorization :'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzkyMmQ0NDBlMWQzZjAyYmI2ZWE5YWQ2MWYzZDQ0OSIsInN1YiI6IjY1N2M4ZjA1NjNlNmZiMDBlM2NkZmNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZOvnT7Z_ASFTd00AFdJHDRd0df9bE_53GZQbw81Ndbw'
    }
  };


  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"

  export const  BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "sanskrit", name: "Sanskrit" },
    { identifier: "spanish", name: "Spanish" },
    
  ];


  

export const OPENAI_KEY=process.env.OPENAI_KEY