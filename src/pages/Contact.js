import React from 'react';
import { Box, Divider, Grid, Typography, TextField, IconButton } from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';
import { FaPaperPlane } from "react-icons/fa";


function Contact() {

    return (
        <Box p={7}>
            <Grid container rowSpacing={1} spacing={10} >
                <Grid item s={1} md={2} m={3} ml='auto' color='#555555' fontSize={35}>
                    <p> c </p>
                    <p> o </p>
                    <p> n </p>
                    <p> t </p>
                    <p> a </p>
                    <p> c </p>
                    <p> t </p>
                    
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item s={7} md={9} ml='auto'>
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
                    <Container>
                        <Box className='contactbox' mt={20} p={5} textAlign='center'>
                            <p className='inconsolata'>
                                github:
                                <a className='link' href='https://github.com/a-vitug'> a-vitug </a>
                            </p>
                            <p className='inconsolata'>
                                linkedIn:
                                <a className='link' href='https://www.linkedin.com/in/vtg-allyson/'> vtg-allyson </a>
                            </p>
                        </Box>
                    </Container>
                </Grid>

            </Grid>
        </Box>
    )
};

export default Contact;