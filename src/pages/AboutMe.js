import React from 'react';
import { Box, Divider, Grid, 
    Drawer,
    CssBaseline,
    AppBar,
} from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';
import { 
    useParallax, 
    Parallax, 
    ParallaxBanner,
    ParallaxProvider,
} from 'react-scroll-parallax';

import bg from '../img/bg.png';
import html from '../img/badges/html-css.png';
import js from '../img/badges/javascript-and-jquery.png';
import node from '../img/badges/node-js-and-express.png';
import reactjs from '../img/badges/react-js.png';
import mysql from '../img/badges/sql-and-nosql-databases.png';



function AboutMe(props) {

    // const drawerWidth = 240;
    // const { ref } = useParallax({ speed: -20 });
    // const hello = useParallax<HTMLDivElement>({
    //     // scaleX: [1, 0, 'easeInQuad'],
    //     easing: [1, -0.75, 0.5, 1.34],
    // });

    // const welcome = useParallax<HTMLDivElement>({
    //     scaleX: [4, -10, 'easeInQuad'],
    // });

    return (
            <Box p={7}>
                <Grid container rowSpacing={1} spacing={10} >
                    <Grid item s={1} md={2} m={3} ml='auto' color='#555555' fontSize={35}>
                        <p> a </p>
                        <p> b </p>
                        <p> o </p>
                        <p> u </p>
                        <p> t </p>
                        <br></br>
                        <p> m </p>
                        <p> e </p>
                        
                    </Grid>

                    <Divider light orientation="vertical" flexItem></Divider>

                    <Grid item s={7} md={9} ml='auto'>

                        {/* <Box p={15} >
                            <Parallax speed={-15}>
                                <div className='welcome' > 
                                    &lt; a-vitug /&gt;
                                </div>
                               
                            </Parallax>
                        </Box> */}

                        <Box p={20} className='ibarra' fontSize={20}>
                            <p>A <span className='welcome'> Full Stack Web Developer </span> from Anaheim, CA.</p>
                            <p>Focusing on Front-End Development</p>
                        </Box>
                        
                        {/* <Box p={5}>
                            <ParallaxBanner layers={[{ image: {tealbg}, speed: -250 }]} className="aspect-[2/1]">
                                <div ref={ref} class="bg">
                                    <img src={bg} width='100%' height='300' />
                                </div>
                            </ParallaxBanner>
                        </Box> */}

                        <Box p={15}>
                            <Box className='welcome' p={5}>
                                Badges
                            </Box> 

                            <Grid container spacing={1} justifyContent='center' alignItems='baseline'>
                                <Grid item s={2} class="bg">
                                    <img src={html} width='17%' />
                                    <img src={js} width='17%' />
                                    <img src={node} width='17%' />
                                    <img src={reactjs} width='17%' />
                                    <img src={mysql} width='17%' />
                                </Grid>
                            </Grid>
                        </Box>
                        
                        

                    </Grid>

                </Grid>
            </Box>
    )
};

export default AboutMe;