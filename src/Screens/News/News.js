import React from 'react'
import {
    Grid,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import MainHeading from '../../Components/MainHeading';
import State from "../../State/News.json";
import NewsImage from './Components/NewsImage';
import TransparentBtn from '../../Components/TransparentBtn';

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

const News = () => {
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
                <Grid item xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '47px'
                    }}
                >
                    {
                        State.gallery.map((galry, i) => {
                            return (
                                <NewsImage
                                    image={galry.image}
                                    title={galry.title}
                                />
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px'}} >
                    <TransparentBtn text='show more' />
                </Grid>
            </Grid>
        </div>
    )
}

export default News