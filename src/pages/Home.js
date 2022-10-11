import React, { useEffect, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Box, Button, Divider,
    Grid,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Popover,
    Typography,
} from '@mui/material';

import { 
    useParallax, 
    Parallax, 
    ParallaxBanner,
    ParallaxProvider,
} from 'react-scroll-parallax';

import '../App.css'
import { Container } from '@mui/system';
import { FaPaperPlane, FaGithub, FaGithubAlt, FaInfoCircle, } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoHome, IoMail } from "react-icons/io5";

import bg from '../img/bg.png';
import html from '../img/badges/html-css.png';
import js from '../img/badges/javascript-and-jquery.png';
import node from '../img/badges/node-js-and-express.png';
import reactjs from '../img/badges/react-js.png';
import mysql from '../img/badges/sql-and-nosql-databases.png';

import { useSpring,  animated } from '@react-spring/web';


function Home() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    
    // const [open, toggle] = useState(false)
    // const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    //     loop: { reverse: true },
    //     from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
    //     to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
    //     config: { duration: 3000 },
    // }));

    const [isLoop, setIsLoop] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [texts, setTexts] = useState('');
    const [num, setNum] = useState(300 - Math.random() * 100);
    const hello = [ 'Hello', 'Kamusta', 'Bonjour', 'こんにちは', '안녕하세요'];
    const stop = 2000;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, num)
        
        return () => { clearInterval(timer) };
    }, [texts])

    const time = () => {
        let i = isLoop % hello.length;
        let isTexts = hello[i];
        let updateText = isRepeat ? isTexts.substring(0, texts.length - 1) :  isTexts.substring(0, texts.length + 1);
        
        setTexts(updateText);

        if (isRepeat) {
            setNum(prevNum => prevNum / 2)
        }

        if (!isRepeat && updateText === isTexts) {
            setIsRepeat(true);
            setNum(stop);
        } else if (isRepeat && updateText === '') {
            setIsRepeat(false);
            setIsLoop(isLoop + 1);
            setNum(600);
        }
    }

    
    return (
        <>
            <Box height='85vh' p={30} >
                <Parallax speed={-15}>
                    <div className='hello'>
                        <span>  {texts} </span>
                    </div>
                </Parallax>
            </Box>

            <Box p={10} height='70vh' bgcolor='#F7F4EC' >

                <Box className='aboutmetitle'></Box>
                
                
                <Grid container spacing={1} textAlign='center' justifyContent='center' alignItems='center'>
                    
                        <Grid item s={8} md={7} lg={7}>
                            <Box fontSize={21}>
                                <Parallax speed={10}>
                                    <Box p={6} className='aboutmebox'>
                                        <p>My name is Allyson Vitug. I am a <span> &lt; Full Stack Developer /&gt; </span> from Anaheim, CA. <br></br>
                                         A first generational woman of color breaking into tech with passion for creating webpages.... </p>
                                    </Box>
                                </Parallax>

                                <Parallax speed={7}>
                                    <Box p={2} className='contactbox' >
                                        {/* <p className='inconsolata link'>
                                            Want to work with me? Let's connect!
                                        </p> */}

                                        <IconButton href='https://github.com/a-vitug'>
                                            <FaGithubAlt className='link' />
                                        </IconButton>
                                        <IconButton href='https://www.linkedin.com/in/vtg-allyson/'>
                                            <FiLinkedin className='link' />
                                        </IconButton>
                                        <a href='mailto:allysonvitugg@gmail.com'>
                                            <IconButton>
                                                <IoMail className='link' />
                                            </IconButton>    
                                        </a>
                                    </Box>
                                </Parallax>

                            </Box>
                        </Grid>
                    
                        <Grid item s={1} md={5} lg={5}>
                            <Parallax speed={-5}>
                                <img src='./images/me.jpg' height='60%' width='60%' />
                            </Parallax>
                        </Grid>
                    
                </Grid>
            </Box>

            <Box p={10} mt='65px'>
                <RouteLink to='/portfolio'>
                    <Box className='portfoliotitle'></Box>
                </RouteLink>
                
                <Box className='inconsolata'>
                    <ul>
                        <li><a> noteful </a></li>
                        <li><a> password gen </a></li>
                        <li><a> meal planner </a></li>
                        <li><a> oh my, books! </a></li>
                        <li><a> team profile gen </a></li>
                    </ul>
                </Box>
            
            </Box>

                
                {/* <Box p={5}>
                    <ParallaxBanner layers={[{ image: {tealbg}, speed: -250 }]} className="aspect-[2/1]">
                        <div ref={ref} class="bg">
                            <img src={bg} width='100%' height='300' />
                        </div>
                    </ParallaxBanner>
                </Box> */}

                {/* <Box p={15}>
                    <Box className='welcome' p={5}>
                    &lt; badges /&gt;
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
                </Box> */}
                    
        </>
    )
}

export default Home;