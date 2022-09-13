import React from 'react';
import {
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import MainHeading from '../../Components/MainHeading';
import State from "../../State/Arenas.json";
import ArenaImage from './Components/ArenaImage';

const useStyles = makeStyles((theme) => ({
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
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${darkBg})`,
            backgroundSize: 'auto, cover,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
}));

const Arenas = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}  >
            <MainHeading text={State.mainHead} sx={{
                color: 'white',
                textAlign: 'center',
                textShadow: '0 3px 12px rgb(0 0 0 / 50%)',
                fontWeight: '800',
                padding: { lg: '60px 0px', sm: '30px 0px', xs: '10px 0px' }
            }} />
            <Grid container >
                <Grid item xs={12} >
                    <ArenaImage
                        Bg='https://assets-global.website-files.com/5c2fb32631b7b255f486e083/61f2098f4c1e96dd9d98a86f_Foregone%20Destruction.jpg'
                        heading='FOREGONE DESTRUCTION'
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Arenas