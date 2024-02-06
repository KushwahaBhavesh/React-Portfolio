import React from 'react'
import Navbar from '../Navbar/Navbar'
import './NotFound.css'

const NotFound = () => {
  return <>
    <Navbar />
    <div className='section-notfound'>
      <div className='notfound-content'>
        <h1>404</h1>
        <span>oops! Page not Found</span>
        <p>sorry, the page you're looking, that does'nt exist. </p>
        <a>Return Home</a>
      </div>
    </div>
  </>
}

export default NotFound
