import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Card, CardActionArea, CardContent, CardMedia, IconButton, Tab, Tabs, styled } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { Parallax } from 'react-scroll-parallax';
import { FaGithub, FaGithubAlt, FaInfoCircle, } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, } from "react-icons/tb";

function Home() {

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

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const Tab = styled(TabUnstyled)`
        font-family: 'Ibarra Real Nova', serif;
        border: none;
        color: #CDC9C3;
        background-color: transparent;
        margin: 10px 6px;
        padding: 15px 17px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 1.5rem;

        &:hover {
            border: 3px solid #F7F4EC;
            border-radius: 20px;
          }
    `;

    return (
        <>
            <Box className='greet' height='85vh' p={30} >
                <Parallax speed={-15}>
                    <div className='hello'>
                        <span>  {texts} </span>
                    </div>
                </Parallax>
            </Box>

            <Box p={10} height='70vh' bgcolor='#F7F4EC' >

                <Box className='aboutmetitle' href='#aboutme'></Box>
                
                <Grid container spacing={1}  rows={{ md: 10, lg: 12 }} textAlign='center' justifyContent='center' alignItems='center'>
                    

                    <Grid item xs={9} s={7} md={7} lg={7}>
                        <Box fontSize={21}>
                            <Parallax speed={10}>
                                <Box p={6} className='aboutmebox' id='aboutme'>
                                    <p>My name is Allyson Vitug. I am a <span> &lt; Full Stack Developer /&gt; </span> from Anaheim, CA. <br></br>
                                        A first generational woman of color breaking into tech with passion for creating and designing webpages.... </p>
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
                    <Grid item xs={3} md={5} lg={5}>
                        <img src='./images/me.jpg' height='60%' width='60%' />
                    </Grid>
                        
                    
                </Grid>
            </Box>

            <Box p={10} mt='65px'>
                <RouteLink to='/portfolio'>
                    <Box className='portfoliotitle'></Box>
                </RouteLink>

                <Box className='inconsolata' mt='200px' sx={{  bgcolor: 'background.paper', display: 'flex', flexGrow: 2, justifyContent: 'space-evenly'}}>
                    <TabContext centered value={value} >
                        <Box justifyContent='center' textAlign='center'>
                            <TabsUnstyled centered 
                                // orientation="vertical"
                                value={value}
                                onChange={handleChange}
                                // sx={{ borderRight: 1, borderColor: 'divider' }}
                                // styles={{ fontFamily: "'Inconsolata', monospace" }}
                            >
                                    <Tab value="1"> noteful </Tab>
                                    <Tab value="2"> password gen </Tab>
                                    <Tab value="3"> oh my, books! </Tab>
                                    <Tab value="4"> meal planner </Tab>
                                    <Tab value="5"> team profile gen </Tab>
                            </TabsUnstyled>
                        </Box>

                        <TabPanel mr='50px' value="1" >
                            <Card  sx={{ maxWidth: 645, }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/noteful.png"
                                        alt="noteful"
                                    />
                                    <CardContent>
                                        <IconButton href='https://github.com/a-vitug/react-app'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton href='https://noteful5.herokuapp.com/'>
                                            <FaInfoCircle />
                                        </IconButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                        
                        <TabPanel value="2">
                            <Card sx={{ maxWidth: 645 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/passwordgen.png"
                                        alt="password gen"
                                    />
                                    <CardContent>
                                        <IconButton href='https://github.com/a-vitug/Password-Gen'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton>
                                            <FaInfoCircle />
                                        </IconButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>

                        <TabPanel value="3">
                            <Card sx={{ maxWidth: 645 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/ohmybooks.png"
                                        alt="oh my, books!"
                                    />
                                    <CardContent>
                                        <IconButton href='https://github.com/mrjeoffrey/ohmybooks'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton href='https://ohmybooks.herokuapp.com/'>
                                            <FaInfoCircle />
                                        </IconButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>

                        <TabPanel value="4">
                            <Card sx={{ maxWidth: 645 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/mealplanner.png"
                                        alt="meal planner"
                                    />
                                    <CardContent>
                                        <IconButton href='https://github.com/Famesmyname/Ingredient-to-Meal-Planner'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton href='https://famesmyname.github.io/Ingredient-to-Meal-Planner/'>
                                            <FaInfoCircle />
                                        </IconButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>

                        <TabPanel value="5">
                            <Card sx={{ maxWidth: 645 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/teamprofilegen.png"
                                        alt="team profile gen"
                                    />
                                    <CardContent>
                                        <IconButton href='https://github.com/a-vitug/hw10_teamprofilegen'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton>
                                            <FaInfoCircle />
                                        </IconButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>

                    </TabContext>
                </Box>
            
            </Box>
        </>
    )
}

export default Home;