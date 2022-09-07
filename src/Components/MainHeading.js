import React from 'react'
import {
    Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    mainHead: {
        fontFamily: ["Motserrat", "sans-serif"],
        fontSize: '3rem !important',
        lineHeight: '60px !important',
        fontWeight: '800 !important',
        textTransform: 'upperCase',
        [theme.breakpoints.down("md")]: {
            fontSize: '2rem !important',
            lineHeight: '55px !important',
            fontWeight: '800 !important',
            textAlign: 'center',
            marginBottom: '10px !important'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '2rem !important',
            lineHeight: '40px !important',
            fontWeight: '800 !important',
            textAlign: 'center',
            marginBottom: '10px !important'
        }
    }
}));

const MainHeading = ({ text, sx }) => {
    const classes = useStyles();

    return (
        <Typography sx={sx} className={classes.mainHead} >{text}</Typography>
    )
}

export default MainHeading