import React, { useState } from 'react';
import './NavBar.css';
import {
    AppBar,
    Container,
    Toolbar,
    IconButton,
    Box,
    Button,
    List,
    Divider,
    Typography,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Assets/logo.svg";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GameInfoMd } from "./MdMenuItem"
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    logo: {
        height: '35px',
        maxWidth: '100%',
        margin: '0px 10px'
    },
    navItem: {
        width: 'auto',
        color: 'white',
        textTransform: 'upperCase',
        fontFamily: '',
        fontSize: '16px !important',
        fontFamily: ["Motserrat", "sans-serif"],
        lineHeight: '15px',
        fontWeight: '600px !important',
        textAlign: 'center',
        [theme.breakpoints.down("lg")]: {
            fontSize: '14px !important',
            lineHeight: '18px',
            fontWeight: '600px !important'
        },
    },
    listItem: {
        width: 'auto',
        color: 'white',
        textTransform: 'upperCase',
        fontFamily: ["Motserrat", "sans-serif"],
        fontSize: '14px !important',
        lineHeight: '15px',
        fontWeight: '500 !important',
        textAlign: 'right',
        // [theme.breakpoints.down("lg")]: {
        //     fontSize: '14px !important',
        // },
    },
    navItemBtn: {
        maxWidth: '940px',
        height: '100%',
        // padding: '0px 14px',
        padding: '10px 25px 10px 15px',
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
    navItemBtnIcon: {
        maxWidth: '940px',
        height: '100%',
        // padding: '0px 14px',
        padding: '10px 25px 5px 10px',
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
    },
    appBarMenu: {
        '& .MuiPaper-root': {
            padding: '10px 25px 10px 15px',
            backgroundColor: 'black',
            borderRadius: '0px',
            boxShadow: 'none',
            '& .MuiMenu-list': {
                color: 'white'
            },
        }
    }
}));





const NavBar = (props) => {
    const classes = useStyles();
    let navigate = useNavigate();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const [indDrawerNavItem, setindDrawerNavItem] = useState(-1);
    const [indAppbarNavItem, setindAppbarNavItem] = useState(-1);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        // setAnchorEl(null)
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;


    const list = () => (
        <Box
            sx={{ width: 'auto', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))', }}
            role="presentation"
            // onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.nav} disablePadding>
                        <ListItemButton className={classes.navItemBtn} onClick={() => {
                            if (!item.showIcon) {
                                navigate(`${item.path}`);
                            }
                        }} >
                            <ListItemText className={classes.listItem} primary={item.nav} />
                            {item?.showIcon &&
                                <KeyboardArrowDownIcon style={{ color: '#6DC2D3' }} />
                            }
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding >
                    <ListItemButton className={classes.navItemBtn} >
                        <ListItemText className={classes.listItem} >
                            <PersonIcon />
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const openDrawerNavItem = (i) => {

    }


    const openAppbarNavItem = (event, haveMenu, path) => {
        if (haveMenu) {
            setAnchorEl(event.currentTarget);
        }
        else {
            setAnchorEl(null)
            // console.log(path,"haveMenu")
            navigate(`${path}`);
        }

    }

    const closeAppbarNavItem = () => {
        setAnchorEl(null);
    }

    const navItems = [
        { nav: 'About1047', showIcon: false, path: '/1047' },
        { nav: 'Game Info', showIcon: true, MdComp: GameInfoMd },
        { nav: 'faq', showIcon: false, path: '/' },
        { nav: 'Community', showIcon: true, MdComp: GameInfoMd },
        { nav: 'News', showIcon: false, path: '/news' },
        { nav: 'Explore', showIcon: true, MdComp: GameInfoMd },
        { nav: 'Play Now', showIcon: true, MdComp: GameInfoMd }
    ];





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
                                {navItems.map((Item, ind) => {
                                    let { MdComp } = Item
                                    return (
                                        <div key={ind} >
                                            <Button className={classes.navItemBtn}
                                                id={Item + "button"}
                                                // aria-controls={open ? (Item + "menu") : undefined}
                                                // aria-haspopup="true"
                                                // aria-expanded={open ? 'true' : undefined}
                                                onClick={(e) => openAppbarNavItem(e, Item.showIcon, Item?.path)}
                                            >
                                                <Typography key={Item} className={classes.navItem} >
                                                    {Item.nav}
                                                </Typography>
                                                {Item?.showIcon &&
                                                    <KeyboardArrowDownIcon style={{ color: '#6DC2D3' }} />
                                                }
                                            </Button>
                                            {Item?.showIcon && <Menu
                                                id={Item + "menu"}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={closeAppbarNavItem}
                                                disableScrollLock={true}
                                                MenuListProps={{
                                                    'aria-labelledby': (Item + "button"),
                                                }}
                                                sx={{ display: { xs: 'none', md: 'flex' } }}
                                                className={classes.appBarMenu}
                                            // style={{ backgroundColor: 'black' }}
                                            >
                                                {
                                                    <MdComp key={ind} closeAppbarNavItem={closeAppbarNavItem} />
                                                }
                                            </Menu>}

                                        </div>
                                    )
                                }
                                )}
                                <Button className={classes.navItemBtnIcon}
                                >
                                    <Typography className={classes.navItem} >
                                        <PersonIcon />
                                    </Typography>
                                </Button>
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