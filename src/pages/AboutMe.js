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

import bg1 from '../img/background.png';
import tealbg from '../img/tealbg.png';
import whitebg from '../img/whitebg.png';
import beigebg from '../img/beigebg.png';


function AboutMe(props) {

    const drawerWidth = 240;
    const { ref } = useParallax({ speed: -20 });
    const hello = useParallax<HTMLDivElement>({
        // scaleX: [1, 0, 'easeInQuad'],
        easing: [1, -0.75, 0.5, 1.34],
    });

    const welcome = useParallax<HTMLDivElement>({
        scaleX: [4, -10, 'easeInQuad'],
    });

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

                        <Box p={20}>
                            <Parallax 
                                translateY={['-100px', '0px']}
                                scaleY= "4, -10, 'easeInQuad'"
                            >
                                <p className='welcome' ref={welcome.ref}>Welcome to my portfolio!</p>
                            </Parallax>
                        </Box>
                        
                        <Box p={5}>
                            <ParallaxBanner layers={[{ image: {tealbg}, speed: -250 }]} className="aspect-[2/1]">
                                <div ref={ref} class="bg">
                                    <img src={tealbg} width='100%' height='300' />
                                </div>
                            </ParallaxBanner>
                        </Box>
                        
                        <Box p={20}>
                            <Parallax>
                                <p className='name'>I am an aspiring</p>
                                <p className='welcome'>Software Developer</p>
                            </Parallax>
                        </Box>
                        
                        

                    </Grid>

                </Grid>
            </Box>
    )
};

export default AboutMe;