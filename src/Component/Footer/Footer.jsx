import React from 'react'
import './Footer.css'
import { Zoom } from 'react-awesome-reveal'

const Footer = () => {
  return <>
    <footer className='footer-container '>
      <Zoom duration={2000}  triggerOnce={true}>
        <div className='top-footer'>
          <div className='top-footer-info'>
            <h2>Ready to get started</h2>
            <p>Talk to us today</p>
          </div>
          <div className='top-footer-btn'>
            <button>Get Started</button>
          </div>
        </div>
      </Zoom>

      <div className='center-Footer'>
        <div className='about-footer'>
          <h2>kushwaha Bhavesh</h2>
          <p>Hello, I'm Bhavesh Kushwaha, a dedicated Computer Engineering student at Government Engineering
            College Rajkot. My passion lies in the world of web development and software engineering.</p>
          <div className='social-icons'>
            <ion-icon name="logo-facebook" className="facebook social md hydrated" role="img"></ion-icon>
            <ion-icon name="logo-google" className="google social md hydrated" role="img"></ion-icon>
            <ion-icon name="logo-twitter" className="twitter social md hydrated" role="img"></ion-icon>
            <a href="https://www.instagram.com/bhavesh_kushwaha_1805/"><ion-icon name="logo-instagram" className="instagram social md hydrated" role="img"></ion-icon></a>
            <a href="https://github.com/KushwahaBhavesh"><ion-icon name="logo-github" className="github social md hydrated" role="img"></ion-icon></a>
          </div>
        </div>
        <div className='footer-links'>
          <h2>Links</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#contact">contact</a></li>
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
