import React from 'react'
import style from './aboutus.module.css'

function AboutUs() {
  return (
    <div style={{display:'flex',marginTop:'80px'}}>
        <div style={{marginLeft:'200px',marginTop:'40px'}}>
            <p style={{color:'blue'}}> BRAND NEW APP TO BLOW YOUR MIND</p>
            <h1 style={{marginTop:'20px'}}>We ve made a life</h1>
            <h1> that will change you</h1>
            <h6 style={{marginTop:'20px'}}>We are here to listen from you deliver exellence</h6>
            <p style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque veritatis illo<br/> modi natus assumenda?</p>
            <button className={style.but} style={{marginTop:'20px',height:'50px',width:'100px'}}>GET DETAILS</button>
        </div>


        <div style={{marginLeft:'100px'}}>
            <img src="https://preview.colorlib.com/theme/robotics/img/video-bg.jpg.webp" alt="" />

        </div>



    </div>

  )
}

export default AboutUs