import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import bg from "../../../Assets/Images/homeBanner2.jpg"
import lightBg from "../../../Assets/Images/banner2bg.png"
import MainHeading from '../../../Components/MainHeading';


const useStyles = makeStyles((theme) => ({
    banner1: {
        height: '100vh',
        width: '100%',
        backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${lightBg}),url(${bg})`,
        backgroundSize: 'cover, cover',
        backgroundPosition: '50% 50%,50% 50%',
        backgroundRepeat: 'no-repeat,no-repeat',
        backgroundAttachment: 'scroll, fixed, scroll',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'cover, cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${lightBg}),url(${bg})`,
            backgroundSize: 'cover, cover',
            backgroundPosition: '50% 50%,50% 50%',
            backgroundRepeat: 'no-repeat,no-repeat',
            backgroundAttachment: 'scroll, fixed, scroll',
        },
        [theme.breakpoints.down("sm")]: {
            height: 'auto',
            minHeight:'500px'
        },
    },
    smallerTitle: {
        // '& .MuiTypography-root': {
        fontSize: '1.3rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'center',
        textShadow:'0 3px 6px rgba(0 0 0 / 500) !important',
        opacity: 1,
        marginBottom: '5px !important',
        marginLeft: '35px !important',
        maxWidth:'60% !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.2rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '5px !important',
            marginLeft: '0px !important',
            maxWidth:'75% !important',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '10px !important',
            marginLeft: '0px !important',
            maxWidth:'90% !important',
        }
        // }
    },
}));


const BannerTwo = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.banner1} >
            <Grid item xs={12}
                sx={{ display: 'flex',flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center' }}
            >
                <MainHeading text='PVP PORTAL SHOOTER' sx={{ color: 'white' }} />
                <Typography className={classes.smallerTitle} >
                    Rewire your brain to frag with portals.
                    Use portals to outsmart and outplay your opponents.
                    Flank them from behind.
                    Use momentum to fly through the air to new locations.
                    Or quickly flee from a dangerous position.</Typography>
            </Grid>
        </Grid>
    )
}

export default BannerTwo