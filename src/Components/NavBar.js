import React, { useState } from 'react';
import './NavBar.css';
import { AppBar, Container, Toolbar, IconButton, Box, Button, List, Divider, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material"
import { makeStyles } from "@mui/styles"
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Assets/logo.svg";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '35px',
        maxWidth: '100%',
        margin: '0px 10px'
    },
    navItem: {
        width: 'auto',
        color: 'white',
        // padding: '0px 15px',
        textTransform: 'upperCase',
        fontFamily: '',
        fontSize: '18px !important',
        lineHeight: '15px',
        fontWeight: '550px',
        textAlign: 'center',
        [theme.breakpoints.down("lg")]: {
            fontSize: '14px !important',
        },
        // '&:hover': {
        //     color: "#6DC2D3"
        // }
    },
    listItem: {
        width: 'auto',
        color: 'white',
        // padding: '0px 15px',
        textTransform: 'upperCase',
        fontFamily: '',
        fontSize: '14px !important',
        lineHeight: '15px',
        fontWeight: '550px',
        textAlign: 'right',
        // [theme.breakpoints.down("lg")]: {
        //     fontSize: '14px !important',
        // },
    },
    navItemBtn: {
        maxWidth: '940px',
        height: '100%',
        padding: '0px 14px',
        backgroundColor: 'black',
        '&:hover': {
            borderBottom: "2px solid #6DC2D3",
            cursor: 'pointer',
            "& span": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            transition: '0.2 s'
        }
    },
    navItemList: {
        maxWidth: '100%',
        height: '40px',
        padding: '0px 14px',
        backgroundColor: 'black',
        '&:hover': {
            borderBottom: "2px solid #6DC2D3",
            cursor: 'pointer',
            "& p": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            transition: '0.2 s'
        }
    }
}));


const navItems = ['About1047', 'Game Info', 'Season', 'Community', 'News', 'Explore', 'Play Now'];


const NavBar = (props) => {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;


    const list = () => (
        <Box
            sx={{ width: 'auto', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))', }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {navItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton className={classes.navItemBtn}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )


    return (
        <div>
            <AppBar component="nav" position='fixed' style={{ backgroundColor: '#000000' }} >
                <Container maxWidth="xl" style={{ padding: '0px 0px', minHeight: 'auto' }} >
                    <Toolbar variant="dense" disableGutters >
                        <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ margin: 'auto 0px', padding: '5px 0px' }} >
                                <img className={classes.logo} src={logo} alt="logo" />
                            </div>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {navItems.map((item) => (
                                    <button className={classes.navItemBtn} >
                                        <Typography key={item} className={classes.navItem} >
                                            {item}
                                        </Typography>
                                    </button>
                                ))}
                            </Box>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav" style={{ marginTop: '40px' }}>
                <SwipeableDrawer
                    anchor='top'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    onOpen={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none', },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: 'auto',
                            // marginTop: '50px',
                            position: 'absolute',
                            top: '50px',
                            backgroundColor: 'transparent'
                        },
                    }}
                >
                    {list()}
                </SwipeableDrawer>
            </Box>
        </div>
    )
}

export default NavBar