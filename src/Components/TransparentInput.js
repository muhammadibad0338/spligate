import React from 'react'
import {
    Button,
    OutlinedInput,
    TextField
} from "@mui/material"
import { styled } from '@mui/system';
// import './NavBar.css';

const Search = styled(OutlinedInput)(({ theme }) => ({



    // '& .MuiOutlinedInput-root':{
    //     outline:'none',
    //     borderRadius:"0px",
    //     '&:hover':{
    //         outline:'none',
    //         borderRadius:"0px",
    //     },
    //     '&:focus':{
    //         outline:'none',
    //         borderRadius:"0px",
    //     }
    // },

    // '& .MuiInputBase-root':{
    //     outline:'none',
    //     borderRadius:"0px",
    //     '&:hover':{
    //         outline:'none',
    //         borderRadius:"0px",
    //     },
    //     '&:focus':{
    //         outline:'none',
    //         borderRadius:"0px",
    //     }
    // },



    '& .MuiInputBase-input': {
        height: '10px',
        maxWidth: '400px',
        minWidth: '320px',
        borderRightStyle: 'none',
        borderRadius: '0px',
        backgroundColor: 'transparent',
        fontFamily: ["Motserrat", "sans-serif"].join(","),
        color: 'white',
        fontSize: '1.1rem',
        // lineHeight: '20px',
        // padding: '19px 150px 19px 20px',
        outline: 'nonne',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: 'white',
        '&:hover': {
            outline: 'none',
            borderRadius: "0px",
            // border :'none !important'
            borderColor: 'white ',
            borderStyle: 'solid ',
            borderWidth: '2px ',

        },
        '&:focus': {
            outline: 'none ',
            // border :'none '
            borderStyle: 'solid ',
            borderWidth: '2px ',
            borderColor: '#3898ec ',
        },
        [theme.breakpoints.down('sm')]:{
            minWidth:'auto'
        }
    },
    // '.Mui-focused': {
    //     outline: 'none !important',
    //     // border: 'none !important'
    //     // borderStyle: 'solid !important',
    //     // borderWidth: '2px !important',
    //     // borderColor: 'yellow !important',
    // },




    // fontWeight: '500',
    // textAlign: 'left',
    // '& label.Mui-focused': {
    //     borderStyle: 'solid',
    //     borderWidth: '2px',
    //     borderColor: '#3898ec',
    // },
    // '& .MuiInput-underline:after': {
    //     borderStyle: 'solid',
    //     borderWidth: '2px',
    //     borderColor: '#3898ec',
    // },
    // '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //         borderStyle: 'solid',
    //         borderWidth: '2px',
    //         borderColor: 'white',
    //     },
    //     '&:hover fieldset': {
    //         borderStyle: 'solid',
    //         borderWidth: '2px',
    //         borderColor: 'white',
    //     },
    //     '&.Mui-focused fieldset': {
    //         borderStyle: 'solid',
    //         borderWidth: '2px',
    //         borderColor: '#3898ec',
    //     },
    // }


    // [theme.breakpoints.down("md")]: {
    //     marginBottom:'60px'
    // },
    // [theme.breakpoints.down("sm")]: {
    //     // marginBottom:'20px',
    //     padding:'7px 15px'
    // }
}))


const TransparentInput = ({ placeHolder }) => {
    return (
        <Search
            placeholder={placeHolder}
            
        />
    )
}

export default TransparentInput