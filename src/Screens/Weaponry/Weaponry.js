import React from 'react';
import {
    Grid,
    Container
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import State from "../../State/Weaponry.json"
import MainHeading from '../../Components/MainHeading';
import WeaponryGallery from './Components/WeaponryGallery';
import Slide from 'react-reveal/Slide'

const useStyles = makeStyles((theme) => ({
    banner: {
        height: 'auto',
        // height:'100vh',
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

const Weaponry = () => {

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
            <Grid container  >
                <Grid item xs={12} sx={{
                    marginBottom: '60px',
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }} >
                    {
                        State.gallery.map((gallery, i) => {
                            return (
                                <Slide bottom key={i} >
                                    <WeaponryGallery
                                        Bg={gallery.image}
                                        title={gallery.title}
                                    />
                                </Slide>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Weaponry