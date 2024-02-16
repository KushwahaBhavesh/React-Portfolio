import React from 'react'
import './Form.css'
import { Fade } from 'react-awesome-reveal'

const Form = () => {
  return <>
   <Fade duration={2000} direction='right'  triggerOnce={true}>
    <form method='Post' action="https://formspree.io/f/xnqepowe">
      <div className='name-container'>
        <input type='text' name='first-Name' id='first-name' placeholder='First Name' />
        <input type='text' name='last-Name' id='last-name' placeholder='last Name' />
      </div>
      <div>
        <input type='email' name='email' id='email' placeholder='Email' />
      </div>
      <div >
        <input type='tel' name='phoneNo' id='phoneNo' placeholder='Phone No' />
      </div>
      <div>
        <input type='text' name='subject' id='subject' placeholder='Subject' />
      </div>
      <div>
        <textarea rows={8} placeholder='Description' name='description' id='description'/>
      </div>
      <div className='send-btn'>
        <input type='submit' value="send message" className='form-btn' />
      </div>
    </form>
    </Fade>
  </>
}

export default Form
