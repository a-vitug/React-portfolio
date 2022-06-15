import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

import '../App.css'


function Contact() {

    return (
        <Box p={7}>
            <Grid container spacing={1}>
                <Grid item xs={1} m={10} color='#555555' fontSize={35}>
                    <p> c </p>
                    <p> o </p>
                    <p> n </p>
                    <p> t </p>
                    <p> a </p>
                    <p> c </p>
                    <p> t </p>
                    
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    )
};

export default Contact;