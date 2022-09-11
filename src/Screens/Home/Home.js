import React from 'react'
import {
  Container
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import BannerOne from './Components/BannerOne'
import BannerThree from './Components/BannerThree'
import BannerTwo from './Components/BannerTwo';
import BannerFour from './Components/BannerFour'




const Home = () => {
  return (
    <>
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour/>
    </>

  )
}

export default Home