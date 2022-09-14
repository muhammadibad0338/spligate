import React from 'react';
import Routes from '../Routes/Routes';
import { useTheme, useMediaQuery } from "@mui/material/";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const Layout = () => {
    const theme = useTheme();


    return (
        <React.Fragment>
            <NavBar />
            <Routes />
            <Footer/>
        </React.Fragment>
    )
}

export default Layout