import './Hero.css'
import ReactIcon from "../../assets/img/react-icon.png"
import Profile from "../../assets/img/profile.png"
import Html from "../../assets/img/html-icon.png"
import Css from "../../assets/img/css-icon.png"
import Javascript from "../../assets/img/javascript-icon.png"

import Node from "../../assets/img/node-logo.png"
import { Fade } from 'react-awesome-reveal'

const Hero = () => {
  return <>
    <main>
      <section className='hero-container' id='hero'>
        <div className='hero-content'>
          <Fade direction='down' duration={1500} triggerOnce={true}>
            <h2>" Crafting   Experiences , Shaping Dreams " </h2>
            <Fade direction='up' duration={1500} triggerOnce={true} >
              <span>Your Frontend Journey Begins Here!s</span>
              <p className='descriptions'>"Crafting Tomorrow's Digital Experiences: Where Code Converges with Creativity to Shape Seamless User Interfaces."</p>
            </Fade>
          </Fade>
          <Fade direction='left' duration={1500} triggerOnce={true} damping={0.5}>
            <div className="social-icons">
              <ion-icon name="logo-facebook" className="facebook social md hydrated" role="img"></ion-icon>
              <ion-icon name="logo-google" className="google social md hydrated" role="img"></ion-icon>
              <ion-icon name="logo-twitter" className="twitter social md hydrated" role="img"></ion-icon>
              <a href="https://www.instagram.com/bhavesh_kushwaha_1805/"><ion-icon name="logo-instagram" className="instagram social md hydrated" role="img"></ion-icon></a>
              <a href="https://github.com/KushwahaBhavesh"><ion-icon name="logo-github" className="github social md hydrated" role="img"></ion-icon></a>

            </div>
          </Fade>
        </div>
        <Fade direction='right' duration={1500} triggerOnce={true}>
          <div className='hero-img'>
            <div>
              <div className='top-img'>
                <img src={ReactIcon} className='react-icons' />
                <img src={Html} className='icons' />
              </div>
              <div className='center-img'>
                <img src={Profile} className='profile' />

                <div className='tech-icon'>
                  <img src={Javascript} className='icons' />
                  <img src={Node} className='icons' />
                </div>
              </div>
            </div>

            <div className='bottom-icon'>
              <img src={Css} className='icons' />
            </div>
          </div>
        </Fade>
      </section>
    </main>
  </>
}

export default Hero
