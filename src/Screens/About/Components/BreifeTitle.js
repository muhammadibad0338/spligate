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
        marginBottom:'5px',
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
    },
    breif: {
        width: '60vw',
        height: 'auto',
        minWidth: '900px',
        fontSize: '1.3rem !important',
        lineHeight: '30px',
        fontFamily: ["Motserrat", "sans-serif"],
        color: 'white',
        fontWeight: '500 !important',
        textAlign: 'center',
        marginTop: '5px !important',
        textShadow: '0 3px 12px rgb(0 0 0 / 50%) !important',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.2rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            marginBottom: '5px !important',
            width: '70vw',
            minWidth: '580px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.1rem !important',
            lineHeight: '30px',
            textAlign: 'center',
            width: '90vw',
            minWidth: '250px',
            marginBottom: '10px !important',
        }
    },
}));

const BreifeTitle = ({title,titleSx,breif,breifSx}) => {
    const classes = useStyles();

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
            {title && <Typography sx={titleSx} className={classes.mainHead} >{title}</Typography>}
            {breif && <Typography sx={breifSx} className={classes.breif} >{breif}</Typography>}
        </div>
    )
}

export default BreifeTitle