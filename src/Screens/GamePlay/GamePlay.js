import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Container
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import MainHeading from '../../Components/MainHeading';
import State from "../../State/GamePlay.json";
import GalleryGrid from './Components/GalleryGrid';

const useStyles = makeStyles((theme) => ({
    banner: {
        height: 'auto',
        width: '100%',
        backgroundImage: `url(${darkBg})`,
        backgroundSize: 'auto, cover,cover',
        backgroundPosition: '0px 0px, 50% 0%,50% 0%',
        backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'auto,cover,cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${darkBg})`,
            backgroundSize: 'auto, auto,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
}));

const GamePlay = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}  >
            <MainHeading text={State.mainHead} sx={{
                color: 'white',
                textAlign: 'center',
                textShadow: '0 3px 12px rgb(0 0 0 / 50%)',
                fontWeight: '800',
                padding: { lg: '60px 0px', sm: '30px 0px', xs: '10px 0px' }
            }} />
            <Container maxWidth="lg" >
                <Grid container >
                    <Grid item xs={12} >
                    <GalleryGrid 
                         img1='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2dcf93fed30da947e0abc_HighresScreenshot00021.jpg'
                         img2='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2dd753cbe191fe0c4f141_HighresScreenshot00006.jpg'
                         img3='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2dd8c329275734369ed44_HighresScreenshot00012.jpg'
                         img4='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2dd809897569cd9666e1a_HighresScreenshot00008.jpg'
                         img5='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2dd9950c0230decb2287c_HighresScreenshot00016.jpg'
                    />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default GamePlay