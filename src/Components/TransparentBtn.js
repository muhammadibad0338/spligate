import React from 'react'
import {
    Button,
} from "@mui/material"
// import { makeStyles } from "@mui/styles/"
import { alpha, styled } from '@mui/system';
import btnBg from "../Assets/Images/btnBg.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// const useStyles = styled((theme) => ({
//     btn: {
//         borderWidth: '2px',
//         borderRadius:'0px',
//         borderColor: 'hsla(0, 0%, 100%, 0.5)',
//         backgroundImage: `url(${btnBg})`,
//         backgroundPosition: '50% 50%',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'scroll',
//         padding:'0px 20px',
//         backgroundColor:'transparent',
//         fontSize:'1rem',
//         color:'white',
//         // [theme.breakpoints.up("xs")]: {
//         // }
//     },
//     txt:{
//         fontSize:'1rem',
//         lineHeight: '24px',
//         fontWeight:'500',
//         color:'white',


//     }
// }));

const Btn = styled(Button)(({ theme }) => ({
    borderWidth: '2px',
    borderRadius: '0px',
    borderColor: 'hsla(0, 0%, 100%, 0.5)',
    backgroundImage: `url(${btnBg})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    padding: '8px 20px',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    color: 'white',
    fontFamily: ["Motserrat", "sans-serif"].join(","),
    fontWeight:'500',
    width:'fit-content'
    // marginBottom:'80px',
    // [theme.breakpoints.down("md")]: {
    //     marginBottom:'60px'
    // },
    // [theme.breakpoints.down("sm")]: {
    //     // marginBottom:'20px',
    //     padding:'7px 15px'
    // }
}))


const TransparentBtn = ({text,sx,Icon,...props}) => {
    return (
        <Btn variant='outlined' sx={sx} {...props} > {text ? text : <Icon/> }</Btn>
    )
}

// const TransparentBtn = ({ text }) => {
//     const classes = useStyles();

//     return (
//         <Button variant='outlined'  className={classes.btn} >
//             {text}
//         </Button>
//     )
// }

export default TransparentBtn


