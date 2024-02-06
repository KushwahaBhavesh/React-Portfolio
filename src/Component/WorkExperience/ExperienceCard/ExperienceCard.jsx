import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ workdata }) => {
  return <>
      <div className='card-detail'>
        <h2>{workdata.title}</h2>
        <div className='industry-location'>
          <span className='industry'>{workdata.industry}</span>
          <span className='location'>{workdata.location}</span>
        </div>
        <div className='position-duration'>
          <span className='position'>{workdata.position}</span>
          <span className='duration'>{workdata.duration}</span>
        </div>
        <div className='description'>
          <p>{workdata.description}</p>
        </div>
      </div>
  </>
}

export default ExperienceCard
