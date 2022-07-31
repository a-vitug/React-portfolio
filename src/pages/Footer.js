import { Box, Divider, Grid, 
    Drawer,
    CssBaseline,
    AppBar,
    TextField,
    Icon,
    IconButton
} from '@mui/material';


import { Container } from '@mui/system';
import { FaPaperPlane, FaGithubAlt } from "react-icons/fa";
import { FiHeart, FiLinkedin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
    <Grid container className='contactbox' mt={20} p={2} rowSpacing={1} spacing={10} 
        direction='row'
        justifyContent="space-between" 
        alignItems="center"
    >        
    
        <Grid item className='inconsolata link'></Grid>

        <Grid item  className='inconsolata link'>
            Made with ♡ by Allyson Vitug 
        </Grid>

        <Grid item>
            <IconButton href='https://github.com/a-vitug'>
                <FaGithubAlt className='link'/>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/vtg-allyson/'>
                <FiLinkedin className='link' />
            </IconButton>
            <a href='mailto:allysonvitugg@gmail.com'>
                <IconButton>
                    <IoMail className='link' />
                </IconButton>    
            </a>
            
        </Grid>

            
        
    </Grid>
    );
}

export default Footer;