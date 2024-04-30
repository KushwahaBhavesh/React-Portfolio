import './Hero.css'
import ReactIcon from "/assets/img/react-icon.png"
import Profile from "/assets/img/profile.png"
import Html from "/assets/img/html-icon.png"
import Css from "/assets/img/css-icon.png"
import Javascript from "/assets/img/javascript-icon.png"

import Node from "/assets/img/node-logo.png"
import { Fade} from 'react-awesome-reveal'


const Hero = () => {
  return <>
    <main>
      <section className='hero-container' id='home'>
        <div className='hero-content'>
          <Fade duration={2000} direction='up' cascade='1.1' triggerOnce={true} >
            <h2>" Crafting   Experiences , Shaping Dreams " </h2>
            <p className='slogan'>Your Frontend Journey Begins Here!s</p>
            <p className='descriptions'>"Crafting Tomorrow's Digital Experiences: Where Code Converges with Creativity to Shape Seamless User Interfaces."</p>
          </Fade>
        </div>
        <Fade  duration={2000} triggerOnce={true}>
          <div className='hero-img'>
            <div>
              <div className='top-img'>
                <img src={ReactIcon} alt='react-logo' className='react-icons' />
                <img src={Html} alt='html-logo' className='icons' />
              </div>
              <div className='center-img'>
                <img src={Profile} alt='profile-img' className='profile' />

                <div className='tech-icon'>
                  <img src={Javascript} alt='javascript-logo' className='icons' />
                  <img src={Node} alt='node-logo' className='icons' />
                </div>
              </div>
            </div>

            <div className='bottom-icon'>
              <img src={Css} alt='css-logo' className='icons' />
            </div>
          </div>
        </Fade>
      </section>
    </main>
  </>
}

export default Hero
