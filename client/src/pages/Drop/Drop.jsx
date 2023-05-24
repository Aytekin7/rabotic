import React from 'react'
import style from './drop.module.css'

function Drop() {
  return (
    <>
    <div style={{marginTop:'80px',display:'flex',justifyContent:'space-around',paddingTop:'20%'}} className={style.drop}>

        <div style={{color:'white',}}>
            <h2>Top Products</h2>
            <h4 style={{marginTop:'20px'}}>Managed Website</h4>
            <h4 style={{marginTop:'10px'}}>Manage Reputation</h4>
            <h4  style={{marginTop:'10px'}}>Power Tools</h4>
            <h4  style={{marginTop:'10px'}}>Marketing Service</h4>
        </div>
        <div style={{color:'white'}}>
            <h2>Newsletter</h2>
            <p style={{marginTop:'10px'}}>You can trust us. we only send promo offers, not a single spam.</p>
            <div style={{marginTop:'30px',}}>
            <input  style={{height:'50px',width:'300px',borderRadius:'15px'}}  type="text" />
            <button style={{width:'100px',height:'50px',borderRadius:'8px',marginLeft:'20px',backgroundColor:'plum'}}>SUBSCRIPE</button>
            </div>
        </div>

         
      
       
          <div style={{gap:'20px',fontSize:'20px',color:'white',marginTop:'10px'}}>
          <h1 style={{color:'white'}}>Instragram Feed</h1>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-globe"></i>
          <i class="fa-brands fa-behance"></i>

          </div>


    </div>
    
    </>
  )
}

export default Drop