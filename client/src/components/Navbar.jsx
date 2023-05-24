import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar() {
  return (
   <>

   <ul className={style.nav}>
    <h1 style={{marginRight:'600px'}}>Robotics</h1>

    <li>
        <Link style={{color:'white'}} to="/">Home</Link>
    </li>
    <li>ABOUT US</li>
    <li>SERVICES</li>
    <li>PRODUCTS</li>
    <li>BLOG</li>
    <li>CONTACT</li>
    <li>DROPDOWN</li>
   </ul>
   
   
   </>
  )
}

export default Navbar