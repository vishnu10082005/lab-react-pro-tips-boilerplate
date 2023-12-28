import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Form from './Components/Form'
function App() {
  return (
    <>
      <Navbar />
      {/* <Form/> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      
    </>
  )
}

export default App


//! Now You Will Learn How to Redirect From One Page to Other Page in react.
//! Pages ??? But React Has Only 1 HTML File , then how will we redirect and change pages ?
//! It will feel like you will be moving from one page to another but actually it will from one component to another.

//& WITH THE HELP OF ROUTING WE WILL BE ABLE TO ACHIEVE THAT

//& "REACT BY-DEFAULT DOESNT SUPPORT ROUTING" SO "REACT-ROUTER-DOM" WAS INTRODUCED.







//^ What is React-Router?
//* React Router is a popular standard library for routing among various view components in React applications.

//* The three main packages related to React Router are:
//* 1. react-router: Contains the core functionality of React Router, including route-matching algorithms and hooks.
//* 2. react-router-dom: Includes everything in react-router and adds a few DOM-specific APIs. <-(THIS IS WHAT WE NEED)
//* 3. react-router-native: Includes everything in react-router and adds a few React Native-specific APIs.

//! "REACT-ROUTER-DOM" is a part of "REACT-ROUTER"









//^ What is Routing ?
//* Routing is a technique to switch from one component to another without reloading the app.(no refresh)
//* "SINGLE PAGE APPLICATION" , that means only 1 HTML page and Components are changed using JS.











//^ I-B-RR-L (STEPS TO IMPLEMENT REACT-ROUTER-DOM)
//* I : Install React Router DOM Libary 
//* B : Import Browser Router (Provider)
//* RR : "Routes" and "Route" Component
//* L : Link , Creates Different Links





















//~ STEP-1
//* I : Install React Router DOM Libary 

//* npm install react-router-dom
























//~ STEP-2
//* B : Import Browser Router (Provider)

// import { BrowserRouter, Routes } from 'react-router-dom';

// function App() {
//     return (
//         <BrowserRouter>
//                 {/* other components */}
//         </BrowserRouter>
//     );
// }

// export default App;


//* BROWSEROUTER -> It is a predefined component in React Router 
//* It manages the synchronization between the URLs in the browser's address bar and the components to be rendered based on these URLs.
//* All Components of Router should be wrapped under BrowserRouter






















//~ STEP-3
//* RR : "Routes" and "Route" Component

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/about';
// import Home from './components/home';

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }


//* Route Component 
//* -> Used to create individual routes in React App 
//* -> It's used to specify which component should render based on the URL path.

//* Routes Component -> All Route Component Should be Wrapped inside Routes Component.
//* -> Is used as a container to define multiple Route components.





















//~ STEP-4
//* L : Link , Creates Different Links
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// function Navbar() {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/profile">Profile</Link>
//         </nav>
//     )
// }

//* Link -> is a Replacement of Anchor Tag without reloading
//* Normal Anchor Tags -> Reloads the Page 









//^ Page Not Found ⚠️ or Invalid Route 
//^ How to handle those ?

{/* <Route path="*" component={<PageNotFound/>} /> */ }










//! INTERVIEW QUESTION 
//* What is the Difference between <a> (anchor tag) vs <Link> vs <NavLink>
//* https://www.geeksforgeeks.org/link-and-navlink-components-in-react-router-dom/










//! Smart Ways to Create Route (if there are many route)
//^ Similarily can be achieved for Links Too


// var RoutesInfo = [
//     {
//         path: "/",
//         element : <Home/>
//     },
//     {
//         path: "/about",
//         element : <About/>
//     },
//     {
//         path: "/Contact",
//         element : <Contact/>
//     },
//     {
//         path: "/Support",
//         element : <Support/>
//     },
// ]


{/* <Routes> 
    // Map though the array 
    RoutesInfo.map((e)=>{
        return <Route path={e.path} element={e.element} />
    })
</Routes>  */}

//^ Similarily can be achieved for Links Too