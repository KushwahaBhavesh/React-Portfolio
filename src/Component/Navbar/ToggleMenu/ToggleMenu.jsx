import React from 'react'
import './ToggleMenu.css'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";

const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className='mobile-menu-container'>
        <h2 className='logo'>Kushwaha  Bhavesh</h2>
        <ul>
          <li><a className='menu-items' href='#home'><IoHome/> Home</a></li>
          <li><a className='menu-items' href='#about'><FcAbout/> About</a></li>
          <li><a className='menu-items' href='#skill'><GiSkills/> Skills</a></li>
          <li><a className='menu-items' href='#experience'><MdWork/> Experience</a></li>
          <li><a className='menu-items' href='#project'><GoProjectRoadmap /> Project</a></li>
          <a href='#contact'><button className='contact-btn'>Hire me</button></a>
        </ul>
      </div>
    </div>
  </>
}

export default ToggleMenu
