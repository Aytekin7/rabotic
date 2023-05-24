import React from 'react'
import style from './contact.module.css'

function Contact() {
  return (
 <>
 <div style={{display:'flex'}}>
    <div style={{marginTop:'80px'}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/about-img.png.webp" alt="" />

    </div>
     <div style={{marginLeft:'60px',marginTop:'200px'}}>
        <h2>Globally Connected</h2>
        <h2 style={{marginTop:'10px'}}>by Large Network</h2>
        <p style={{marginTop:'10px'}}>We are here to listen from you deliver exellence</p>
        <p style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Vero accusantium similique ab omnis amet explicabo, minima <br/>saepe velit cumque esse reiciendis maiores quaerat magni<br/> doloremque iste nulla officia consequuntur commodi.</p>
           <button className={style.button} style={{marginTop:'20px',height:'50px',width:'100px'}}>GET DETAILS</button>
     </div>

 </div>
 
 </>
  )
}

export default Contact