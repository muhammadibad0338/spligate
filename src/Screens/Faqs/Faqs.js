import React from 'react'
import {
    Grid,
    Container
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import darkBg from "../../Assets/Images/homeDarkbg.png";
import State from "../../State/Faqs.json";
import MainHeading from '../../Components/MainHeading';


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
}));


const Faqs = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}  >
            <Container maxWidth='lg'  >
                <Grid container >
                    <Grid item xs={12} sx={(theme) => ({
                        width: '100%',
                        marginTop: '140px',
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
                        <MainHeading text={State.mainHead} sx={{
                            color: 'white',
                            textAlign: 'left',
                            textShadow: '0 3px 12px rgb(0 0 0 / 50%)',
                            fontWeight: '800',
                        }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Faqs