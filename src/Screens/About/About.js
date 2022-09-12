import React from 'react'
import {
    Typography,
    Grid,
    Box,
    Container
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/system';
import darkBg from "../../Assets/Images/homeDarkbg.png"
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';

const About = () => {
  return (
    <>
      <SectionOne/>
      <SectionTwo/>
    </>
  )
}

export default About