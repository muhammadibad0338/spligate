import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import bg1 from "../../../Assets/Images/homeBanner1.png"
import darkBg from "../../../Assets/Images/homeDarkbg.png"
import llogo from "../../../Assets/Images/banner1logo.png"
import MainHeading from '../../../Components/MainHeading'
import TransparentBtn from '../../../Components/TransparentBtn'
import TransparentInput from '../../../Components/TransparentInput'
//animation library
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    banner1: {
        height: '100vh',
        width: '100%',
        backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${bg1}),url(${darkBg})`,
        backgroundSize: 'auto, cover,cover',
        backgroundPosition: '0px 0px, 50% 0%,50% 0%',
        backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'auto,contain,cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${bg1}),url(${darkBg})`,
            backgroundSize: 'auto, auto,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
    banner1MainCntnr: {
        display: 'flex',
        flexDirection: 'column !important',
        alignItems: 'flex-start',
        height: '100vh',
        maxHeight: '2160px',
        minHeight: '700px',
        paddingTop: '10rem',
        [theme.breakpoints.down("fl")]: {
            height: '100vh',
            minHeight: '900px',
            paddingTop: '80px',
        },
        [theme.breakpoints.down("md")]: {
            minHeight: '800px',
            // justifyContent: "center",
            alignItems: 'center',
            paddingTop: '60px'
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: '10rem'
        },
        [theme.breakpoints.down("m")]: {
            paddingTop: '50%'
        }
    },
    llogo: {
        display: 'inline-block',
        flex: '0 auto',
        maxHeight: 'none',
        minHeight: '0px',
        maxWidth: '400px',
        paddingLeft: '35px',
        marginBottom: '40px',
        [theme.breakpoints.down("md")]: {
            display: 'block',
            width: '90%',
            height: 'auto',
            maxWidth: '350px',
            marginBottom: '40px',
        },
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            width: '80%',
            height: 'auto',
            maxWidth: '300px',
            marginBottom: '40px',
        }
    },
    smallerTitle: {
        // '& .MuiTypography-root': {
        fontSize: '1.3rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'left',
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
        // }
    },
}));

const BannerOne = () => {
    const classes = useStyles();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Grid container className={classes.banner1} >
            {/* Tranfron 3d wala is GRID pe lage ga */}
            <Grid item xs={12} className={classes.banner1MainCntnr} 
            >
                <div>
                    <img src={llogo} alt="logo" className={classes.llogo} />
                </div>
                <Box sx={(theme) => ({
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    [theme.breakpoints.down("md")]: {
                        alignItems: 'center'
                    },

                })} >
                    <Fade>
                        <MainHeading text='Play Free Now!' sx={{ color: 'white', marginLeft: { md: '35px', sm: '0px' } }} />
                        <Typography className={classes.smallerTitle} > PORTAL ACROSS PLAYSTATION, XBOX AND PC</Typography>
                        <TransparentBtn
                            sx={(theme) => ({
                                marginBottom: '80px',
                                marginLeft: '35px',
                                [theme.breakpoints.down("md")]: {
                                    marginBottom: '60px',
                                    marginLeft: '0px',
                                },
                                [theme.breakpoints.down("sm")]: {
                                    marginBottom: '20px',
                                    padding: '7px 15px',
                                    marginLeft: '0px',
                                }
                            })}
                            text='Play Now' />
                    </Fade>
                    <Typography className={classes.smallerTitle} sx={{ display: { sm: 'flex', xs: 'none' } }} > STAY UP-TO-DATE ON SPLITGATE</Typography>
                    <Box sx={(theme) => ({
                        minWidth: '570px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: '35px',
                        [theme.breakpoints.down("md")]: {
                            marginLeft: '0px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        },
                        [theme.breakpoints.down('sm')]: {
                            minWidth: 'auto',
                            marginLeft: '0px',
                        }
                    })} >
                        <Fade>
                            <Box sx={{ display: { sm: 'flex', xs: 'none' } }} >
                                <TransparentInput placeHolder='EMAIL' />
                                <TransparentBtn text='SUBMIT' />
                            </Box>
                            <TransparentBtn
                                sx={{ marginTop: { md: '0px', xs: '10px', m: '20px' } }}
                                Icon={() => <PlayArrowIcon />}
                            />
                        </Fade>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default BannerOne