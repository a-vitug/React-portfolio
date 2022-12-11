import React from 'react';
import { Box, Divider, Grid, IconButton } from '@mui/material';
import { FaGithubAlt, } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import '../App.css'


function Contact() {

    return (
        <Box p={7}>
            <Grid container rowSpacing={1} spacing={10} >
                <Grid item s={1} md={2} m={3} ml='auto' className='link divide' fontSize={35}>
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

            </Grid>
        </Box>
    )
};

export default Contact;