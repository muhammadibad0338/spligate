import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles"
import {
    Button,
    ListItemButton,
    ListItemText
} from "@mui/material"
import { useNavigate } from "react-router-dom";
//Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import TransparentBtn from './TransparentBtn';


const useStyles = makeStyles((theme) => ({
    navItemBtn: {
        color: 'white',

        textTransform: 'uppercase',
        '&:hover': {
            borderBottom: "2px solid #6DC2D3",
            color: '#6DC2D3',
            transition: '0.2 s',
            cursor: 'pointer',
            "& p": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            "& span": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            transition: '0.2 s'
        }
    },
    Icon: {
        color: 'white',
        margin: '0px 10px',
        '&:hover': {
            color: '#6DC2D3',
            transition: '0.2 s',
            cursor: 'pointer',
            "& p": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            "& span": {
                color: '#6DC2D3',
                transition: '0.2 s'
            },
            transition: '0.2 s'
        }
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
    }
}));


export const GameInfoXs = ({ closeAppbarNavItem }) => {
    const classes = useStyles();
    let navigate = useNavigate();
    let subMenu = [
        {
            name: 'GAMEPLAY',
            path: '/gameplay'
        },
        {
            name: 'ARENAS',
            path: '/arenas'
        },
        {
            name: 'WEAPONRY',
            path: '/weaponry'
        },
    ];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
            {
                subMenu.map((menu, i) => {
                    return (
                        <ListItemButton
                            sx={{
                                textAlign: 'left',
                                colo: 'white !important'
                            }}
                            className={classes.navItemBtn}
                            key={i}
                            onClick={() => {
                                navigate(`${menu.path}`)
                                closeAppbarNavItem()

                            }}
                        >
                            <ListItemText className={classes.listItem} primary={menu.name} />
                        </ListItemButton>
                    )
                })
            }
        </div>
    )
}


export const CommunityXs = ({ closeAppbarNavItem }) => {
    const classes = useStyles();
    let Icons = [
        {
            Icon: YouTubeIcon,
            link: 'https://www.youtube.com/channel/UCdUA8I1gJ606kBa9MfTZIyw'
        },
        {
            Icon: FacebookOutlinedIcon,
            link: 'https://www.facebook.com/Splitgate/'
        },
        {
            Icon: TwitterIcon,
            link: 'https://twitter.com/splitgate'
        },
        {
            Icon: YouTubeIcon,
            link: 'https://www.youtube.com/channel/UCdUA8I1gJ606kBa9MfTZIyw'
        },
        {
            Icon: TwitterIcon,
            link: 'https://twitter.com/splitgate'
        },
        {
            Icon: FacebookOutlinedIcon,
            link: 'https://www.facebook.com/Splitgate/'
        }
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} >
            {
                Icons.map((Menu, i) => {
                    let { Icon } = Menu
                    return (
                        <div key={i} className={classes.Icon} >{<Icon />}</div>
                    )
                })
            }
        </div>
    )
}

export const ExploreXs = ({ closeAppbarNavItem }) => {
    const classes = useStyles();
    let subMenu = [
        {
            name: 'GAME PRICING',
            link: 'https://gsght.com/c/s2qgug'
        },
        {
            name: 'Esports',
            link: "https://splitgateproseries.com/"
        },
        {
            name: 'Merch',
            link: 'https://dotexe.com/collections/splitgate'
        },
    ];
    return (
        <>
            {
                subMenu.map((menu, i) => {
                    return (
                        <ListItemButton
                            sx={{
                                textAlign: 'left',
                            }}
                            className={classes.navItemBtn}
                            key={i}
                            onClick={() => {
                                closeAppbarNavItem()

                            }}
                        >
                            <ListItemText className={classes.listItem} primary={menu.name} />
                            <OutputOutlinedIcon style={{ fontSize: '15px', color: '#4cc5f3', marginLeft: '5px', marginBottom: '3px' }} />
                        </ListItemButton>
                    )
                })
            }
        </>
    )
}


export const PlayNowXs = ({ closeAppbarNavItem }) => {
    const classes = useStyles();
    let subMenu = [
        {
            name: 'Steam',
            link: 'https://store.steampowered.com/app/677620/Splitgate/'
        },
        {
            name: 'Xbox',
            link: "https://www.xbox.com/en-us/games/store/splitgate/9p4s1bpjlphz?rtc=1"
        },
        {
            name: 'PlayStation',
            link: 'https://store.playstation.com/en-us/product/UP5988-CUSA26225_00-SPLITGATEPS40000'
        },
    ];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '98vw' }}>
            {
                subMenu.map((menu, i) => {
                    return (
                            <TransparentBtn key={i} text={menu.name} onClick={() => {
                                closeAppbarNavItem()
                            }}
                                sx={{ width: '100%', fontSize: '12px', margin: '10px' }}
                            />
                    )
                })
            }
        </div>
    )
}