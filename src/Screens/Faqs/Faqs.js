import React from 'react'
import {
    Grid,
    Container,
    Typography
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import State from "../../State/Faqs.json";
import SmallMainHeading from '../../Components/SmallMainHeading';


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
            backgroundImage: `url(${darkBg})`,
            backgroundSize: 'auto, cover,cover',
            backgroundPosition: '0px 0px, 82% 0%,50% 0%',
            backgroundRepeat: 'repeat,no-repeat,repeat-y'
        },
    },
    subHead: {
        fontFamily: ["Motserrat", "sans-serif"],
        fontSize: '1.55rem !important',
        lineHeight: '30px !important',
        fontWeight: '400 !important',
        textTransform: 'upperCase',
        margin: '10px 0px !important',
        color:'white'
    },
    smallerTitle: {
        fontSize: '1.2rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '400 !important',
        textAlign: 'left',
        opacity: 1,
        marginBottom: '20px !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'left',
            marginBottom: '20px !important',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'left',
            marginBottom: '20px !important',
        }
    },
}));


const Faqs = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}  >
            <Container maxWidth='lg'  >
                <Grid container >
                    <Grid item xs={12} sx={(theme) => ({
                        width: '100%',
                        marginTop: '100px',
                        padding: '30px 40px',
                        backgroundColor: '#151719',
                        [theme.breakpoints.down('md')]: {
                            marginTop: '100px',
                            marginBottom: '60px',
                        },
                        [theme.breakpoints.down('sm')]: {
                            marginTop: '60px',
                            paddingRight: '20px',
                            paddingLEft: '20px'
                        },
                        [theme.breakpoints.down('m')]: {
                            marginTop: '40px',
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            marginBottom: '60px'
                        },
                    })} >
                        <SmallMainHeading text={State.mainHead} sx={{
                            color: 'white',
                            textAlign: 'left',
                            textShadow: '0 3px 12px rgb(0 0 0 / 50%)',
                            fontWeight: '800',
                        }} />
                        {
                            State.faqs.map((qa, i) => {
                                return (
                                    <div key={i} >
                                        <Typography className={classes.subHead} >{qa.qestion}</Typography>
                                        <Typography className={classes.smallerTitle} >{qa.answer}</Typography>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Faqs