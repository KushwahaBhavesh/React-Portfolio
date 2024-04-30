import React from 'react'
import './ToggleMenu.css'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { HashLink } from 'react-router-hash-link';


const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className='mobile-menu-container'>

        <ul>
          <li><HashLink className='menu-items' to='#home'><IoHome /> Home</HashLink></li>
          <li><HashLink className='menu-items' to='#about'><FcAbout /> About</HashLink></li>
          <li><HashLink className='menu-items' to='#skill'><GiSkills /> Skills</HashLink></li>
          <li><HashLink className='menu-items' to='#experience'><MdWork /> Experience</HashLink></li>
          <li><HashLink className='menu-items' to='#project'><GoProjectRoadmap /> Project</HashLink></li>
          <HashLink to='#contact'><button className='contact-btn'>contact</button></HashLink>
        </ul>
        <h2 className='logo'>Kushwaha  Bhavesh</h2>
      </div>
    </div>
  </>
}

export default ToggleMenu
