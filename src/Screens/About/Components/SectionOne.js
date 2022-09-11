import React from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import bg1 from "../../../Assets/Images/aboutBanner.png"
import darkBg from "../../../Assets/Images/homeDarkbg.png";

const useStyles = makeStyles((theme) => ({
    banner1: {
        height: '95vh',
        // minHeight:'100%',
        width: '100%',
        backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${bg1}),url(${darkBg})`,
        backgroundSize: 'auto, contain,cover',
        backgroundPosition: '0px 0px, 50% 0%,50% 0%',
        backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'auto,contain,cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${bg1}),url(${darkBg})`,
            backgroundSize: 'auto, contain,cover',
            backgroundPosition: '0px 0px, 50% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y',
            height:'100vh'
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

const SectionOne = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.banner1} >
            <Grid item xs={12} >
                
            </Grid>
        </Grid>
    )
}

export default SectionOne