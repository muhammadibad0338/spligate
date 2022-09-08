import React from 'react'
import {
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../../Assets/Images/homeDarkbg.png"
import soilder from "../../../Assets/Images/soilder.png"


const useStyles = makeStyles((theme) => ({
    banner1: {
        height: '400px',
        width: '100%',
        backgroundImage: `url(${darkBg})`,
        backgroundSize: 'auto, cover,cover',
        backgroundPosition: '0px 0px, 50% 0%,50% 0%',
        backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'auto,contain,cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${darkBg})`,
            backgroundSize: 'auto, auto,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
    soliderImg: {
        marginTop: '-150px',
        marginBottom: '40px',
        width: 'auto',
        height: '580px',
        [theme.breakpoints.down("md")]: {
            width: '60%',
            marginTop: '-110px',
            marginBottom: '60px',
        },
        [theme.breakpoints.down("sm")]: {
            width: '70%',
            marginTop: '-100px',
            marginBottom: '40px',
        },
        [theme.breakpoints.down("m")]: {
            width: '80%',
            marginTop: '-60px',
            // marginBottom: '40px',
        },
    }
}));

const BannerThree = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.banner1} >
            <Grid item xs={12}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}
            >
                <img alt="Spligate Soilder" src={soilder} className={classes.soliderImg} />
            </Grid>
        </Grid>
    )
}

export default BannerThree