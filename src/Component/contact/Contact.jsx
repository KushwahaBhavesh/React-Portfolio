import React from 'react'
import './Contact.css'
import Form from './FormContainer/Form'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
  return <>
    <section className='section-contact container' id='contact'>
      <h2>Contact Us</h2>        
        <div className='form-container'>
          <Form />
      </div>
    </section >
  </>
}

export default Contact
