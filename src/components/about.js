import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { FaGithubAlt,  } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Me from '../img/me.JPG';

function About () {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <Box p={10} bgcolor='#F7F4EC' >

            <Box className='aboutmetitle' href='#aboutme'></Box>

            <Grid container spacing={1} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}} textAlign='center' justifyContent='center' alignItems='center'>
                <Grid item xs={3} md={5} lg={5} display='flex' justifyContent='center'>
                    <img src={Me}  float='right' height='60%' width='60%'
                        data-aos="fade-up" 
                        data-aos-duration="8000"
                        data-aos-offset="350"
                        data-aos-anchor-placement="center-bottom"
                    />
                </Grid>

                <Grid item xs={9} s={7} md={7} lg={7}>
                    <Box fontSize={21}>
                        <Parallax speed={10}>
                            <Box p={6} className='aboutmebox' id='aboutme'>
                                <p data-aos="fade-right"> My name is Allyson Vitug. I am a <span data-aos="zoom-in"> &lt; Full Stack Developer /&gt; </span> from Anaheim, CA. <br></br> </p>
                                    {/* A first generational woman of color breaking into tech with passion for creating and designing webpages... */}
                                <p data-aos="fade-left"> Started the road of breaking into the tech industry when it was introduced to me by people around me also getting into tech. </p>
                                <p data-aos="fade-right"> I graduated a Full Stack Coding Bootcamp at UCI (University of California, Irvine) and have been using other forms of educational sources
                                    to further my knowledge. </p>
                            </Box>
                        </Parallax>

                        <Parallax speed={7}>
                            <Box p={2} className='contactbox' >
                                <IconButton className='icon' href='https://github.com/a-vitug'>
                                    <FaGithubAlt className='link' />
                                </IconButton>
                                <IconButton className='icon' href='https://www.linkedin.com/in/vtg-allyson/'>
                                    <FiLinkedin className='link' />
                                </IconButton>
                                <a href='mailto:allysonvitugg@gmail.com'>
                                    <IconButton className='icon'>
                                        <IoMail className='link' />
                                    </IconButton>    
                                </a>
                            </Box>
                        </Parallax>

                    </Box>
                </Grid>
                
                    
                
            </Grid>
            </Box>
        </>
    )
}

export default About;