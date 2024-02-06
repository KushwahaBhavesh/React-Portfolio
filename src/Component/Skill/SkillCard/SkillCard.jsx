import React from 'react'
import './SkillCard.css'
const SkillCard = ({  isActive, title, iconUrl, onClickHandler }) => {
  return <>
    
      <div className={`skill-card ${isActive ? "active" : ""}`}
        onClick={() => onClickHandler()}>

        <div className='skill-icon'>
          <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
      </div>
  </>
}

export default SkillCard
