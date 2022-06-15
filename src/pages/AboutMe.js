import React from 'react';
import { Box, Divider, Grid, 
    Drawer,
    CssBaseline,
    AppBar,
} from '@mui/material';

import '../App.css'
import { Container } from '@mui/system';

const drawerWidth = 240;

function AboutMe(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const sidebar = (
        <Box p={7}>
            <Grid container spacing={1}>
                <Grid item xs={1} m={10} color='#555555' fontSize={35}>
                    <p> a </p>
                    <p> b </p>
                    <p> o </p>
                    <p> u </p>
                    <p> t </p>
                    <br></br>
                    <p> m </p>
                    <p> e </p>
                </Grid>

                {/* <Divider light orientation="vertical" flexItem></Divider> */}

                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    );


    return (
        <Container sx={{ display: 'flex' }}>
            <br></br>
            <Drawer
                sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
                }}
                PaperProps={{style: {border: 'none'}}}
                variant="permanent"
                anchor="left"
            >
                <Box mt={5} p={13} item  color='#555555' fontSize={35}>
                    <p> a </p>
                    <p> b </p>
                    <p> o </p>
                    <p> u </p>
                    <p> t </p>
                    <br></br>
                    <p> m </p>
                    <p> e </p>
                    <Divider orientation="vertical" flexItem></Divider>

                </Box>
            
                
            </Drawer>


            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                
                hi
            </Box>
        </Container>
    )
};

export default AboutMe;