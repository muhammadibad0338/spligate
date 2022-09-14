import React from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import bg1 from "../../../Assets/Images/aboutBanner.png"
import darkBg from "../../../Assets/Images/homeDarkbg.png";
import State from "../../../State/About.json"
import MainHeading from '../../../Components/MainHeading';
import studioLogo1 from "../../../Assets/Images/studioLogo1.png";
import studioLogo2 from "../../../Assets/Images/studioLogo2.png";
import studioLogo3 from "../../../Assets/Images/studioLogo3.png";
import studioLogo4 from "../../../Assets/Images/studioLogo4.png";
import studioLogo5 from "../../../Assets/Images/studioLogo5.png";
import studioLogo6 from "../../../Assets/Images/studioLogo6.png";
import studioLogo7 from "../../../Assets/Images/studioLogo7.png";
import TransparentBtn from '../../../Components/TransparentBtn';
import BreifeTitle from './BreifeTitle';
import Fade from 'react-reveal/Fade';



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
            height: '100vh'
        },
        [theme.breakpoints.down("sm")]: {
            height: 'auto'
        }
    },
    desc1: {
        width: '60vw',
        height: 'auto',
        minWidth: '900px',
        fontSize: '1.5rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'center',
        marginTop: '10px !important',
        textShadow: '0 3px 12px rgb(0 0 0 / 50%) !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.3rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '5px !important',
            width: '70vw',
            minWidth: '580px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.3rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            width: '90vw',
            minWidth: '250px',
            marginBottom: '10px !important',
        }
    },
    gap: {
        display: 'block',
        minHeight: '65px',
        [theme.breakpoints.down("md")]: {
            height: '5vh'
        },
        [theme.breakpoints.down("sm")]: {
            height: '75px'
        }
    },
    logoWrapper: {
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        // padding: '0px 10px',
        height: 'fit-content',
        marginBottom: '15px'
    },
    widthCntrlr: {
        width: '60%',
        minWidth: '800px',
        display: 'flex',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            minWidth: '0px',
        },
        [theme.breakpoints.down("m")]: {
            width: '100%',
            minWidth: '0px',
            flexWrap: 'wrap'
        },

    },
    logoImg: {
        maxWidth: '9%',
        height: 'auto',
        opacity: '0.8',
        margin: '0px auto',
        [theme.breakpoints.down("md")]: {
            maxWidth: '11%',
            opacity: '0.8',
            margin: '0px auto',
        },
        [theme.breakpoints.down("m")]: {
            maxWidth: '22%',
            margin: 'auto',
        },
    }
}));

const SectionOne = () => {
    const classes = useStyles();
    const logoArray = [studioLogo1, studioLogo2, studioLogo3, studioLogo4, studioLogo5, studioLogo6, studioLogo7]
    return (
        <Grid container className={classes.banner1} >
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'fit-content' }} >
                <div className={classes.gap} ></div>
                <MainHeading text={State.head1}
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '0 3px 12px rgb(0 0 0 / 50%)',
                        fontWeight: '800'
                    }}
                />
                <Typography className={classes.desc1} >{State.desc1}</Typography>
                <div item xs={12} className={classes.logoWrapper} >
                    <div className={classes.widthCntrlr} >
                        {logoArray.map((image, i) => {
                            return (
                                <img src={image} className={classes.logoImg} />
                            )
                        })}
                    </div>
                </div>
                <TransparentBtn text='join us' sx={{ marginBottom: '40px' }} />
                <Fade Big >

                <BreifeTitle
                    title={State.head2}
                    titleSx={{
                        color: 'white'
                    }}
                    breif={State.desc2}
                    breifSx={{
                        color: 'white'
                    }}
                />
                </Fade>
            </Grid>
        </Grid>
    )
}

export default SectionOne