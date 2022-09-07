import React from 'react'
import {Routes,Route, } from "react-router-dom"
import Home from '../Screens/Home/Home'
import { withRouter } from './WithRouter'


const routesArr = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/test",
        Component: Home
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