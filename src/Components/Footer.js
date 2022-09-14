import React from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo1 from "../Assets/Images/footerLogo1.png"
import logo2 from "../Assets/Images/footerLogo2.png"
import logo3 from "../Assets/Images/footerLogo3.png"
import TransparentInput from './TransparentInput';
import TransparentBtn from './TransparentBtn';
import darkBg from "../Assets/Images/homeDarkbg.png"
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    logoImg1: {
        maxWidth: '175px',
        width: '100%',
    },
    logo2: {
        width: '100%',
        maxWidth: '135px',
        marginBottom: '10px'
    },
    logo3: {
        width: '100%',
        maxWidth: '100px',
        marginLeft: '10px',
        marginBottom: '10px'
    },
    smallerTitle: {
        fontSize: '1.3rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'center',
        marginBottom: '5px !important',
        marginLeft: '35px !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.2rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '5px !important',
            marginLeft: '0px !important'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '10px !important',
            marginLeft: '0px !important'
        }
    },
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
            backgroundImage: `url(${darkBg})`,
            backgroundSize: 'auto, auto,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
        padding: '60px 0px'
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner} >
            <Fade Big >
                <Grid container  >
                    <Grid item xs={12} md={6} sx={(theme) => ({
                        height: '100%',
                        display: 'flex',
                        paddingLeft: '1.9vw',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        [theme.breakpoints.down("md")]: {
                            justifyContent: 'center',
                            marginBottom: '20px'
                        },
                        [theme.breakpoints.down("m")]: {
                            flexDirection:'column',
                            alignItems:'center',
                            paddingLeft: '0px',
                            justifyContent:'center',
                            marginBottom: '10px'
                        }
                    })} >
                        <img className={classes.logoImg1} src={logo1} />
                        <Box sx={(theme) => ({
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '20px',
                            [theme.breakpoints.down("m")]: {
                                marginLeft:'0px'
                            }
                        })}>
                            <img className={classes.logo2} src={logo2} />
                            <img className={classes.logo3} src={logo3} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={(theme) => ({
                        height: '100%',
                        display: 'flex',
                        paddingRight: '1.9vw',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        [theme.breakpoints.down("md")]: {
                            alignItems: 'center'
                        },
                        // backgroundColor:'yellow'
                    })} >
                        <Typography className={classes.smallerTitle}  > STAY UP-TO-DATE ON SPLITGATE</Typography>
                        <Box sx={{ display: 'flex' }} >
                            <TransparentInput placeHolder='EMAIL' />
                            <TransparentBtn text='SUBMIT' />
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    )
}

export default Footer