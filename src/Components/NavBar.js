import React from 'react';
import './NavBar.css';
import { AppBar, Container, Toolbar } from "@mui/material"
import { makeStyles } from "@mui/styles"
import logo from "../Assets/logo.svg"

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '35px',
        maxWidth: '100%',
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='fixed' style={{ backgroundColor: '#000000' }} >
                <Container maxWidth="xl" style={{ padding: '0px 0px', minHeight: 'auto' }} >
                    <Toolbar variant="dense" disableGutters >
                        <div style={{ width: "100%" }}>
                            <img className={classes.logo} src={logo} alt="logo" />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavBar