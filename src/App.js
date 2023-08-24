import React from 'react'
import { Routes, Route } from "react-router-dom";
 
import Home from './Components/Home'
import Navbars from './Components/Navbars'
import Project from './Components/Project'
import Technical from './Components/Technical'
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <Navbars/>
    <Routes>
      <Route exact path="/" element ={<Home/>}/>
      <Route exact path="/Projects" element ={<Project/>}/>
      <Route exact path="/Technical" element ={<Technical/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App