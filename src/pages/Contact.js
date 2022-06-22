import React from 'react';
import { Box, Divider, Grid, Typography, TextField, IconButton } from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';
import { FaPaperPlane } from "react-icons/fa";


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
                    <Container>
                        <p className='name'>If you have any questions, fill out this form and I will get back to you as soon as I can. </p>
                        <Box textAlign='center' p={5}>
                            <TextField fullWidth
                                required
                                id="outlined-required"
                                label="Email"
                                
                            />
                        </Box>
                        <Box textAlign='center' p={5}>
                            <TextField fullWidth
                                required
                                multiline
                                id="outlined-multiline-static"
                                label="Any Questions?"
                                rows={4}
                            />
                        </Box>
                        <IconButton className='submit' >
                           <FaPaperPlane />
                        </IconButton>
                    </Container>
                </Grid>

            </Grid>
        </Box>
    )
};

export default Contact;