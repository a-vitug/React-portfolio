import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, styled } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { FaGithub, FaInfoCircle, } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Noteful from '../img/noteful.png';
import Ohmybooks from '../img/ohmybooks.png';
import Mealplanner from '../img/mealplanner.png';
import Passwordgen from '../img/passwordgen.png';
import Teamprofilegen from '../img/teamprofilegen.png';

function Portfolio() {
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

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
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
                                    <Tab data-aos="fade-left" value="1"> noteful </Tab>
                                    <Tab data-aos="fade-left" value="2"> password gen </Tab>
                                    <Tab data-aos="fade-left" value="3"> oh my, books! </Tab>
                                    <Tab data-aos="fade-left" value="4"> meal planner </Tab>
                                    <Tab data-aos="fade-left" value="5"> team profile gen </Tab>
                            </TabsUnstyled>
                        </Box>

                        <TabPanel mr='50px' value="1" >
                            <Card  sx={{ maxWidth: 645, }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={Noteful}
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
                                        image={Passwordgen}
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
                                        image={Ohmybooks}
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
                                        image={Mealplanner}
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
                                        image={Teamprofilegen}
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

export default Portfolio;