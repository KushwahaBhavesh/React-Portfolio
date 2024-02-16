import React from 'react'
import './ParallelEffect.css'
import {Zoom } from 'react-awesome-reveal'
import { HashLink } from 'react-router-hash-link'

const ParallelEffect = () => {
  return <>
    <section className="section-web">
      <div className="overlay-parallel"></div>
      <Zoom triggerOnce={true} duration={2000}>
        <div className="data-container">
          <h2>I am a <span>Web Developer</span></h2>
          <p>I am an aspiring web developer with a strong passion for creating dynamic and visually appealing
            websites. As a beginner in the world of web development, I am eager to learn, grow, and showcase my
            evolving skills through my portfolio website. My journey in web development is marked by a
            commitment to
            delivering simple, user-friendly designs and gradually expanding my technical expertise.</p>
          <button> <HashLink to="#contact" className="btn">Hire Me</HashLink></button>
        </div>
      </Zoom>
    </section>
    
  </>
}

export default ParallelEffect
