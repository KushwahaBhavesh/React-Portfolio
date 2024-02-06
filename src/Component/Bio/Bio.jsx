import React from 'react'
import './Bio.css'
import profile from '../../assets/img/profile.png'
import { Fade, Slide } from 'react-awesome-reveal'

const Bio = () => {
  return <>
    <section className='bio-section' id='about'>
      <Fade direction='down' duration={2000} triggerOnce={true}>
        <h2>About</h2>
      </Fade>
      <div className='bio-container'>
        <Fade direction='left' duration={2000} triggerOnce={true}>
          <div className='bio-img'>
            <img src={profile} alt='' />
          </div>
        </Fade>
        <Fade direction='right' duration={2000} triggerOnce={true}>
          <div className='bio-info'>
            <p>Hello, I'm Bhavesh Kushwaha, a dedicated Computer Engineering student at Government Engineering College Rajkot. My passion lies in the world of web development and software engineering. I am on a journey to become an expert in web development, leveraging my skills in HTML, CSS, JavaScript, and Java.</p>

            <p> I have a strong background in web development and software engineering, with a focus on creating engaging and functional digital experiences. My skills in HTML, CSS, JavaScript, and Java provide a solid foundation for building dynamic web applications and software solutions.</p>

            <button><a href='https://drive.google.com/file/d/1GdqDU7Ol784tFrfirEvd1h8OO6efXHys/view?usp=drive_link' download="KushwahaBhavesh_cv.pdf">Download CV</a></button>
          </div>
        </Fade>

      </div>

    </section>
  </>
}

export default Bio
