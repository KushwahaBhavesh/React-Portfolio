import React, { useState } from 'react'
import './ProjectCard.css'
import Modal from '../modal/modal'
import { Fade } from 'react-awesome-reveal';

const ProjectCard = ({ projectData }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProject, SetSelectedProject] = useState(null)

  const onModelHandler = (event) => {
    SetSelectedProject(event.name)
  }
  // finding project details
  const ProjectDetails = projectData.find((item) => item.name === selectedProject)


  return <>
    <div className='Project-Card-container'>
      {projectData.map((item,index) => (
        <Fade duration={1500} direction='up' delay={index * 100} triggerOnce={true} key={index}>
          <div className='project-info-content' key={item.name}>
            <div className='project-img'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='project-name' onClick={() => setOpenPopup(true)}>
              <span onClick={() => onModelHandler(item)}>
                {item.name}
              </span>
            </div>

          </div>
        </Fade>))}

    </div>
    <Modal open={openPopup} ProjectDetails={ProjectDetails} onClose={() => setOpenPopup(false)} onModelHandler={onModelHandler} />
  </>
}

export default ProjectCard
