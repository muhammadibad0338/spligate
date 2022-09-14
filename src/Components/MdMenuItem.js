import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom";
//Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import TransparentBtn from './TransparentBtn';


const useStyles = makeStyles((theme) => ({
    navItemBtn: {
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
    Icon:{
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
    }
}));


export const GameInfoMd = ({ closeAppbarNavItem }) => {
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
        <>
            {
                subMenu.map((menu, i) => {
                    return (
                        <MenuItem
                            sx={{
                                textAlign: 'left',
                            }}
                            className={classes.navItemBtn}
                            key={i}
                            onClick={() => {
                                navigate(`${menu.path}`)
                                closeAppbarNavItem()

                            }}
                        >{menu.name}</MenuItem>
                    )
                })
            }
        </>
    )
}


export const CommunityMd = ({ closeAppbarNavItem }) => {
    const classes = useStyles();
    let Icons = [
        [{
            Icon: YouTubeIcon,
            link: 'https://www.youtube.com/channel/UCdUA8I1gJ606kBa9MfTZIyw'
        },
        {
            Icon: FacebookOutlinedIcon,
            link: 'https://www.facebook.com/Splitgate/'
        },],
        [{
            Icon: TwitterIcon,
            link: 'https://twitter.com/splitgate'
        },
        {
            Icon: YouTubeIcon,
            link: 'https://www.youtube.com/channel/UCdUA8I1gJ606kBa9MfTZIyw'
        }],
        [{
            Icon: TwitterIcon,
            link: 'https://twitter.com/splitgate'
        },
        {
            Icon: FacebookOutlinedIcon,
            link: 'https://www.facebook.com/Splitgate/'
        },]
    ]

    return (
        <>
            {
                Icons.map((Menu, i) => {
                    return (
                        <MenuItem
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                            key={i}
                            onClick={() => {
                                closeAppbarNavItem()

                            }}
                        >{
                                Menu.map(({ Icon }) => <div className={classes.Icon} >{<Icon />}</div>)
                            } </MenuItem>
                    )
                })
            }
        </>
    )
}

export const ExploreMd = ({ closeAppbarNavItem }) => {
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
                        <MenuItem
                            sx={{
                                textAlign: 'left',
                            }}
                            className={classes.navItemBtn}
                            key={i}
                            onClick={() => {
                                closeAppbarNavItem()

                            }}
                        >{menu.name} <OutputOutlinedIcon style={{ fontSize: '15px', color: '#4cc5f3', marginLeft: '5px', marginBottom: '3px' }} /> </MenuItem>
                    )
                })
            }
        </>
    )
}


export const PlayNowMd = ({ closeAppbarNavItem }) => {
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
        <>
            {
                subMenu.map((menu, i) => {
                    return (
                        <TransparentBtn key={i} text={menu.name} onClick={() => {
                            closeAppbarNavItem()
                        }}
                        sx={{width:'100px',fontSize:'12px',margin:'5px 0px'}}
                         />
                    )
                })
            }
        </>
    )
}