import React from 'react';
import { Box, Divider, Grid, 
    Drawer,
    CssBaseline,
    AppBar,
    Grow,
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

                        <Box p={10} textAlign='center'>
                            <Grid container spacing={1} justifyContent='center' alignItems='center'>

                                <Grid item s={10} md={8} lg={7}>
                                    
                                    <Box className='bio' fontSize={20}>
                                        <p>My name is Allyson Vitug. I am a <span> &lt; Full Stack Developer /&gt; </span> from Anaheim, CA. </p>
                                        <p>A first generational woman of color breaking into tech with passion for creating webpages.... </p>
                                    </Box>

                                </Grid>

                                <Grid item s={2} md={4} lg={5}>
                                    
                                </Grid>

                            </Grid>
                                <Parallax speed={-5}>
                                    <img src='./images/me.png' height='60%' width='60%' />
                                </Parallax>

                        </Box>

                        
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