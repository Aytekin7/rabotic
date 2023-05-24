import React from "react"
import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Contact from "./pages/Contact/Contact"
import AboutUs from "./pages/AboutUs/AboutUs"
import Blog from "./pages/Blog/Blog"
import Services from "./pages/Services/Services"
import Drop from "./pages/Drop/Drop"

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>


    </Routes>
    <Products/>
    <Contact/>
    <AboutUs/>
    <Blog/>
    <Services/>
    <Drop/>
    
    </>
  )
}

export default App
