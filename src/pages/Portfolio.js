import { Box, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, } from '@mui/material';
import '../App.css'
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect, useMemo } from 'react'

import Noteful from '../img/noteful.png';
import Ohmybooks from '../img/ohmybooks.png';
import Mealplanner from '../img/mealplanner.png';
import Passwordgen from '../img/passwordgen.png';
import Teamprofilegen from '../img/teamprofilegen.png';

function Portfolio() {

    const itemData = [
        {
            img: Noteful,
            title: 'Noteful',
            github: 'https://github.com/a-vitug/react-app',
            site: 'https://noteful5.herokuapp.com/',
        },
        {
            img: Passwordgen,
            title: 'Password Generator',
            github: 'https://github.com/a-vitug/Password-Gen',
        },
        {
            img: Mealplanner,
            title: 'Meal Planner',
            github: 'https://github.com/Famesmyname/Ingredient-to-Meal-Planner',
            site: 'https://famesmyname.github.io/Ingredient-to-Meal-Planner/',
        },         
        {
            img: Ohmybooks,
            title: 'Oh my, Books!',
            github: 'https://github.com/mrjeoffrey/ohmybooks',
            site: 'https://ohmybooks.herokuapp.com/',
        },
        {
            img: Teamprofilegen,
            title: 'Team Profile Generator',
            github: 'https://github.com/a-vitug/hw10_teamprofilegen',
        },
    ];


    return (
        <Box p={7}>
            <Grid container spacing={10} rowSpacing={1} display='flex'>
                <Grid item s={1} md={2} m={3} ml='auto' className='link divide' fontSize={35} >
                    <p> p </p>
                    <p> o </p>
                    <p> r </p>
                    <p> t </p>
                    <p> f </p>
                    <p> o </p>
                    <p> l </p>
                    <p> i </p>
                    <p> o </p>
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item s={8} md={9} ml='auto' >

                        <ImageList variant="masonry" cols={2} gap={40} >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} sx={{ maxWidth: 645, minWidth: 250, }} className='polaroid'>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    position='below'
                                    actionPosition='right'
                                    sx={{ fontFamily: 'inconsolata', textAlign: 'center', fontWeight: 'bold' }}
                                    actionIcon={
                                        <Box display='flex'>
                                            <IconButton aria-label="github" href={`${item.github}`}>
                                                <FaGithub />
                                            </IconButton>
                                            
                                            <IconButton aria-label="site" href={`${item.site}`}>
                                                <FaInfoCircle />
                                            </IconButton>
                                        </Box>
                                    }
                                />
                                </ImageListItem>
                              ))}
                        </ImageList>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio;