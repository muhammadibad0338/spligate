import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom";
//Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';


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
                                // backgroundColor:'yellow',
                                display:'flex',
                                justifyContent:'space-between'
                            }}
                            key={i}
                            onClick={() => {
                                closeAppbarNavItem()

                            }}
                        >{
                                Menu.map(({ Icon }) => <div style={{  }} >{<Icon />}</div>)
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