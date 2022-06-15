import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

import '../App.css'


function Projects() {

    return (
        <Box p={7}>
            <Grid container spacing={1}>
                <Grid item xs={1} m={10} color='#555555' fontSize={35}>
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

                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    )
};

export default Projects;