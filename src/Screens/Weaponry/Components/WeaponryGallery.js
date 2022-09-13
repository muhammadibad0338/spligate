import React from 'react';
import {
    Box, Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/system';
import weaponryBg from "../../../Assets/Images/weaponaryBg.jpg"

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: 'auto',
    height: '275px',
    maxWidth: 'none',
    minWidth: '400px',
    margin: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'flex-wrap',
    [theme.breakpoints.down("md")]: {
        width: '80vw',
        maxWidth: '450px',
        minWidth: '450px',
        marginBottom: '55px',
        flex: '0 auto'
    },
    [theme.breakpoints.down("sm")]: {
        width: '65vw',
        maxWidth: 'none',
        minWidth: '440px',
        marginBottom: '55px',
        flex: '0 auto'
    },
    [theme.breakpoints.down("m")]: {
        width: '90vw',
        height: 'auto',
        maxWidth: '450px',
        minWidth: '150px',
        marginBottom: '20px',
        flex: '0 auto'
    }
}))

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '1.5rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        width:'100%',
        fontWeight: '500 !important',
        textAlign: 'center',
        marginBottom: '30px !important',
        textShadow:'0 3px 12px rgb(0 0 0 / 25%)',
        textTransform: 'uppercase',
        [theme.breakpoints.down("m")]: {
            fontSize: '1.4rem !important',
            lineHeight: '30px',
            textAlign: 'center',
        }
    },
}));

const WeaponryGallery = ({ Bg,title }) => {

    const classes = useStyles();

    const ImageContainer = styled(Box)(({ theme }) => ({
        height: '275px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.24)',
        transform: `translate3d(0%,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)`,
        transformStyle: 'preserve-3d',
        backgroundImage: `url(${Bg}),url(${weaponryBg})`,
        backgroundPosition: '50% 40%, 50% 50%',
        backgroundSize: 'cover, cover',
        backgroundAttachment: 'scroll, scroll',
        backgroundRepeat: 'no-repeat, no-repeat',
        width: '27vw',
        maxWidth: '500px',
        minWidth: '275px',
        boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
        [theme.breakpoints.down("md")]: {
            height: '275px',
            width: '60vw',
        },
        [theme.breakpoints.down("sm")]: {
            width: '70vw',
            minWidth: '275px',
        },
        [theme.breakpoints.down("m")]: {
            height: '225px',
            backgroundSize: 'contain, cover',
            width: '80vw',
        },


    }))

    return (
        <Wrapper>
            <ImageContainer>
                <div style={{ width: '100%',height:'100%' ,backgroundImage: 'none',display:'flex',alignItems:'end' }} >
                <Typography className={classes.title} >{title}</Typography>
                </div>
            </ImageContainer>
        </Wrapper>
    )
}

export default WeaponryGallery