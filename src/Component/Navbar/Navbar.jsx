import { useState } from 'react';
import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import ToggleMenu from './ToggleMenu/ToggleMenu';
import { IoCloseSharp } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';



const Navbar = () => {

  const [Open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!Open);
  }

  return <>

    <ToggleMenu isOpen={Open} toggleMenu={toggle} />

    <header className='header'>
    <button className='toggle-btn' onClick={() => { toggle() }}>
          {Open ? <IoCloseSharp /> : <TiThMenu />}
        </button>
      <div className='logo-container'>
        <h2 className='logo'>Kushwaha Bhavesh</h2>
      </div>
      <nav className='nav-list'>
        <ul>
          <li><HashLink className='menu-items' to='#home'>Home</HashLink></li>
          <li><HashLink className='menu-items' to='#about'>About</HashLink></li>
          <li><HashLink className='menu-items' to='#skill'>Skills</HashLink></li>
          <li><HashLink className='menu-items' to='#experience'>Experience</HashLink></li>
          <li><HashLink className='menu-items' to='#project'>Project</HashLink></li>
          <HashLink to='#contact'><button className='contact-btn'>Contact</button></HashLink>
        </ul>
       

      </nav>

    </header>
  </>
}

export default Navbar
