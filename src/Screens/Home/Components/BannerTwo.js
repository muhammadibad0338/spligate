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
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${bg}),url(${lightBg})`,
            backgroundSize: 'cover, cover',
            backgroundPosition: '50% 50%,50% 50%',
            backgroundRepeat: 'no-repeat,no-repeat',
            backgroundAttachment: 'fixed, scroll',
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


const BannerTwo = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.banner1} >
            <Grid item xs={12}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
            <MainHeading text='PVP PORTAL SHOOTER' sx={{color:'white'}}  />
            </Grid>
        </Grid>
    )
}

export default BannerTwo