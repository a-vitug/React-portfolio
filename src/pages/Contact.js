import React from 'react';
import { Box, Divider, Grid, Typography, TextField, IconButton } from '@mui/material';
import { FaGithub, FaGithubAlt, FaInfoCircle, } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

import '../App.css'
import { Container } from '@mui/system';


function Contact() {

    return (
        <Box p={7}>
            <Grid container rowSpacing={1} spacing={10} >
                <Grid item s={1} md={2} m={3} ml='auto' className='link' fontSize={35}>
                    <p> c </p>
                    <p> o </p>
                    <p> n </p>
                    <p> t </p>
                    <p> a </p>
                    <p> c </p>
                    <p> t </p>
                    
                </Grid>

                <Divider light orientation="vertical" flexItem></Divider>

                <Grid item s={6} md={8} ml='auto'>
                    <Box className='contactme' mt={20} p={5} textAlign='center'>
                        <p className='interest'>Interested in a collab? You can contact me through... </p>
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
                </Grid>
                

                {/* <Grid item s={7} md={9} ml='auto'>
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
                </Grid> */}

            </Grid>
        </Box>
    )
};

export default Contact;