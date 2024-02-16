import React from 'react'
import './Footer.css'
import { Zoom } from 'react-awesome-reveal'
import { HashLink } from 'react-router-hash-link'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
  return <>
    <footer className='footer-container '>
      <Zoom duration={2000} triggerOnce={true}>
        <div className='top-footer'>
          <div className='top-footer-info'>
            <h2>Ready to get started</h2>
            <p>Talk to us today</p>
          </div>
          <div className='top-footer-btn'>
            <button><HashLink to="#home" className='get-started'>Get Started</HashLink></button>
          </div>
        </div>
      </Zoom>

      <div className='center-Footer'>
        <div className='about-footer'>
          <h2>kushwaha Bhavesh</h2>
          <p>Hello, I'm Bhavesh Kushwaha, a dedicated Computer Engineering student at Government Engineering
            College Rajkot. My passion lies in the world of web development and software engineering.</p>
          <div className='social-icons-content'>
            <a href='#' className='icons'><FaFacebookF /></a>
            <a href='#' className='icons'><FaGoogle /></a>
            <a href='#' className='icons'><FaThreads /></a>
            <a href='https://www.instagram.com/bhavesh_kushwaha_1805/' className='icons'><FiInstagram /></a>
            <a href='https://github.com/KushwahaBhavesh' className='icons'><PiGithubLogoFill /></a>
          </div>
        </div>
        <div className='footer-links'>
          <h2>Links</h2>
          <ul>
            <li><HashLink to="#home">Home</HashLink></li>
            <li><HashLink to="#about">about</HashLink></li>
            <li><HashLink to="#project">project</HashLink></li>
            <li><HashLink to="#skill">Skill</HashLink></li>
            <li><HashLink to="#contact">contact</HashLink></li>
          </ul>
        </div>
        <div className='address-footer'>
          <h2>
            Have a Question...?
          </h2>
          <address>
            <div>
              <p><span><ion-icon name="location-outline" role="img" class="md hydrated"></ion-icon></span> 22A RaghuvirNagar-1, Andada, Ankleshwar-393010, Bharuch, Gujarat, India</p>
            </div>
            <div>
              <p><ion-icon name="call-outline" role="img" class="md hydrated"></ion-icon><a href="tel:+917043110416"> +91
                7043110416</a></p>
            </div>
            <div>
              <p><span><ion-icon name="mail-outline" role="img" class="md hydrated"></ion-icon></span><a href="mailto:bhavesh18122002@gmail.com">     bhavesh18122002@gmail.com</a></p>
            </div>
          </address>

        </div>

      </div>
      <hr />
      <div className='footer-credit'>
        <p>Made With 💓💛LOVE💚💙 by : Kushwaha Bhavesh  | Copyright © 2024</p>
      </div>

    </footer>
  </>
}

export default Footer
