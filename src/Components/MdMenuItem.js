import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export const GameInfoMd = ({ closeAppbarNavItem }) => {
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
            path: '/'
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
                                padding: '5px'
                            }}
                            key={i}
                            onClick={() => {
                                navigate(`${menu.path}`)
                                console.log(menu.path,"path")
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