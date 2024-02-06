import React from 'react'
import './ProjectMenu.css'
import { Fade } from 'react-awesome-reveal'

const ProjectMenu = ({ type,selectedType,onclickHandler }) => {

  return <>
    {type.map((type, index) => (
      <Fade duration={1000} delay={index * 200} direction='up' cascade={false} triggerOnce={true} key={index}>
      <div className={`project-menu-list ${type === selectedType ? "active" : "" }`} key={index} onClick={()=>onclickHandler(type)}>
        <span >{type}</span>
      </div>
      </Fade>
    ))}
  </>
}

export default ProjectMenu
