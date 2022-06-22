import React from 'react';
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


function Projects() {

    const theme = useTheme();

    const itemData = [
        {
            img: 'https://res.cloudinary.com/av-code/image/upload/v1655520824/portfolio/noteful_tvgrzg.png',
            title: 'Noteful',
            github: 'https://github.com/a-vitug/react-app',
            site: 'https://noteful5.herokuapp.com/',
        },
        {
            img: 'https://res.cloudinary.com/av-code/image/upload/v1655520083/portfolio/passwordgen_pvdazo.png',
            title: 'Password Generator',
            github: 'https://github.com/a-vitug/Password-Gen',
        },
        {
            img: 'https://res.cloudinary.com/av-code/image/upload/v1655520967/portfolio/ohmybooks_m3rsgq.png',
            title: 'Oh my, Books!',
            github: 'https://github.com/mrjeoffrey/ohmybooks',
            site: 'https://ohmybooks.herokuapp.com/',
        },
        {
            img: 'https://res.cloudinary.com/av-code/image/upload/v1655520829/portfolio/teamprofilegen_rubdxn.png',
            title: 'Team Profile Generator',
            github: 'https://github.com/a-vitug/hw10_teamprofilegen',
        },
        {
            img: 'https://res.cloudinary.com/av-code/image/upload/v1655520096/portfolio/mealplanner_y9igds.png',
            title: 'Meal Planner',
            github: 'https://github.com/Famesmyname/Ingredient-to-Meal-Planner',
            site: 'https://famesmyname.github.io/Ingredient-to-Meal-Planner/',
        },
    ];

    return (
        <Box p={7}>
            <Grid container spacing={10} pt={9}>
                <Grid item xs={1} m={6} color='#555555' fontSize={35}>
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

                <Grid item xs={9} sx={{ display: 'flex', height: 600, overflowY: 'scroll' }}>

                        <ImageList variant="masonry" cols={2} gap={40}>
                            {itemData.map((item) => (
                                <ImageListItem  key={item.img}>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={item.title}
                                    position='below'
                                    actionPosition='right'
                                    fontWeight='bold'
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