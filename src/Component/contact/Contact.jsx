import React from 'react'
import './Contact.css'
import Form from './FormContainer/Form'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
  return <>
    <section className='section-contact container' id='contact'>
      <h2>Contact Us</h2>
      <div className='contact-container'>
      <Fade duration={2000} direction='left'  triggerOnce={true}>
        <div className='map-container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947166.6422598608!2d71.21458365134404!3d21.977963552493257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0bae890265%3A0x791c3a55d1ba2885!2sGovernment%20Engineering%20College%2C%20Rajkot!5e0!3m2!1sen!2sin!4v1690309004490!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
      </Fade>
        
        <div className='form-container'>
          <Form />
        </div>
      </div>
    </section >
  </>
}

export default Contact
