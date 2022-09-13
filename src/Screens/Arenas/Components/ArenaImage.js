import React from 'react';
import {
    Box, Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    mainHead: {
        fontFamily: ["Motserrat", "sans-serif"],
        fontSize: '2.4rem !important',
        lineHeight: '60px !important',
        fontWeight: '550 !important',
        textTransform: 'upperCase',
        width: '-webkit-fill-available !important',
        color: 'white',
        margin: '0px 5.8vw !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '2.1rem !important',
            lineHeight: '55px !important',
            fontWeight: '550 !important',
            // textAlign: 'left',
            margin: '0px 40px !important',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.8rem !important',
            lineHeight: '40px !important',
            fontWeight: '550 !important',
            // textAlign: 'left',
            marginBottom: '10px !important'
        },
        [theme.breakpoints.down("m")]: {
            margin: '0px 20px !important',
        }
    },
    breif: {
        // width: '60vw',
        height: 'auto',
        // minWidth: '900px',
        fontSize: '1.3rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        // textAlign: 'left',
        margin: '0px  5.8vw !important',
        marginBottom: '60px !important',
        textShadow: '0 3px 12px rgb(0 0 0 / 50%) !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.2rem !important',
            lineHeight: '30px',
            // textAlign: 'left',
            margin: '0px 40px !important',
            marginBottom: '5px !important',
            // width: '70vw',
            // minWidth: '580px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1rem !important',
            lineHeight: '30px',
            // textAlign: 'left',
            // width: '90vw',
            // minWidth: '250px',
            marginBottom: '10px !important',
        },
        [theme.breakpoints.down("m")]: {
            margin: '0px 20px !important',
        }
    },
}));

const ArenaImage = ({ Bg, heading, description, reverse }) => {
    const classes = useStyles();

    const MainContainer = styled(Box)(({ theme }) => ({
        height: '750px',
        width: '100%',
        marginBottom: '75px',
        // paddingBottom: '20px',
        backgroundImage: `-webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.7), hsla(0, 0%, 100%, 0) 80%),url(${Bg})`,
        backgroundSize: 'auto, cover',
        backgroundPosition: '0px 0px, 50% 50%',
        backgroundAttachment: 'scroll, scroll',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'flex-start',
        // backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("sm")]: {
            height: '500px',
            // paddingBottom: '40px'
        },
        [theme.breakpoints.down("m")]: {
            height: '400px',
            marginBottom: '40px',
            // paddingBottom: '20px'
        },
        // [theme.breakpoints.down("md")]: {
        //     backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), hsla(0, 0%, 100%, 0) 80%),url(${Bg})`,
        //     backgroundSize: 'auto, cover,cover',
        //     backgroundPosition: '0px 0px, 82% 0%,50% 0%',
        //     backgroundRepeat: 'repeat,no-repeat,repeat-y'
        // },
    }))



    return (
        <MainContainer>
            <Typography className={classes.mainHead} style={{ textAlign: `${reverse ? 'left' : 'right'}` }} >{heading}</Typography>
            <Typography className={classes.breif} style={{ textAlign: `${reverse ? 'left' : 'right'}` }} > {description} </Typography>
        </MainContainer>
    )
}

export default ArenaImage