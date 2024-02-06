import React from 'react'
import './modal.css'
import { AiFillCloseCircle } from "react-icons/ai";
import {  Slide } from 'react-awesome-reveal';

const modal = ({ open, onClose, ProjectDetails,  }) => {
  if (!open) return null

  console.log(ProjectDetails);
  return <>
    <div className='overlay'>
    <Slide direction='right' style={{width:'100vw',height:'100vh'}} duration={1500} triggerOnce={true}> 
      <div className='modal-container'>
        <div className='left-content'>
          <img src={ProjectDetails.image} />
          <h2>{ProjectDetails.name}</h2>
          <p>{ProjectDetails.type}</p>
        </div>
        <div className='right-content'>
          <p onClick={onClose} className='close' ><AiFillCloseCircle/></p>
          <p className='description'>{ProjectDetails.description}</p>
          <a href={ProjectDetails.link}><h3>View: Source Code</h3></a>
        </div>
      </div>
      </Slide>
    </div>
  </>
}

export default modal
