import React from 'react';
import {
    Box, Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/system';
import TransparentBtn from '../../../Components/TransparentBtn';


const useStyles = makeStyles((theme) => ({
    image: {
        display: 'inline-block',
        maxWidth: '100%',
    },
    smallerTitle: {
        fontSize: '1.3rem !important',
        minHeight:'50px !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '700 !important',
        textAlign: 'center',
        margin: '10px 0px !important',
        [theme.breakpoints.down("m")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'center',
        }
    },
}));



const ImageContainer = styled(Box)(({ theme }) => ({
    width: '20%',
    minWidth: '450px',
    marginRight: '0.5vw',
    marginLeft: '0.5vw',
    marginBottom: '40px',
    height: 'auto',
    [theme.breakpoints.down("fl")]: {
        width: '49%',
        maxWidth: 'none',
        minWidth: '500px',
        marginRight: '0.5vw',
        marginLeft: '0.5vw',
        marginBottom: '40px'
    },
    [theme.breakpoints.down("md")]: {
        width: '50%',
        minWidth: '590px',
        marginBottom: '40px'
    },
    [theme.breakpoints.down("sm")]: {
        width: '100%',
        minWidth: '0px',
        marginRight: '0vw',
        marginLeft: '0vw',
        paddingRight: '3vw',
        paddingLeft: '3vw',
    },
    [theme.breakpoints.down("m")]: {
        width: '100%',
        minWidth: '0px',
        marginRight: '0vw',
        marginLeft: '0vw',
        paddingRight: '2vw',
        paddingLeft: '2vw',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

const NewsImage = ({ image, title }) => {
    const classes = useStyles();
    return (
        <ImageContainer>
            <div style={{ width: '100%', height: '100%' }} >
                <img className={classes.image} src={image} />
                <Typography className={classes.smallerTitle} >{title}</Typography>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <TransparentBtn text='READ MORE' />
                </div>
            </div>
        </ImageContainer>
    )
}

export default NewsImage