import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Container
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { alpha, styled } from '@mui/system';


const LargeImageBox = styled(Box)(({ theme }) => ({
    display: 'block',
    width: '833px',
    height: '450px',
    maxWidth: '833px',
    paddingLeft: '0px',
    paddingRight: '0px',
    flex: '0 auto',
    [theme.breakpoints.down("md")]: {
        width: '100%',
        maxWidth: '100%',
        flex: '0 auto'
    }
}))

const SmallImageBox = styled(Box)(({ theme }) => ({
    display: 'block',
    marginBottom: '25px',
    width: '213px',
    height: '213px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
        width: '100%',
        height: '300px',
        minHeight: '300px',
        marginBottom: '25px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: '200px',
        minHeight: '200px',
        marginBottom: '25px',
    },
    [theme.breakpoints.down("m")]: {
        width: '100%',
        height: '150px',
        minHeight: '150px',
        marginBottom: '10px',
    }
}))

const useStyles = makeStyles((theme) => ({
}));


const GalleryGrid = ({ img1, img2, img3, img4,img5 }) => {
    const classes = useStyles();
    return (
        <Box sx={(theme) => ({
            height:'100%',
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down("md")]: {
                flexDirection: 'column',
            }
        })}  >
            {/* left container */}
            <LargeImageBox>
                <a style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '0px',
                    boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
                }} ></a>
            </LargeImageBox>
            {/* right container */}
            <Box sx={(theme) => ({
                display: 'flex',
                flexDirection: 'row',
                [theme.breakpoints.down("md")]: {
                    width: '100%',
                    marginTop: '25px',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            })} >
                {/* column container */}
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '25px',
                    [theme.breakpoints.down("md")]: {
                        width: '100%',
                        marginLeft: '0px',
                    }
                })} >
                    <SmallImageBox>
                        <a style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '0px',
                            boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
                        }} ></a>
                    </SmallImageBox>
                    <SmallImageBox>
                        <a style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '0px',
                            boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
                        }} ></a>
                    </SmallImageBox>
                </Box>
                {/* column container */}
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '25px',
                    [theme.breakpoints.down("md")]: {
                        width: '100%',
                        marginLeft: '25px',
                    },
                    [theme.breakpoints.down("m")]: {
                        width: '100%',
                        marginLeft: '10px',
                    }
                })} >
                    <SmallImageBox>
                        <a style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '0px',
                            boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
                        }} ></a>
                    </SmallImageBox>
                    <SmallImageBox>
                        <a style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img5})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '0px',
                            boxShadow: '0 3px 24px 0 rgb(0 0 0 / 60%)',
                        }} ></a>
                    </SmallImageBox>
                </Box>
            </Box>
        </Box>
    )
}

export default GalleryGrid