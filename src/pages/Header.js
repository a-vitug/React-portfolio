import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { FaBars, FaUserGraduate, } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdAssignment, MdContactPhone } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { Box, Drawer, IconButton, Popover, Stack, Tooltip,} from '@mui/material';
import '../App.css';
import { Container } from '@mui/system';



function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return(
        <Container maxWidth='xl'>
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing='100px'>
            
            {/* <img src='./images/logo.png' width={150} /> */}
            <Box className='logo-text'>
                <p> &lt; a-vitug /&gt; </p>
            </Box>

            <Box sx={{ p: 2 }}>
                <RouteLink to='/'>
                    <Tooltip title='Home' arrow>
                        <IconButton sx={{ mr: 2 }}  className='home'>
                            <IoHome color='#D9E4DD' size={35} />
                        </IconButton>
                    </Tooltip>
                </RouteLink>

                {/* <RouteLink to='/aboutme'>
                    <Tooltip title='About Me'>
                        <IconButton sx={{ mr: 2 }}  className='aboutme'>
                            <BsPersonBoundingBox color='#D9E4DD' size={33} />
                        </IconButton>
                    </Tooltip>
                </RouteLink> */}

                <RouteLink to='/portfolio'>
                    <Tooltip title='Portfolio'>
                        <IconButton sx={{ mr: 2 }} className='portfolio' >
                            <MdAssignment color='#D9E4DD' size={38} />
                        </IconButton>
                    </Tooltip>
                </RouteLink>

                <RouteLink to='/contact'>
                    <Tooltip title='Contact'>
                        <IconButton className='contact' >
                            <MdContactPhone color='#D9E4DD' size={36} />
                        </IconButton>
                    </Tooltip>
                </RouteLink>
            </Box>
            

        </Stack>
        </Container>
    )
}

export default Header;