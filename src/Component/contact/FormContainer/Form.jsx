import React from 'react'
import './Form.css'
import { Fade } from 'react-awesome-reveal'

const Form = () => {
  return <>
   <Fade duration={2000} direction='right'  triggerOnce={true}>
    <form method='Post'>
      <div className='name-container'>
        <input type='text' name='first-Name' placeholder='First Name' />
        <input type='text' name='last-Name' placeholder='last Name' />
      </div>
      <div>
        <input type='email' name='email' placeholder='Email' />
      </div>
      <div >
        <input type='tel' name='phoneNo' placeholder='Phone No' />
      </div>
      <div>
        <input type='text' name='subject' placeholder='Subject' />
      </div>
      <div>
        <textarea rows={8} placeholder='Description' />
      </div>
      <div className='send-btn'>
        <button >send</button>
      </div>
    </form>
    </Fade>
  </>
}

export default Form
