// import React from 'react'
// import Login from './Login'
// import Browse from './Browse'
// import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'


// const Body = () => {
  
//   return (
//     <div>
//    <Router>
//     <Routes>
//       <Route path="/" element={<Login/>}>Login</Route>
//       <Route path="/browse" element={<Browse/>}></Route>
//     </Routes>
//    </Router>
//     </div>
//   )
// }

// export default Body

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from './Login'
import Browse from './Browse'



const Body= ()=>{

   
  const appRouter =createBrowserRouter([
    {
      path:"/",
      element:<Login/>,

    },
    {
      path:"/browse",
      element:<Browse/>,
    },
  ]);

 
  return(
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  )
};
export default Body;