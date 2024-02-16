import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import './SocialMedia.css'
import { Fade } from 'react-awesome-reveal';
const SocialMedial = () => {
  return <>
  <Fade duration={2500} className="social-icons-container">
      <div className='social-icons-content'>
        <a href='#' className='icons'><FaFacebookF /></a>
        <a href='#' className='icons'><FaGoogle /></a>
        <a href='#' className='icons'><FaThreads /></a>
        <a href='https://www.instagram.com/bhavesh_kushwaha_1805/' className='icons'><FiInstagram /></a>
        <a href='https://github.com/KushwahaBhavesh' className='icons'><PiGithubLogoFill /></a>
      </div>
    </Fade>
  </>
}

export default SocialMedial
