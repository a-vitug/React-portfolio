import { useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Typography,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';
import { FaGithub, FaInfoCircle } from "react-icons/fa";

import React, { useState, useEffect, useMemo } from 'react'



function Projects() {

    const theme = useTheme();

    const itemData = [
        {
            img: './images/noteful.png',
            title: 'Noteful',
            github: 'https://github.com/a-vitug/react-app',
            site: 'https://noteful5.herokuapp.com/',
        },
        {
            img: './images/passwordgen.png',
            title: 'Password Generator',
            github: 'https://github.com/a-vitug/Password-Gen',
        },
        {
            img: './images/mealplanner.png',
            title: 'Meal Planner',
            github: 'https://github.com/Famesmyname/Ingredient-to-Meal-Planner',
            site: 'https://famesmyname.github.io/Ingredient-to-Meal-Planner/',
        },         
        {
            img: './images/ohmybooks.png',
            title: 'Oh my, Books!',
            github: 'https://github.com/mrjeoffrey/ohmybooks',
            site: 'https://ohmybooks.herokuapp.com/',
        },
        {
            img: './images/teamprofilegen.png',
            title: 'Team Profile Generator',
            github: 'https://github.com/a-vitug/hw10_teamprofilegen',
        },
    ];


    return (
        <Box p={7}>
            <Grid container spacing={10} rowSpacing={1}>
                <Grid item s={1} md={2} m={3} ml='auto' color='#555555' fontSize={35}>
                    <p> p </p>
                    <p> r </p>
                    <p> o </p>
                    <p> j </p>
                    <p> e </p>
                    <p> c </p>
                    <p> t </p>
                    <p> s </p>
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item s={8} md={9} ml='auto' >

                        <ImageList variant="masonry" cols={2} gap={40}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className='polaroid'>
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

export default Projects;