import React from 'react';
import Routes from '../Routes/Routes';
import { useTheme, useMediaQuery } from "@mui/material/";
import NavBar from '../Components/NavBar';


const Layout = () => {
    const theme = useTheme();


    return (
        <React.Fragment>
            <NavBar />
            <Routes />
        </React.Fragment>
    )
}

export default Layout