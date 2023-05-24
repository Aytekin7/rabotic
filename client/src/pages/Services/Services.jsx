import React from 'react'

function Services() {
    return (

        <>
            <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-around' }}>

                <img src="https://preview.colorlib.com/theme/robotics/img/l1.png.webp" alt="" />
                <img src="https://preview.colorlib.com/theme/robotics/img/l2.png.webp" alt="" />
                <img src="https://preview.colorlib.com/theme/robotics/img/l3.png.webp" alt="" />
                <img src="https://preview.colorlib.com/theme/robotics/img/l4.png.webp" alt="" />
                <img src="https://preview.colorlib.com/theme/robotics/img/l5.png.webp" alt="" />

            </div>

            <div style={{marginTop:'80px',}}>
                <h2 style={{marginLeft:'40%'}}>Latest News from our Blog</h2>
                <p style={{marginLeft:'40%'}}>Who are in extremely love with eco friendly system.</p>
                <div style={{display:'flex',justifyContent:'center',gap:'30px',marginTop:'40px'}}>
                    <div>
                        <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg.webp" alt="" />
                       <div style={{display:'flex',width:'200px',height:'40px',marginTop:'20px'}}>
                       <button style={{backgroundColor:'plum'}}>Travel</button>
                        <button style={{backgroundColor:'plum'}}>Life Style</button>  
                       </div>
                       <h2 style={{marginTop:'10px'}}>Portable latest Fashion for young women</h2>
                        <p style={{marginTop:'10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas sequi numquam ut natus. Nostrum?</p>
                          <p>31st January, 2018</p>
                    </div>

                    <div>
                        <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg.webp" alt="" />
                        <div style={{display:'flex',width:'200px',height:'40px',marginTop:'20px'}}>
                       <button style={{backgroundColor:'plum'}}>Travel</button>
                        <button style={{backgroundColor:'plum'}}>Life Style</button>  
                       </div>
                       <h2 style={{marginTop:'10px'}}>Portable latest Fashion for young women</h2>
                        <p style={{marginTop:'10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas sequi numquam ut natus. Nostrum?</p>
                         <p>31st January, 2018</p>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Services