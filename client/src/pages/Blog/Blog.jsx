import React from 'react'
import style from './blog.module.css'
import { Card } from 'antd';

function Blog() {
    return (
        <>
            <div style={{ marginTop: '80px', }}>
                <div style={{ display: 'flex', color: 'white', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }} className={style.div}>
                    <h1>Some Features that Made us Unique</h1>
                    <p>Who are in extremely love with eco friendly system.</p>

                    <div style={{paddingTop:'100px',}}>
                        <div style={{display:'flex',gap:'50px'}}>
                        <Card style={{ width: 350, height:200}}>
                            <h3>Expert Technicians</h3>
                          <p>Usage of the Internet is becoming more</p>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>
                        </Card>


                        <Card style={{width: 350, height:200 }}>
                            <h3>Professional Service</h3>
                            <p>Usage of the Internet is becoming more</p>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>
                          
                        </Card>


                        <Card style={{width: 350, height:200}}>
                           <h3>Great Support</h3>
                           <p>Usage of the Internet is becoming more</p>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>
                          
                           

                        </Card>
                        </div>
                        <div style={{display:'flex',gap:'50px',paddingTop:'50px'}}>
                        <Card style={{ width: 350, height:200 }}>
                          <h3>Technicial Skills</h3>
                          <p>Usage of the Internet is becoming more</p>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>

                        </Card>


                        <Card style={{ width: 350, height:200}}>
                         <h3>Highly  Recomended</h3>
                         <p>Usage of the Internet is becoming more</p>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>

                        </Card>


                        <Card style={{ width: 350, height:200 }}>
                          <h3>Positive Reviews</h3>
                          <p>common due to rapid advancement of</p>
                          <p>technology and power.</p>
                        </Card>
                        </div>
                    </div>




                </div>


            </div>
        </>
    )
}

export default Blog