import React from 'react';
import Routes from '../Routes/Routes';
import { useTheme, useMediaQuery } from "@mui/material/";
import NavBar from '../Components/NavBar';
import MobileNav from '../Components/MobileNav';


const Layout = () => {
    const theme = useTheme();

    const largeScreens = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <React.Fragment>
            {
                largeScreens ?
                    <NavBar/> :
                    <MobileNav/>
            }
            <Routes />
        </React.Fragment>
    )
}

export default Layout