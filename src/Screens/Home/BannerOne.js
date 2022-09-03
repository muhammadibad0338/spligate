import React, { useState, useEffect } from 'react'
import {
    AppBar,
    Container,
    Toolbar,
    IconButton,
    Box,
    Button,
    List,
    Divider,
    Typography,
    Grid
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import bg1 from "../../Assets/Images/homeBanner1.png"
import darkBg from "../../Assets/Images/homeDarkbg.png"
import llogo from "../../Assets/Images/banner1logo.png"
import { maxWidth } from '@mui/system'

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
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxHeight: '2160px',
        [theme.breakpoints.down("fl")]: {
            height: '100vh',
            minHeight: '900px',
        },
        [theme.breakpoints.down("md")]: {
            minHeight: '800px',
            justifyContent: "center",
            alignItems: 'center'
        }
    },
    llogo: {
        display: 'inline-block',
        height: 'auto',
        maxHeight: 'none',
        minHeight: '0px',
        maxWidth: '400px',
        paddingLeft: '35px',
        [theme.breakpoints.down("md")]: {
            display: 'block',
            maxWidth: '300px',
            marginBottom: '40px',
        }
    }
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
            <Grid item xs={12} className={classes.banner1MainCntnr}   >
                {/* <div style={{
                    willChange:'transform',
                    transform:`translate3d(0%,${scrollPosition}px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)`,
                    transformStyle:'preserve-3d'
                }} > */}
                <div>
                    <img src={llogo} className={classes.llogo} />
                </div>
                {/* </div> */}
            </Grid>
        </Grid>
    )
}

export default BannerOne