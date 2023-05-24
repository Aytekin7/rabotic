import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from 'antd';
import style from './product.module.css'

function Products() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div style={{marginLeft:'50%',marginTop:'100px'}}>
                        <h1>Featured Robotics Products to Show</h1>
                        <p style={{marginLeft:'40px'}}>Who are in extremely love with eco friendly system.</p>
                        </div>
                        <div style={{display:'flex',marginTop:'70px',gap:'30px',marginLeft:'300px'}}>
                            <div  >
                                <Card className={style.card}
                                    hoverable
                                    style={{ width: 240 }}
                                    
                                    cover={<img className={style.imageCard}  alt="example" src="https://preview.colorlib.com/theme/robotics/img/p1.png.webp" />}
                                >
                                    <h2>The Upper Eye</h2>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                    <button className='button' style={{marginLeft:'10px',height:'50px',width:'100px',marginTop:'30px'}}>VIEW DETAILS</button>
                                        

                                </Card>
                            </div>
                            <div>
                                <Card className={style.card}
                                    hoverable
                                    style={{ width: 240 }}
                                 
                                    cover={<img className={style.imageCard}  alt="example" src="https://preview.colorlib.com/theme/robotics/img/p2.png.webp" />}
                                >
                                    <h2>The Crab Wheel</h2>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                    <button className='button' style={{marginLeft:'10px',height:'50px',width:'100px',marginTop:'30px'}}>VIEW DETAILS</button>

                                </Card>

                            </div>

                            <div>
                                <Card className={style.card}
                                    hoverable
                                    style={{ width: 240 }}
                                    
                                    cover={<img className={style.imageCard}  alt="example" src="https://preview.colorlib.com/theme/robotics/img/p3.png.webp" />}
                                >
                                    
                                    <h2>The Plug Ninja</h2>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                    <button className='button' style={{marginLeft:'10px',height:'50px',width:'100px',marginTop:'30px'}}>VIEW DETAILS</button>


                                </Card>

                            </div>
                            <div>
                                <Card className={style.card}
                                    hoverable
                                    style={{ width: 240 }}
                                 
                                    cover={<img className={style.imageCard}  alt="example" src="https://preview.colorlib.com/theme/robotics/img/p4.png.webp" />}
                                >
                                    
                                    <h2>The Controller</h2>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                    <button className='button' style={{marginLeft:'10px',height:'50px',width:'100px',marginTop:'30px'}}>VIEW DETAILS</button>


                                </Card>

                            </div>


                        </div>




                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Products