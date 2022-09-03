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
        fontFamily: '',
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


const navItems = [
    { nav: 'About1047', showIcon: false },
    { nav: 'Game Info', showIcon: true },
    { nav: 'Season', showIcon: false },
    { nav: 'Community', showIcon: true },
    { nav: 'News', showIcon: false },
    { nav: 'Explore', showIcon: true },
    { nav: 'Play Now', showIcon: true }
];


const NavBar = (props) => {
    const classes = useStyles();
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
                        <ListItemButton className={classes.navItemBtn}>
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


    const openAppbarNavItem = (event, haveMenu) => {
        if (haveMenu) {
            setAnchorEl(event.currentTarget);
        }
        else {
            setAnchorEl(null)
        }
    }
    const closeAppbarNavItem = () => {
        setAnchorEl(null);
    }


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
                                {navItems.map((item, ind) => (
                                    <div>
                                        <Button className={classes.navItemBtn}
                                            id={item + "button"}
                                            // aria-controls={open ? (item + "menu") : undefined}
                                            // aria-haspopup="true"
                                            // aria-expanded={open ? 'true' : undefined}
                                            onClick={(e) => openAppbarNavItem(e, item.showIcon)}
                                        >
                                            <Typography key={item} className={classes.navItem} >
                                                {item.nav}
                                            </Typography>
                                            {item?.showIcon &&
                                                <KeyboardArrowDownIcon style={{ color: '#6DC2D3' }} />
                                            }
                                        </Button>
                                        <Menu
                                            id={item + "menu"}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={closeAppbarNavItem}
                                            disableScrollLock={true}
                                            MenuListProps={{
                                                'aria-labelledby': (item + "button"),
                                            }}
                                            sx={{ display: { xs: 'none', md: 'flex' } }}
                                            className={classes.appBarMenu}
                                        // style={{ backgroundColor: 'black' }}
                                        >
                                            <MenuItem onClick={closeAppbarNavItem}>Game</MenuItem>
                                            <MenuItem onClick={closeAppbarNavItem}>My account</MenuItem>
                                            <MenuItem onClick={closeAppbarNavItem}>Logout</MenuItem>
                                        </Menu>

                                    </div>
                                ))}
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