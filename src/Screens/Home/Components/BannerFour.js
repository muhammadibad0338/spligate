import React from 'react';
import {
    Typography,
    Grid,
    Box
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import data from "../../../State/home.json"
import { padding, styled } from '@mui/system';
import darkBg from "../../../Assets/Images/homeDarkbg.png"
import TransparentBtn from '../../../Components/TransparentBtn';
//anmation library
import Slide from 'react-reveal/Slide'

const useStyles = makeStyles((theme) => ({
    banner1: {
        height: 'auto',
        width: '100%',
        paddingBottom: '30px',
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
            backgroundRepeat: 'repeat,no-repeat,repeat-y',

        },
    },
    smallerTitle: {
        fontSize: '2rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'center',
        marginBottom: '5px !important',
        [theme.breakpoints.down("m")]: {
            fontSize: '1.5rem !important',
            lineHeight: '30px',
            textAlign: 'center',
        }
    },
}));

const ImageView = styled(Box)(({ theme }) => ({
    minHeight: '400px',
    marginBottom: '10px',
    borderRadius: '0px',
    boxshadown: '0 3px 24px rgb(0 0 0 / 60%)',
    [theme.breakpoints.down("m")]: {
        minHeight: '300px',
    }
}));

const BannerFour = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.banner1}   >
            {
                data.sectionFourData.map((val, i) => {
                    return (
                        <Grid key={i} item xs={12} md={5} fl={4} sx={{
                            margin: 'auto',
                            padding: { fl: '0px 10px', xs: '0px' },
                            marginBottom: { xs: '20px', fl: '0px' }
                        }} >
                            <Slide bottom >
                                <ImageView
                                    sx={{
                                        backgroundImage: `url(${val.image})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: { xs: '50% 50%', md: 'none' }
                                    }}
                                />
                                <Typography className={classes.smallerTitle} > {val.titleText}</Typography>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }} >
                                    <TransparentBtn sx={{ margin: 'auto' }} text={val.btnText} />
                                </Box>
                            </Slide>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default BannerFour