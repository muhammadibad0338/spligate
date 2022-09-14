import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    navItemBtn: {
        '&:hover': {
            borderBottom: "2px solid #6DC2D3",
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
                                // padding: '5px',
                                // backgroundColor:'yellow',
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
    // return(
    //     <>
    //         <MenuItem>adad</MenuItem>
    //     </>
    // )
}

// export default MdMenuItem