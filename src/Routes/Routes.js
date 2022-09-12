import React from 'react'
import {Routes,Route, } from "react-router-dom"
import Home from '../Screens/Home/Home'
import About from '../Screens/About/About'
import { withRouter } from './WithRouter'
import GamePlay from '../Screens/GamePlay/GamePlay'
import Arenas from '../Screens/Arenas/Arenas'


const routesArr = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/1047",
        Component: About
    },
    {
        path: "/gameplay",
        Component: GamePlay
    },
    {
        path: "/arenas",
        Component: Arenas
    }
]

const routes = () => {
  return (
    <Routes>
        {
            routesArr.map(({path,Component})=>{
                return(
                    <Route 
                        key={path}
                        path={path}
                        element={<Component/>}
                    />
                )
            })
        }
    </Routes>
  )
}

export default withRouter(routes)