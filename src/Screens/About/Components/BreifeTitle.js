import React from 'react'
import {
    Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    mainHead: {
        fontFamily: ["Motserrat", "sans-serif"],
        fontSize: '2.4rem !important',
        lineHeight: '60px !important',
        fontWeight: '550 !important',
        textTransform: 'upperCase',
        [theme.breakpoints.down("md")]: {
            fontSize: '2.1rem !important',
            lineHeight: '55px !important',
            fontWeight: '550 !important',
            textAlign: 'center',
            marginBottom: '10px !important'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.8rem !important',
            lineHeight: '40px !important',
            fontWeight: '550 !important',
            textAlign: 'center',
            marginBottom: '10px !important'
        }
    }
}));

const BreifeTitle = ({title,titleSx}) => {
    const classes = useStyles();

    return (
        <div>
            <Typography sx={titleSx} className={classes.mainHead} >{title}</Typography>
        </div>
    )
}

export default BreifeTitle