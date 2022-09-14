import React from 'react'
import {
    Box,
    Typography,
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import map from "../../../Assets/Images/map.png"
import darkBg from "../../../Assets/Images/homeDarkbg.png";
import State from "../../../State/About.json";
import BreifeTitle from './BreifeTitle';
import Fade from 'react-reveal/Fade';
import { Container } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    banner: {
        height: 'auto',
        width: '100%',
        backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${darkBg})`,
        backgroundSize: 'auto, cover,cover',
        backgroundPosition: '0px 0px, 50% 0%,50% 0%',
        backgroundRepeat: 'repeat,no-repeat,repeat-y',
        [theme.breakpoints.down("fl")]: {
            backgroundSize: 'auto,cover,cover',
        },
        [theme.breakpoints.down("md")]: {
            backgroundImage: `-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${darkBg})`,
            backgroundSize: 'auto, auto,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
    map: {
        width: '50%',
        padding: '20px',
        [theme.breakpoints.down("fl")]: {
            width: '60%',
        },
        [theme.breakpoints.down("md")]: {
            width: '80%',
        },
        [theme.breakpoints.down("sm")]: {
            width: '90%',
        },
    },
    email: {
        color: "#8DCFEB",
        textAlign: 'center',
        fontSize: '1.2rem !important',
        margin: '8px 0px !important',
        textDecoration: 'underline',
        cursor: 'pointer',
        [theme.breakpoints.down("md")]: {
            margin: '5px 0px',
        },
    }
}));

const SectionTwo = () => {
    const classes = useStyles();


    return (
        <div className={classes.banner}  >
            <Grid container >
                <Grid item xs={12}  >
                    <Fade big>
                        <BreifeTitle
                            title={State.head3}
                            titleSx={{
                                color: 'white'
                            }}
                            breif={State.desc3}
                            breifSx={{
                                color: 'white'
                            }}
                        />
                    </Fade>
                </Grid>
                <Grid item xs={12} sx={{
                    display: { xs: 'none', m: 'flex' },
                    justifyContent: 'center',
                    margin: '20px 0px'
                }} >
                    <Fade big>
                        <img className={classes.map} src={map} />
                    </Fade>
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '60px' }} >
                    <Fade big>
                        <BreifeTitle
                            title={State.head4}
                            titleSx={{
                                color: 'white'
                            }}
                            breif={State.desc4}
                            breifSx={{
                                color: 'white'
                            }}
                        />
                    </Fade>
                </Grid>
                <Grid item xs={12} >
                    <Fade big>
                        <BreifeTitle
                            title={State.head5}
                            titleSx={{
                                color: '#70C7D9'
                            }}
                        />
                    </Fade>
                </Grid>
            </Grid>
            <Fade big>
                <Container maxWidth='md' >
                    <Grid container mt={1}  >
                        {
                            State.contact.map((val, i) => {
                                return (
                                    <Grid key={i} item md={val.gridSize} xs={12} >
                                        <Typography className={classes.email} >
                                            <a onClick={() => window.open(`mailto:${val.email}`)}>
                                                {val.email}
                                            </a>
                                        </Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Fade>
        </div>
    )
}

export default SectionTwo