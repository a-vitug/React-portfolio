import React from 'react';
import { Box, Divider, Grid, 
    Drawer,
    CssBaseline,
    AppBar,
    TextField, 
    IconButton
} from '@mui/material';

import { 
    useParallax, 
    Parallax, 
    ParallaxBanner,
    ParallaxProvider,
} from 'react-scroll-parallax';

import '../App.css'
import { Container } from '@mui/system';
import { FaPaperPlane, FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";


import bg from '../img/bg.png';
import html from '../img/badges/html-css.png';
import js from '../img/badges/javascript-and-jquery.png';
import node from '../img/badges/node-js-and-express.png';
import reactjs from '../img/badges/react-js.png';
import mysql from '../img/badges/sql-and-nosql-databases.png';



function Home() {
    return (
    <>
        {/* homepage */}
        <h1> hello </h1>
        
        {/* about me */}
        <Box p={7}>


            <Parallax speed={-15}>
                <div className='welcome' > 
                    &lt; a-vitug /&gt;
                </div>
                
            </Parallax>

            <Box p={20} className='ibarra' fontSize={17}>
                <p>A Full Stack Web Developer with a certificate from University of California in Irvine.</p>
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
                        
                        
        </Box>

        {/* contact */}
        <Box p={7}>
            <Container>
                <Box className='contactbox' mt={20} p={5} textAlign='center'>
                    <p className='inconsolata link'>
                        Want to work with me? Let's connect!
                    </p>

                    <IconButton href='https://github.com/a-vitug'>
                        <FaGithubAlt className='link' />
                    </IconButton>
                    <IconButton href='https://www.linkedin.com/in/vtg-allyson/'>
                        <FiLinkedin className='link' />
                    </IconButton>

                    
                </Box>
            </Container>
        </Box>

    </>
    )
}

export default Home;