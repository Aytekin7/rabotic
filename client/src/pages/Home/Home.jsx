import React from 'react'
import style from './home.module.css'

function Home() {
    return (
        <>
            <div style={{display:'flex',alignItems:'center',paddingLeft:'80px'}} className={style.home}>
                
                    <div>
                        <h1 style={{ color: "white",fontSize:'80px' }}>Improved</h1>
                        <h1 style={{color:'white',fontSize:'80px'}}>Production level</h1>
                        <h1 style={{color:'white',fontSize:'80px'}}>with Robotics</h1>
                        <p style={{color:'white',fontSize:'20px'}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
                        <button className='button' style={{marginLeft:'80px',height:'50px',width:'200px',marginTop:'30px'}}>VIEW DETAILS</button>
                    </div>
                    <div style={{marginLeft:'200px'}}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp" alt="" />
                    
                </div>

            </div>
        </>
    )
}

export default Home