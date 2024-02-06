import React from 'react'
import './WorkExperience.css'
import { workData } from '../../utils/workData.js'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { Fade } from 'react-awesome-reveal'

const WorkExperience = () => {
  return <>
    <section className='work-section' id='experience'>
      <h2>Work Experience</h2>
      <div className='work-timeline'>
        <div className='card-container'>
          {workData.map((item, index) => <Fade key={index} className='card' direction='up' duration={2000} triggerOnce={true}>
          <ExperienceCard key={index} workdata={item} /></Fade>)}
        </div>
        </div>
    </section>
  </>
}

export default WorkExperience
